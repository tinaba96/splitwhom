"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import type { SplitState } from "@/lib/types";
import { makeId } from "@/lib/format";

interface Props {
  state: SplitState;
  setState: Dispatch<SetStateAction<SplitState>>;
}

export default function MembersSection({ state, setState }: Props) {
  const [name, setName] = useState("");

  const addMember = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setState((s) => ({
      ...s,
      members: [...s.members, { id: makeId(), name: trimmed }],
    }));
    setName("");
  };

  const removeMember = (id: string) => {
    const m = state.members.find((x) => x.id === id);
    const paidCount = state.expenses.filter((e) => e.payerId === id).length;
    if (
      paidCount > 0 &&
      !window.confirm(
        `This also deletes ${paidCount} payment(s) made by ${m?.name}. Continue?`,
      )
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
        <h2 className="text-base font-semibold">Members</h2>
        <span className="text-xs text-muted">
          {state.members.length} {state.members.length === 1 ? "person" : "people"}
        </span>
      </div>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addMember();
          }}
          placeholder="Add a name"
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
        />
        <button
          onClick={addMember}
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Add
        </button>
      </div>

      {state.members.length === 0 ? (
        <p className="mt-3 text-sm text-muted">Add everyone who shared the costs.</p>
      ) : (
        <ul className="mt-3 flex flex-wrap gap-2">
          {state.members.map((m) => (
            <li
              key={m.id}
              className="group flex items-center gap-1.5 rounded-full border border-border bg-background py-1 pl-3 pr-1 text-sm"
            >
              <span>{m.name}</span>
              <button
                onClick={() => removeMember(m.id)}
                aria-label={`Remove ${m.name}`}
                className="grid h-5 w-5 place-items-center rounded-full text-muted hover:bg-negative hover:text-white"
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
