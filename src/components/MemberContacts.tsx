"use client";

import { useState } from "react";
import type { SplitState } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";

// View-side: collapsible list of members who have a note (email / phone / payment
// ID), each with a one-tap copy button so the recipient can grab a payee's ID.
export default function MemberContacts({ t, state }: { t: Dictionary; state: SplitState }) {
  const withNotes = state.members.filter((m) => m.note && m.note.trim());
  if (withNotes.length === 0) return null;

  return (
    <details className="group rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
        <span className="flex items-center justify-between gap-2">
          {t.members.contactsTitle}
          <span aria-hidden className="text-muted transition group-open:rotate-180">▾</span>
        </span>
      </summary>
      <ul className="mt-3 flex flex-col gap-2">
        {withNotes.map((m) => (
          <ContactRow key={m.id} t={t} name={m.name} note={m.note!} />
        ))}
      </ul>
    </details>
  );
}

function ContactRow({ t, name, note }: { t: Dictionary; name: string; note: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(note);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.prompt(t.members.copy, note);
    }
  };
  return (
    <li className="flex items-center gap-2 rounded-xl border border-border px-3 py-2">
      <span className="w-24 shrink-0 truncate text-sm font-medium">{name}</span>
      <span className="min-w-0 flex-1 truncate font-mono text-sm">{note}</span>
      <button
        onClick={copy}
        aria-label={t.members.copy}
        className="shrink-0 rounded-md border border-border px-2 py-1 text-xs font-medium hover:border-brand"
      >
        {copied ? t.members.copied : t.members.copy}
      </button>
    </li>
  );
}
