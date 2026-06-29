import Image from "next/image";
import { CROSS_PROMO_URL } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import sbIcon from "../../public/shenzhen-buddies-icon.png";

// Cross-promo to our sister product (Shenzhen Buddies). An in-flow card styled
// with the page's own tokens — no popup, no sticky bar — but with a touch more
// presence: the real app icon and a soft brand-tinted gradient so it reads as a
// product, not a footnote. Opens in a new tab with UTM attribution.
export default function CrossPromoBanner({ t }: { t: Dictionary }) {
  const c = t.crossPromo;
  return (
    <a
      href={CROSS_PROMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-brand/20 bg-gradient-to-r from-brand/[0.07] to-card p-4 shadow-sm transition hover:border-brand/50 hover:shadow-md"
    >
      <Image
        src={sbIcon}
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-2xl shadow-sm ring-1 ring-black/5 transition group-hover:scale-105"
      />
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
          {c.eyebrow}
        </span>
        <span className="text-base font-bold text-foreground">{c.title}</span>
        <span className="text-sm text-muted">{c.body}</span>
      </span>
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold text-brand">
        <span className="hidden sm:inline">{c.cta}</span>
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}
