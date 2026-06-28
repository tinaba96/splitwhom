import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalArticle from "@/components/LegalArticle";
import { NON_DEFAULT_LOCALES, DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildPageMetadata(locale, {
    title: `${t.terms.title} · SplitWhom`,
    description: t.terms.intro,
    subpath: "terms/",
  });
}

export default async function LocaleTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  const t = getDictionary(locale);
  return <LegalArticle t={t} locale={locale} doc={t.terms} subpath="terms/" />;
}
