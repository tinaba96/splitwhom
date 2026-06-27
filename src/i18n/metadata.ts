import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import { LOCALE_BCP47, type Locale, hreflangAlternates, localeUrl } from "./config";

/** Build per-locale Next.js Metadata: title/description/keywords + canonical,
 *  hreflang alternates, and OpenGraph/Twitter cards. */
export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const url = localeUrl(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      type: "website",
      siteName: "SplitWhom",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url,
      locale: LOCALE_BCP47[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
  };
}
