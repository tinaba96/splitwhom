"use client";

import type { SplitState } from "@/lib/types";
import type { Settlement } from "@/lib/settle";
import type { Dictionary } from "@/i18n/types";
import { fill } from "@/lib/interpolate";

interface Props {
  t: Dictionary;
  state: SplitState;
  result: Settlement;
  fmt: (minor: number) => string;
  totalMinor: number;
}

export default function ResultsSection({ t, state, result, fmt, totalMinor }: Props) {
  const nameOf = (id: string) => state.members.find((m) => m.id === id)?.name ?? "?";
  const hasData = state.members.length > 0 && state.expenses.length > 0;

  if (!hasData) {
    return (
      <section className="rounded-2xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted shadow-sm">
        {t.results.emptyPrompt}
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5">
      {/* Settlement routes — the headline result, visually emphasized */}
      <div className="rounded-2xl border-2 border-brand/40 bg-brand/5 p-4 shadow-sm sm:p-5">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <h2 className="text-lg font-bold tracking-tight">{t.results.settlementTitle}</h2>
          <span className="text-xs text-muted">{fill(t.results.total, { amount: fmt(totalMinor) })}</span>
        </div>
        {result.transfers.length === 0 ? (
          <p className="text-sm text-muted">{t.results.allSettled}</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {result.transfers.map((tr, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm"
              >
                <span className="font-semibold">{nameOf(tr.fromId)}</span>
                <span className="text-brand">→</span>
                <span className="font-semibold">{nameOf(tr.toId)}</span>
                <span className="ml-auto font-mono font-bold">{fmt(tr.amount)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Balance breakdown — the logic behind it */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <h2 className="mb-3 text-base font-semibold">{t.results.balancesTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted">
                <th className="pb-2 font-medium">{t.results.member}</th>
                <th className="pb-2 text-right font-medium">{t.results.paid}</th>
                <th className="pb-2 text-right font-medium">{t.results.share}</th>
                <th className="pb-2 text-right font-medium">{t.results.net}</th>
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
          <span className="text-positive">{t.results.legendPositive}</span> {t.results.legendPositiveDesc}{" "}
          / <span className="text-negative">{t.results.legendNegative}</span> {t.results.legendNegativeDesc}
        </p>
      </div>
    </section>
  );
}
