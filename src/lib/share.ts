// Encode a whole split into a URL hash so it can be shared without any backend.
// The data lives entirely in the link (compressed), so nothing is stored server-side.

import LZString from "lz-string";
import { CURRENCIES, type CurrencyCode, type Expense, type SplitState } from "./types";
import { type Locale, isLocale } from "../i18n/config";
import { makeId } from "./format";

// Compact wire format (short keys, member indices instead of long ids) to keep URLs short.
interface Wire {
  v: 1;
  t: string; // title
  c: CurrencyCode;
  l: Locale;
  m: string[]; // member names (index = member id)
  e: WireExpense[];
}
interface WireExpense {
  p: number; // payer index
  d: string; // description
  a: number; // amount
  w: number[]; // participant indices
  x?: Record<string, number>; // caps keyed by participant index
}

export interface SharedSplit {
  state: SplitState;
  locale: Locale;
}

/** Serialize state + locale into a compressed, URL-safe string. */
export function encodeShare(state: SplitState, locale: Locale): string {
  const index = new Map(state.members.map((m, i) => [m.id, i]));
  const wire: Wire = {
    v: 1,
    t: state.title,
    c: state.currency,
    l: locale,
    m: state.members.map((m) => m.name),
    e: state.expenses.map((exp) => {
      const w: WireExpense = {
        p: index.get(exp.payerId) ?? 0,
        d: exp.description,
        a: exp.amount,
        w: exp.participantIds.map((id) => index.get(id)).filter((i): i is number => i !== undefined),
      };
      if (exp.caps) {
        const x: Record<string, number> = {};
        for (const [id, cap] of Object.entries(exp.caps)) {
          const i = index.get(id);
          if (i !== undefined) x[i] = cap;
        }
        if (Object.keys(x).length > 0) w.x = x;
      }
      return w;
    }),
  };
  return LZString.compressToEncodedURIComponent(JSON.stringify(wire));
}

/** Decode a shared string back into state + locale, or null if invalid. */
export function decodeShare(encoded: string): SharedSplit | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    const wire = JSON.parse(json) as Wire;
    if (!wire || !Array.isArray(wire.m) || !Array.isArray(wire.e)) return null;

    const currency: CurrencyCode = wire.c in CURRENCIES ? wire.c : "USD";
    const locale: Locale = isLocale(wire.l) ? wire.l : "en";

    // rebuild members with stable ids by index
    const ids = wire.m.map(() => makeId());
    const idOf = (i: number) => ids[i];

    const members = wire.m.map((name, i) => ({ id: ids[i], name: String(name) }));

    const expenses: Expense[] = wire.e
      .map((w) => {
        if (!w || !Array.isArray(w.w)) return null;
        const participantIds = w.w
          .filter((i) => i >= 0 && i < ids.length)
          .map(idOf);
        if (participantIds.length === 0) return null;
        const exp: Expense = {
          id: makeId(),
          payerId: idOf(w.p) ?? ids[0],
          description: String(w.d ?? ""),
          amount: Number(w.a) || 0,
          participantIds,
        };
        if (w.x && typeof w.x === "object") {
          const caps: Record<string, number> = {};
          for (const [k, v] of Object.entries(w.x)) {
            const i = Number(k);
            if (i >= 0 && i < ids.length && Number.isFinite(Number(v))) caps[idOf(i)] = Number(v);
          }
          if (Object.keys(caps).length > 0) exp.caps = caps;
        }
        return exp;
      })
      .filter((e): e is Expense => e !== null);

    return {
      state: { title: String(wire.t ?? ""), currency, members, expenses },
      locale,
    };
  } catch {
    return null;
  }
}

/** Build a full /view share URL for the current origin. */
export function buildShareUrl(origin: string, state: SplitState, locale: Locale): string {
  return `${origin}/view/#${encodeShare(state, locale)}`;
}
