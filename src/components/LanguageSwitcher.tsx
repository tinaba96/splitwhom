import Link from "next/link";
import { LOCALES, LOCALE_NAMES, type Locale, localePath } from "@/i18n/config";

// Server-rendered, JS-free dropdown of crawlable locale links (good for hreflang
// discovery). Uses <details> so it works without client JavaScript.
export default function LanguageSwitcher({
  current,
  label,
  subpath = "",
}: {
  current: Locale;
  label: string;
  subpath?: string; // e.g. "privacy/" to keep the same page when switching locale
}) {
  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex cursor-pointer list-none items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-brand"
      >
        <span aria-hidden>🌐</span>
        <span>{LOCALE_NAMES[current]}</span>
        <span aria-hidden className="text-muted">▾</span>
      </summary>
      <ul className="absolute right-0 z-10 mt-1 max-h-72 w-40 overflow-auto rounded-lg border border-border bg-card p-1 shadow-lg">
        {LOCALES.map((locale) => (
          <li key={locale}>
            <Link
              href={`${localePath(locale)}${subpath}`}
              hrefLang={locale}
              className={
                "block rounded-md px-3 py-1.5 text-sm hover:bg-background " +
                (locale === current ? "font-semibold text-brand" : "text-foreground")
              }
            >
              {LOCALE_NAMES[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
