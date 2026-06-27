import { DEFAULT_LOCALE, LOCALE_BCP47, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import SplitApp from "./SplitApp";
import LandingSections from "./LandingSections";
import LanguageSwitcher from "./LanguageSwitcher";
import StructuredData from "./StructuredData";
import LangSync from "./LangSync";

// The full localized home page (shared by the root `/` and every `/<locale>/`).
export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const l = t.landing;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-6 sm:py-10">
      {locale !== DEFAULT_LOCALE && <LangSync lang={LOCALE_BCP47[locale]} />}

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-lg font-bold text-white shadow-sm">
            ÷
          </span>
          <span className="text-xl font-bold tracking-tight">SplitWhom</span>
        </div>
        <LanguageSwitcher current={locale} label={t.switcher.label} />
      </div>

      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {l.heroHeading}
        </h1>
        <p className="text-base text-muted">{l.heroSub}</p>
      </header>

      <SplitApp t={t} />

      <LandingSections t={t} />

      <footer className="mt-2 border-t border-border pt-6 text-xs text-muted">
        SplitWhom — {t.meta.ogDescription}
      </footer>

      <StructuredData t={t} locale={locale} />
    </main>
  );
}
