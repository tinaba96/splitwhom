"use client";

import { useMemo } from "react";
import { CURRENCIES, type CurrencyCode, type SplitState, emptyState } from "@/lib/types";
import { settle } from "@/lib/settle";
import { formatMinor, makeId } from "@/lib/format";
import { useSplitState } from "@/lib/store";
import MembersSection from "./MembersSection";
import ExpensesSection from "./ExpensesSection";
import ResultsSection from "./ResultsSection";

function sampleState(): SplitState {
  const names = ["Alex", "Ben", "Chloe", "Dan", "Emma"];
  const ids = names.map((name) => ({ id: makeId(), name }));
  const [A, B, C, D, E] = ids;
  return {
    title: "Camping trip",
    currency: "USD",
    members: ids,
    expenses: [
      {
        id: makeId(),
        payerId: A.id,
        description: "Food",
        amount: 300,
        participantIds: [A, B, C, D, E].map((m) => m.id),
      },
      {
        id: makeId(),
        payerId: B.id,
        description: "Drinks",
        amount: 100,
        participantIds: [A, B, C].map((m) => m.id),
      },
      {
        id: makeId(),
        payerId: C.id,
        description: "Firewood",
        amount: 50,
        participantIds: [A, B, C, D, E].map((m) => m.id),
      },
    ],
  };
}

export default function SplitApp() {
  const [state, setState] = useSplitState();

  const result = useMemo(() => settle(state), [state]);
  const fmt = (minor: number) => formatMinor(minor, state.currency);

  const totalMinor = result.balances.reduce((s, b) => s + b.paid, 0);

  const update = (patch: Partial<SplitState>) => setState((s) => ({ ...s, ...patch }));

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 sm:py-12">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-lg font-bold text-white shadow-sm">
            ÷
          </span>
          <h1 className="text-2xl font-bold tracking-tight">SplitWhom</h1>
        </div>
        <p className="text-sm text-muted">
          Split shared expenses and see exactly{" "}
          <strong className="text-foreground">who pays whom</strong> — in the fewest payments.
          No sign-up, runs entirely in your browser.
        </p>
      </header>

      <section className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-medium text-muted">Event name</span>
            <input
              value={state.title}
              onChange={(e) => update({ title: e.target.value })}
              placeholder="e.g. Camping trip"
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted">Currency</span>
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

      <MembersSection state={state} setState={setState} />

      <ExpensesSection state={state} setState={setState} fmt={fmt} />

      <ResultsSection state={state} result={result} fmt={fmt} totalMinor={totalMinor} />

      <footer className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <button
          onClick={() => {
            if (
              state.members.length === 0 ||
              window.confirm("Replace your current data with sample data?")
            ) {
              setState(sampleState());
            }
          }}
          className="rounded-lg border border-border px-3 py-1.5 font-medium text-foreground hover:bg-background"
        >
          Load sample data
        </button>
        <button
          onClick={() => {
            if (window.confirm("Erase all data? This cannot be undone.")) {
              setState(emptyState());
            }
          }}
          className="rounded-lg px-3 py-1.5 font-medium hover:text-negative"
        >
          Reset everything
        </button>
      </footer>
    </div>
  );
}
