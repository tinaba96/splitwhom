import type { Metadata } from "next";
import AboutArticle from "@/components/AboutArticle";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

const t = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = buildPageMetadata(DEFAULT_LOCALE, {
  title: `${t.about.title} · SplitWhom`,
  description: t.about.paragraphs[0],
  subpath: "about/",
});

export default function AboutPage() {
  return <AboutArticle t={t} locale={DEFAULT_LOCALE} />;
}
