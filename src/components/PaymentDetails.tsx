import { CURRENCIES, type SplitState } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import { toMinor } from "@/lib/settle";
import { fill } from "@/lib/interpolate";

// Read-only, collapsible list of the actual payments behind a shared result:
// who paid for what, how much, and how it was split (incl. caps).
export default function PaymentDetails({
  t,
  state,
  fmt,
}: {
  t: Dictionary;
  state: SplitState;
  fmt: (minor: number) => string;
}) {
  const { members, expenses } = state;
  const decimals = CURRENCIES[state.currency].decimals;
  const nameOf = (id: string) => members.find((m) => m.id === id)?.name ?? t.payments.removed;

  if (expenses.length === 0) return null;

  return (
    <details className="group rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
        <span className="flex items-center justify-between gap-2">
          {t.payments.title}
          <span aria-hidden className="text-muted transition group-open:rotate-180">▾</span>
        </span>
      </summary>

      <ul className="mt-3 flex flex-col gap-2">
        {expenses.map((e) => {
          const cs = e.caps;
          const cappedIds = cs
            ? e.participantIds.filter((id) => Number.isFinite(cs[id]) && cs[id] >= 0)
            : [];
          const restIds = e.participantIds.filter((id) => !cappedIds.includes(id));
          return (
            <li
              key={e.id}
              className="flex items-center gap-3 rounded-xl border border-border px-3 py-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{nameOf(e.payerId)}</span>
                  <span className="text-muted">{t.payments.paidFor}</span>
                  <span className="truncate">{e.description}</span>
                </div>
                <div className="mt-0.5 text-xs text-muted">
                  {cappedIds.length === 0 ? (
                    e.participantIds.length === members.length ? (
                      t.payments.splitEveryone
                    ) : (
                      fill(t.payments.splitBetweenNames, {
                        names: e.participantIds.map(nameOf).join(" · "),
                      })
                    )
                  ) : (
                    <span>
                      {cappedIds
                        .map((id) => `${nameOf(id)} ${fmt(toMinor(cs![id], decimals))}`)
                        .join(", ")}{" "}
                      <span className="rounded bg-border px-1 py-0.5 text-[10px] uppercase tracking-wide">
                        {t.payments.capTag}
                      </span>
                      {restIds.length > 0 &&
                        " · " +
                          fill(t.payments.splitRest, { names: restIds.map(nameOf).join(" · ") })}
                    </span>
                  )}
                </div>
              </div>
              <span className="shrink-0 font-mono text-sm font-semibold">
                {fmt(toMinor(e.amount, decimals))}
              </span>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
