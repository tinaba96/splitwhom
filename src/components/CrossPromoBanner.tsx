import { CROSS_PROMO_URL } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

// Subtle cross-promo to our sister product (Shenzhen Buddies). An in-flow card
// styled with the same tokens as the rest of the page — no popup, no sticky bar,
// nothing that interrupts the tool. Opens in a new tab with UTM attribution.
export default function CrossPromoBanner({ t }: { t: Dictionary }) {
  const c = t.crossPromo;
  return (
    <a
      href={CROSS_PROMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-brand/40 hover:shadow-md"
    >
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-xl"
        aria-hidden
      >
        🧭
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
          {c.eyebrow}
        </span>
        <span className="text-sm font-semibold text-foreground">{c.title}</span>
        <span className="text-sm text-muted">{c.body}</span>
      </span>
      <span className="ml-auto hidden shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-brand sm:inline-flex">
        {c.cta}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}
