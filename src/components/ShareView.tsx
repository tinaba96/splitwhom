"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  LOCALE_BCP47,
  type Locale,
  localePath,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { settle } from "@/lib/settle";
import { formatMinor } from "@/lib/format";
import { decodeShare } from "@/lib/share";
import { setSplitState } from "@/lib/store";
import ResultsSection from "./ResultsSection";
import MemberContacts from "./MemberContacts";
import PaymentDetails from "./PaymentDetails";
import LangSync from "./LangSync";
import ShareButton from "./ShareButton";
import CrossPromoBanner from "./CrossPromoBanner";

// The window hash carries the shared data; read it as an external store so the
// server snapshot ("") and client snapshot stay consistent without a hydration mismatch.
function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}
const getHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

export default function ShareView() {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const shared = useMemo(() => (hash ? decodeShare(hash) : null), [hash]);
  const router = useRouter();
  // viewer can override the shared language in place (the link is unchanged)
  const [override, setOverride] = useState<Locale | null>(null);

  const locale = override ?? shared?.locale ?? DEFAULT_LOCALE;
  const t = getDictionary(locale);

  if (!shared) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-6 px-4 py-16 text-center">
        <div className="flex items-center gap-3">
          <Brand />
          <LocaleSelect value={locale} onChange={setOverride} label={t.switcher.label} />
        </div>
        <p className="text-sm text-muted">{t.share.invalid}</p>
        <Link
          href={localePath(DEFAULT_LOCALE)}
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          {t.share.ctaButton}
        </Link>
      </main>
    );
  }

  const { state } = shared;
  const result = settle(state);
  const fmt = (minor: number) => formatMinor(minor, state.currency);
  const totalMinor = result.balances.reduce((s, b) => s + b.paid, 0);

  const onEdit = () => {
    setSplitState(state);
    router.push(localePath(locale));
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-6 sm:py-10">
      {locale !== DEFAULT_LOCALE && <LangSync lang={LOCALE_BCP47[locale]} />}

      <div className="flex items-center justify-between gap-3">
        <Brand />
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted sm:inline">{t.share.readonlyNote}</span>
          <LocaleSelect value={locale} onChange={setOverride} label={t.switcher.label} />
        </div>
      </div>

      {state.title && <h1 className="text-2xl font-bold tracking-tight">{state.title}</h1>}

      <ResultsSection t={t} state={state} result={result} fmt={fmt} totalMinor={totalMinor} />

      <MemberContacts t={t} state={state} />

      <PaymentDetails t={t} state={state} fmt={fmt} />

      <div className="flex flex-wrap items-center gap-2">
        <ShareButton t={t} state={state} locale={locale} />
        <button
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-background"
        >
          <span aria-hidden>✏️</span>
          {t.share.edit}
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
        <p className="mb-3 text-sm font-medium">{t.share.ctaTitle}</p>
        <Link
          href={localePath(DEFAULT_LOCALE)}
          className="inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          {t.share.ctaButton}
        </Link>
      </div>

      <CrossPromoBanner t={t} />
    </main>
  );
}

// In-place language selector: changes the display language without navigating,
// so the shared data (in the URL hash) is preserved.
function LocaleSelect({
  value,
  onChange,
  label,
}: {
  value: Locale;
  onChange: (l: Locale) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-1 rounded-lg border border-border bg-card px-2 py-1.5 text-sm">
      <span aria-hidden>🌐</span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="bg-transparent text-sm font-medium outline-none"
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-base font-bold text-white shadow-sm">
        ÷
      </span>
      <span className="text-lg font-bold tracking-tight">SplitWhom</span>
    </div>
  );
}
