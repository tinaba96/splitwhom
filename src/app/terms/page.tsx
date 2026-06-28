import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

const t = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = buildPageMetadata(DEFAULT_LOCALE, {
  title: `${t.terms.title} · SplitWhom`,
  description: t.terms.intro,
  subpath: "terms/",
});

export default function TermsPage() {
  return <LegalArticle t={t} locale={DEFAULT_LOCALE} doc={t.terms} subpath="terms/" />;
}
