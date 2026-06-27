"use client";

import type { SplitState } from "@/lib/types";
import type { Settlement } from "@/lib/settle";

interface Props {
  state: SplitState;
  result: Settlement;
  fmt: (minor: number) => string;
  totalMinor: number;
}

export default function ResultsSection({ state, result, fmt, totalMinor }: Props) {
  const nameOf = (id: string) => state.members.find((m) => m.id === id)?.name ?? "?";
  const hasData = state.members.length > 0 && state.expenses.length > 0;

  if (!hasData) {
    return (
      <section className="rounded-2xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted shadow-sm">
        Add members and payments to see the settlement here.
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5">
      {/* Settlement routes — the headline result */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-base font-semibold">Settlement — fewest payments</h2>
          <span className="text-xs text-muted">Total {fmt(totalMinor)}</span>
        </div>
        {result.transfers.length === 0 ? (
          <p className="text-sm text-muted">All settled — nobody owes anything 🎉</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {result.transfers.map((t, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl bg-background px-3 py-2.5 text-sm"
              >
                <span className="font-semibold">{nameOf(t.fromId)}</span>
                <span className="text-brand">→</span>
                <span className="font-semibold">{nameOf(t.toId)}</span>
                <span className="ml-auto font-mono font-bold">{fmt(t.amount)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Balance breakdown — the logic behind it */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <h2 className="mb-3 text-base font-semibold">Balances</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted">
                <th className="pb-2 font-medium">Member</th>
                <th className="pb-2 text-right font-medium">Paid</th>
                <th className="pb-2 text-right font-medium">Share</th>
                <th className="pb-2 text-right font-medium">Net</th>
              </tr>
            </thead>
            <tbody>
              {result.balances.map((b) => (
                <tr key={b.memberId} className="border-t border-border">
                  <td className="py-2 font-medium">{nameOf(b.memberId)}</td>
                  <td className="py-2 text-right font-mono">{fmt(b.paid)}</td>
                  <td className="py-2 text-right font-mono text-muted">{fmt(b.owed)}</td>
                  <td
                    className={
                      "py-2 text-right font-mono font-semibold " +
                      (b.net > 0 ? "text-positive" : b.net < 0 ? "text-negative" : "text-muted")
                    }
                  >
                    {b.net > 0 ? "+" : ""}
                    {fmt(b.net)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          <span className="text-positive">Positive</span> = gets money back /{" "}
          <span className="text-negative">negative</span> = owes money
        </p>
      </div>
    </section>
  );
}
