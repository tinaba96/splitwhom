"use client";

import { type Dispatch, type SetStateAction, useMemo, useState } from "react";
import { CURRENCIES, type Expense, type SplitState } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import { makeId } from "@/lib/format";
import { toMinor } from "@/lib/settle";
import { fill } from "@/lib/interpolate";

interface Props {
  t: Dictionary;
  state: SplitState;
  setState: Dispatch<SetStateAction<SplitState>>;
  fmt: (minor: number) => string;
}

export default function ExpensesSection({ t, state, setState, fmt }: Props) {
  const { members, expenses } = state;
  const decimals = CURRENCIES[state.currency].decimals;
  const [payerId, setPayerId] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  // track who is EXCLUDED rather than included, so members added later default to sharing.
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  // optional per-person spending caps (raw string inputs by member id)
  const [caps, setCaps] = useState<Record<string, string>>({});
  const [showCaps, setShowCaps] = useState(false);

  const memberIds = useMemo(() => members.map((m) => m.id), [members]);
  const effectivePayer = memberIds.includes(payerId) ? payerId : (memberIds[0] ?? "");
  const participants = useMemo(
    () => memberIds.filter((id) => !excluded.has(id)),
    [memberIds, excluded],
  );
  const allSelected = participants.length === members.length && members.length > 0;

  const nameOf = (id: string) => members.find((m) => m.id === id)?.name ?? t.payments.removed;

  const toggleParticipant = (id: string) =>
    setExcluded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const amountNum = parseFloat(amount);
  // warn only when everyone is capped and the caps cannot cover the total
  const validCapCount = participants.filter((id) => {
    const v = parseFloat(caps[id] ?? "");
    return Number.isFinite(v) && v >= 0;
  }).length;
  const capSum = participants.reduce((s, id) => {
    const v = parseFloat(caps[id] ?? "");
    return s + (Number.isFinite(v) && v >= 0 ? v : 0);
  }, 0);
  const capsTooLow =
    participants.length > 0 &&
    validCapCount === participants.length &&
    amountNum > 0 &&
    capSum < amountNum - 1e-9;

  const addExpense = () => {
    if (!effectivePayer || !description.trim() || !(amountNum > 0) || participants.length === 0) return;
    const capMap: Record<string, number> = {};
    for (const id of participants) {
      const raw = caps[id];
      if (raw !== undefined && raw.trim() !== "") {
        const v = parseFloat(raw);
        if (Number.isFinite(v) && v >= 0) capMap[id] = v;
      }
    }
    const hasCaps = Object.keys(capMap).length > 0;
    const expense: Expense = {
      id: makeId(),
      payerId: effectivePayer,
      description: description.trim(),
      amount: amountNum,
      participantIds: [...participants],
      ...(hasCaps ? { caps: capMap } : {}),
    };
    setState((s) => ({ ...s, expenses: [...s.expenses, expense] }));
    setDescription("");
    setAmount("");
    setCaps({});
  };

  const removeExpense = (id: string) =>
    setState((s) => ({ ...s, expenses: s.expenses.filter((e) => e.id !== id) }));

  const canAdd = effectivePayer && description.trim() && amountNum > 0 && participants.length > 0;

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-base font-semibold">{t.payments.title}</h2>
        <span className="text-xs text-muted">
          {expenses.length} {t.payments.itemsLabel}
        </span>
      </div>

      {members.length < 1 ? (
        <p className="text-sm text-muted">{t.payments.addMembersFirst}</p>
      ) : (
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="flex flex-col gap-1 sm:w-32">
              <span className="text-xs font-medium text-muted">{t.payments.paidBy}</span>
              <select
                value={effectivePayer}
                onChange={(e) => setPayerId(e.target.value)}
                className="rounded-lg border border-border bg-card px-2 py-2 text-sm outline-none focus:border-brand"
              >
                {members.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-1 flex-col gap-1">
              <span className="text-xs font-medium text-muted">{t.payments.description}</span>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.payments.descPlaceholder}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="flex flex-col gap-1 sm:w-32">
              <span className="text-xs font-medium text-muted">{t.payments.amount}</span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addExpense();
                }}
                inputMode="decimal"
                type="number"
                min="0"
                step="any"
                placeholder="0"
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-muted">{t.payments.splitBetween}</span>
              <button
                type="button"
                onClick={() => setExcluded(allSelected ? new Set(memberIds) : new Set())}
                className="text-xs font-medium text-brand hover:underline"
              >
                {allSelected ? t.payments.clearAll : t.payments.selectAll}
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {members.map((m) => {
                const on = !excluded.has(m.id);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleParticipant(m.id)}
                    className={
                      "rounded-full border px-3 py-1 text-sm transition " +
                      (on
                        ? "border-brand bg-brand text-white"
                        : "border-border bg-card text-muted hover:border-brand")
                    }
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional: a maximum each person will pay; the rest absorb the excess. */}
          <div>
            <button
              type="button"
              onClick={() => setShowCaps((v) => !v)}
              aria-expanded={showCaps}
              className="flex items-center gap-1 text-xs font-medium text-brand hover:underline"
            >
              <span aria-hidden className={showCaps ? "rotate-90 transition" : "transition"}>▸</span>
              {t.payments.capToggle}
            </button>
            {showCaps && participants.length > 0 && (
              <div className="mt-2 flex flex-col gap-1.5 rounded-lg border border-border bg-card p-2">
                {participants.map((id) => (
                  <div key={id} className="flex items-center gap-2">
                    <span className="flex-1 truncate text-sm">{nameOf(id)}</span>
                    <input
                      value={caps[id] ?? ""}
                      onChange={(e) => setCaps((c) => ({ ...c, [id]: e.target.value }))}
                      inputMode="decimal"
                      type="number"
                      min="0"
                      step="any"
                      placeholder={t.payments.capPlaceholder}
                      className="w-28 rounded-md border border-border bg-background px-2 py-1 text-right text-sm outline-none focus:border-brand"
                    />
                  </div>
                ))}
                {capsTooLow && (
                  <p className="text-xs font-medium text-negative">{t.payments.capsTooLow}</p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={addExpense}
            disabled={!canAdd}
            className="self-start rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.payments.addPayment}
          </button>
        </div>
      )}

      {expenses.length > 0 && (
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
                <button
                  onClick={() => removeExpense(e.id)}
                  aria-label={t.payments.deleteAria}
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted hover:bg-negative hover:text-white"
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
