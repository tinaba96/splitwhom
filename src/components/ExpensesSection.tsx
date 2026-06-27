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
  const [payerId, setPayerId] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  // track who is EXCLUDED rather than included, so members added later default to sharing.
  const [excluded, setExcluded] = useState<Set<string>>(new Set());

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

  const addExpense = () => {
    const value = parseFloat(amount);
    if (!effectivePayer || !description.trim() || !(value > 0) || participants.length === 0) return;
    const expense: Expense = {
      id: makeId(),
      payerId: effectivePayer,
      description: description.trim(),
      amount: value,
      participantIds: [...participants],
    };
    setState((s) => ({ ...s, expenses: [...s.expenses, expense] }));
    setDescription("");
    setAmount("");
  };

  const removeExpense = (id: string) =>
    setState((s) => ({ ...s, expenses: s.expenses.filter((e) => e.id !== id) }));

  const canAdd =
    effectivePayer && description.trim() && parseFloat(amount) > 0 && participants.length > 0;

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
          {expenses.map((e) => (
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
                  {e.participantIds.length === members.length
                    ? t.payments.splitEveryone
                    : fill(t.payments.splitBetweenNames, {
                        names: e.participantIds.map(nameOf).join(" · "),
                      })}
                </div>
              </div>
              <span className="shrink-0 font-mono text-sm font-semibold">
                {fmt(toMinor(e.amount, CURRENCIES[state.currency].decimals))}
              </span>
              <button
                onClick={() => removeExpense(e.id)}
                aria-label={t.payments.deleteAria}
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted hover:bg-negative hover:text-white"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
