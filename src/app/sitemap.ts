import type { MetadataRoute } from "next";
import { LOCALES, hreflangAlternates, localeUrl, DEFAULT_LOCALE } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = hreflangAlternates();
  return LOCALES.map((locale) => ({
    url: localeUrl(locale),
    changeFrequency: "monthly",
    priority: locale === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: { languages },
  }));
}
