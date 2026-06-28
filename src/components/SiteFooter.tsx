import Link from "next/link";
import { CONTACT_EMAIL, type Locale, localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

// Site-wide footer with legal/info links + contact — shown on every page.
// Helps legitimacy/navigation (and AdSense review).
export default function SiteFooter({ t, locale }: { t: Dictionary; locale: Locale }) {
  const base = localePath(locale);
  const links = [
    { href: `${base}about/`, label: t.site.about },
    { href: `${base}privacy/`, label: t.site.privacy },
    { href: `${base}terms/`, label: t.site.terms },
  ];
  return (
    <footer className="mt-10 border-t border-border pt-6 text-sm text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-brand text-xs font-bold text-white">
            ÷
          </span>
          <span className="font-semibold text-foreground">SplitWhom</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand">
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand">
            {t.site.contact}
          </a>
        </nav>
      </div>
      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} SplitWhom. {t.site.rights}
      </p>
    </footer>
  );
}
