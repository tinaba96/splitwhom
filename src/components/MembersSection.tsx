"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import type { SplitState } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import { makeId } from "@/lib/format";
import { fill } from "@/lib/interpolate";

interface Props {
  t: Dictionary;
  state: SplitState;
  setState: Dispatch<SetStateAction<SplitState>>;
}

export default function MembersSection({ t, state, setState }: Props) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const addMember = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const member = { id: makeId(), name: trimmed, note: note.trim() || undefined };
    setState((s) => ({ ...s, members: [...s.members, member] }));
    setName("");
    setNote("");
  };

  const setMemberNote = (id: string, value: string) =>
    setState((s) => ({
      ...s,
      members: s.members.map((m) =>
        m.id === id ? { ...m, note: value.trim() ? value : undefined } : m,
      ),
    }));

  const removeMember = (id: string) => {
    const m = state.members.find((x) => x.id === id);
    const paidCount = state.expenses.filter((e) => e.payerId === id).length;
    if (
      paidCount > 0 &&
      !window.confirm(fill(t.members.confirmDelete, { count: paidCount, name: m?.name ?? "" }))
    ) {
      return;
    }
    setState((s) => ({
      ...s,
      members: s.members.filter((x) => x.id !== id),
      expenses: s.expenses
        .filter((e) => e.payerId !== id)
        .map((e) => ({ ...e, participantIds: e.participantIds.filter((p) => p !== id) })),
    }));
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-base font-semibold">{t.members.title}</h2>
        <span className="text-xs text-muted">
          {state.members.length} {t.members.peopleLabel}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addMember();
            }}
            placeholder={t.members.addPlaceholder}
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
          />
          <button
            onClick={addMember}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            {t.members.add}
          </button>
        </div>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addMember();
          }}
          placeholder={t.members.notePlaceholder}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
        />
      </div>

      {state.members.length === 0 ? (
        <p className="mt-3 text-sm text-muted">{t.members.empty}</p>
      ) : (
        <ul className="mt-3 flex flex-col gap-2">
          {state.members.map((m) => (
            <li
              key={m.id}
              className="flex items-center gap-2 rounded-xl border border-border px-3 py-2"
            >
              <span className="w-24 shrink-0 truncate text-sm font-medium">{m.name}</span>
              <input
                value={m.note ?? ""}
                onChange={(e) => setMemberNote(m.id, e.target.value)}
                placeholder={t.members.notePlaceholder}
                className="min-w-0 flex-1 rounded-md border border-border bg-background px-2 py-1 text-sm outline-none focus:border-brand"
              />
              <button
                onClick={() => removeMember(m.id)}
                aria-label={fill(t.members.removeAria, { name: m.name })}
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
