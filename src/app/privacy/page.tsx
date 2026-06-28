import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

const t = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = buildPageMetadata(DEFAULT_LOCALE, {
  title: `${t.privacy.title} · SplitWhom`,
  description: t.privacy.intro,
  subpath: "privacy/",
});

export default function PrivacyPage() {
  return <LegalArticle t={t} locale={DEFAULT_LOCALE} doc={t.privacy} subpath="privacy/" />;
}
