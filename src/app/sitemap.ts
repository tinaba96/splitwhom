import type { MetadataRoute } from "next";
import { LOCALES, hreflangAlternates, localeUrl, DEFAULT_LOCALE } from "@/i18n/config";

export const dynamic = "force-static";

// Home plus the legal/info pages, each emitted for every locale with hreflang
// alternates so search engines index the full multilingual tree.
const SUBPATHS = ["", "about/", "privacy/", "terms/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return SUBPATHS.flatMap((subpath) => {
    const languages = hreflangAlternates(subpath);
    return LOCALES.map((locale) => ({
      url: `${localeUrl(locale)}${subpath}`,
      changeFrequency: "monthly" as const,
      priority: subpath === "" ? (locale === DEFAULT_LOCALE ? 1 : 0.8) : 0.5,
      alternates: { languages },
    }));
  });
}
