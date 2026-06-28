import Link from "next/link";
import { DEFAULT_LOCALE, LOCALE_BCP47, type Locale, localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";
import SiteFooter from "./SiteFooter";
import LangSync from "./LangSync";

// Shared page frame for the legal/info pages: brand home link + language switcher
// (which keeps you on the same page in the new locale) + content + site footer.
export default function PageChrome({
  t,
  locale,
  subpath,
  children,
}: {
  t: Dictionary;
  locale: Locale;
  subpath: string; // e.g. "privacy/"
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-6 sm:py-10">
      {locale !== DEFAULT_LOCALE && <LangSync lang={LOCALE_BCP47[locale]} />}

      <div className="flex items-center justify-between gap-3">
        <Link href={localePath(locale)} className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-base font-bold text-white shadow-sm">
            ÷
          </span>
          <span className="text-lg font-bold tracking-tight">SplitWhom</span>
        </Link>
        <LanguageSwitcher current={locale} label={t.switcher.label} subpath={subpath} />
      </div>

      {children}

      <SiteFooter t={t} locale={locale} />
    </main>
  );
}
