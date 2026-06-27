"use client";

import { useMemo } from "react";
import { CURRENCIES, type CurrencyCode, type SplitState, emptyState } from "@/lib/types";
import { settle } from "@/lib/settle";
import { formatMinor, makeId } from "@/lib/format";
import { useSplitState } from "@/lib/store";
import type { Dictionary } from "@/i18n/types";
import MembersSection from "./MembersSection";
import ExpensesSection from "./ExpensesSection";
import ResultsSection from "./ResultsSection";

function sampleState(t: Dictionary): SplitState {
  const ids = t.sample.names.map((name) => ({ id: makeId(), name }));
  const [A, B, C, D, E] = ids;
  return {
    title: t.sample.title,
    currency: "USD",
    members: ids,
    expenses: [
      { id: makeId(), payerId: A.id, description: t.sample.food, amount: 300, participantIds: [A, B, C, D, E].map((m) => m.id) },
      { id: makeId(), payerId: B.id, description: t.sample.drinks, amount: 100, participantIds: [A, B, C].map((m) => m.id) },
      { id: makeId(), payerId: C.id, description: t.sample.firewood, amount: 50, participantIds: [A, B, C, D, E].map((m) => m.id) },
    ],
  };
}

export default function SplitApp({ t }: { t: Dictionary }) {
  const [state, setState] = useSplitState();

  const result = useMemo(() => settle(state), [state]);
  const fmt = (minor: number) => formatMinor(minor, state.currency);
  const totalMinor = result.balances.reduce((s, b) => s + b.paid, 0);
  const update = (patch: Partial<SplitState>) => setState((s) => ({ ...s, ...patch }));

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-medium text-muted">{t.setup.eventName}</span>
            <input
              value={state.title}
              onChange={(e) => update({ title: e.target.value })}
              placeholder={t.setup.eventPlaceholder}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted">{t.setup.currency}</span>
            <select
              value={state.currency}
              onChange={(e) => update({ currency: e.target.value as CurrencyCode })}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.symbol} {c.code}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <MembersSection t={t} state={state} setState={setState} />
      <ExpensesSection t={t} state={state} setState={setState} fmt={fmt} />
      <ResultsSection t={t} state={state} result={result} fmt={fmt} totalMinor={totalMinor} />

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <button
          onClick={() => {
            if (state.members.length === 0 || window.confirm(t.footer.confirmSample)) {
              setState(sampleState(t));
            }
          }}
          className="rounded-lg border border-border px-3 py-1.5 font-medium text-foreground hover:bg-background"
        >
          {t.footer.loadSample}
        </button>
        <button
          onClick={() => {
            if (window.confirm(t.footer.confirmReset)) setState(emptyState());
          }}
          className="rounded-lg px-3 py-1.5 font-medium hover:text-negative"
        >
          {t.footer.reset}
        </button>
      </div>
    </div>
  );
}
