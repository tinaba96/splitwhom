"use client";

import { useState } from "react";
import type { SplitState } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { buildShareUrl } from "@/lib/share";

export default function ShareButton({
  t,
  state,
  locale,
}: {
  t: Dictionary;
  state: SplitState;
  locale: Locale;
}) {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    const url = buildShareUrl(window.location.origin, state, locale);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked (e.g. insecure context) — let the user copy manually
      window.prompt(t.share.share, url);
    }
  };

  return (
    <button
      onClick={onShare}
      className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
    >
      <span aria-hidden>🔗</span>
      {copied ? t.share.copied : t.share.share}
    </button>
  );
}
