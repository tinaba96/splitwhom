// Settlement engine: turns a list of expenses into per-member balances and the
// minimal set of "who pays whom" transfers.
//
// Everything is computed in integer MINOR units (cents / yen) to avoid floating
// point drift. A whole settlement always reconciles to exactly zero.

import { CURRENCIES, type Expense, type Member, type SplitState } from "./types";

export interface MemberBalance {
  memberId: string;
  /** total they paid out, minor units */
  paid: number;
  /** total they were responsible for, minor units */
  owed: number;
  /** paid - owed. positive = they should receive, negative = they should pay */
  net: number;
}

export interface Transfer {
  fromId: string;
  toId: string;
  /** amount in minor units */
  amount: number;
}

export interface Settlement {
  decimals: number;
  balances: MemberBalance[];
  transfers: Transfer[];
}

/** Convert a major-unit amount to integer minor units (e.g. 12.34 USD -> 1234). */
export function toMinor(amount: number, decimals: number): number {
  return Math.round(amount * 10 ** decimals);
}

/** Convert integer minor units back to a major-unit number (1234 -> 12.34). */
export function toMajor(minor: number, decimals: number): number {
  return minor / 10 ** decimals;
}

/**
 * Split an integer total across n participants as evenly as possible.
 * The first `total % n` participants each pay one extra minor unit, so the
 * shares always sum back to exactly `total`.
 */
export function splitEvenly(total: number, n: number): number[] {
  if (n <= 0) return [];
  const base = Math.floor(total / n);
  const remainder = total - base * n;
  return Array.from({ length: n }, (_, i) => base + (i < remainder ? 1 : 0));
}

/**
 * Split an integer `total` among participants where some have a maximum (cap)
 * they will pay. Anyone whose equal share would exceed their cap pays exactly the
 * cap, and the excess is re-split among the remaining participants — repeated until
 * no remaining cap is exceeded (progressive "water-filling"). Participants without
 * a cap (or whose cap doesn't bind) split the remainder equally. The returned shares
 * always sum to `total`. If caps are collectively too low to cover `total`, the
 * unavoidable leftover is spread equally so the expense still reconciles.
 */
export function splitWithCaps(
  total: number,
  participantIds: string[],
  caps: Map<string, number>,
): Map<string, number> {
  const owed = new Map<string, number>(participantIds.map((id) => [id, 0]));
  let remaining = total;
  let active = [...participantIds];

  // Each iteration caps at most one member; bounded by the participant count.
  for (let guard = 0; guard <= participantIds.length && active.length > 0; guard++) {
    const n = active.length;
    // smallest binding cap = an active member whose cap is below the equal share
    let bind: string | null = null;
    let bindCap = Infinity;
    for (const id of active) {
      const cap = caps.get(id);
      if (cap !== undefined && cap * n < remaining && cap < bindCap) {
        bind = id;
        bindCap = cap;
      }
    }
    if (bind === null) {
      // no cap binds: everyone left splits the remainder equally
      const shares = splitEvenly(remaining, n);
      active.forEach((id, i) => owed.set(id, (owed.get(id) ?? 0) + shares[i]));
      remaining = 0;
      active = [];
      break;
    }
    owed.set(bind, (owed.get(bind) ?? 0) + bindCap);
    remaining -= bindCap;
    active = active.filter((id) => id !== bind);
  }

  // Caps too low to cover the total: spread the unavoidable leftover so it reconciles.
  if (remaining !== 0 && participantIds.length > 0) {
    const shares = splitEvenly(remaining, participantIds.length);
    participantIds.forEach((id, i) => owed.set(id, (owed.get(id) ?? 0) + shares[i]));
  }
  return owed;
}

/** Compute each member's paid / owed / net in minor units. */
export function computeBalances(
  members: Member[],
  expenses: Expense[],
  decimals: number,
): MemberBalance[] {
  const paid = new Map<string, number>();
  const owed = new Map<string, number>();
  for (const m of members) {
    paid.set(m.id, 0);
    owed.set(m.id, 0);
  }

  for (const exp of expenses) {
    const participants = exp.participantIds.filter((id) => owed.has(id));
    if (participants.length === 0) continue;

    const total = toMinor(exp.amount, decimals);
    if (paid.has(exp.payerId)) {
      paid.set(exp.payerId, (paid.get(exp.payerId) ?? 0) + total);
    }

    // Optional per-person spending caps; the rest is shared via water-filling.
    const caps = new Map<string, number>();
    if (exp.caps) {
      for (const id of participants) {
        const c = exp.caps[id];
        if (Number.isFinite(c) && c >= 0) caps.set(id, toMinor(c, decimals));
      }
    }

    const shares = splitWithCaps(total, participants, caps);
    for (const [id, share] of shares) {
      owed.set(id, (owed.get(id) ?? 0) + share);
    }
  }

  return members.map((m) => {
    const p = paid.get(m.id) ?? 0;
    const o = owed.get(m.id) ?? 0;
    return { memberId: m.id, paid: p, owed: o, net: p - o };
  });
}

/**
 * Greedy minimal-transfer settlement. Repeatedly settles the largest debtor
 * against the largest creditor. Produces a near-minimal number of transfers
 * (exact minimization is NP-hard; this is the standard practical approach).
 */
export function minimizeTransfers(balances: MemberBalance[]): Transfer[] {
  const creditors = balances
    .filter((b) => b.net > 0)
    .map((b) => ({ id: b.memberId, amount: b.net }));
  const debtors = balances
    .filter((b) => b.net < 0)
    .map((b) => ({ id: b.memberId, amount: -b.net }));

  // largest first so we clear big imbalances in fewest steps
  creditors.sort((a, b) => b.amount - a.amount);
  debtors.sort((a, b) => b.amount - a.amount);

  const transfers: Transfer[] = [];
  let ci = 0;
  let di = 0;
  while (ci < creditors.length && di < debtors.length) {
    const credit = creditors[ci];
    const debit = debtors[di];
    const amount = Math.min(credit.amount, debit.amount);
    if (amount > 0) {
      transfers.push({ fromId: debit.id, toId: credit.id, amount });
    }
    credit.amount -= amount;
    debit.amount -= amount;
    if (credit.amount === 0) ci++;
    if (debit.amount === 0) di++;
  }
  return transfers;
}

export function settle(state: SplitState): Settlement {
  const decimals = CURRENCIES[state.currency].decimals;
  const balances = computeBalances(state.members, state.expenses, decimals);
  const transfers = minimizeTransfers(balances);
  return { decimals, balances, transfers };
}
