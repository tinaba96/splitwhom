// i18n configuration for SplitWhom.
// English lives at the site root (/) and is the x-default; the other locales are
// statically generated under /<locale>/ (e.g. /ja/, /es/). All pages cross-link
// via hreflang for multilingual search discovery.

export const DEFAULT_LOCALE = "en" as const;

export const LOCALES = [
  "en",
  "ja",
  "es",
  "fr",
  "de",
  "pt",
  "it",
  "zh",
  "ko",
  "ru",
] as const;

export type Locale = (typeof LOCALES)[number];

/** Locales that get a /<locale>/ path (everything except the root-hosted default). */
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Native display name for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
  zh: "中文",
  ko: "한국어",
  ru: "Русский",
};

/** BCP-47 tag for <html lang> / og:locale. */
export const LOCALE_BCP47: Record<Locale, string> = {
  en: "en",
  ja: "ja",
  es: "es",
  fr: "fr",
  de: "de",
  pt: "pt-BR",
  it: "it",
  zh: "zh-CN",
  ko: "ko",
  ru: "ru",
};

// Resolve the absolute site URL used for canonical/hreflang/OG/sitemap. Falls back
// to the deployment URL so OG images work on any domain (vercel.app / pages.dev),
// and defaults to the production brand domain.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL.replace(/\/+$/, "");
  return "https://splitwhom.com";
}

export const SITE_URL = resolveSiteUrl();

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Site-relative path for a locale's home page (root for the default locale). */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}

/** Absolute URL for a locale's home page (root for the default locale). */
export function localeUrl(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? `${SITE_URL}/` : `${SITE_URL}/${locale}/`;
}

/** hreflang alternates map (all locales + x-default) for <link rel="alternate">. */
export function hreflangAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of LOCALES) map[LOCALE_BCP47[locale]] = localeUrl(locale);
  map["x-default"] = localeUrl(DEFAULT_LOCALE);
  return map;
}
