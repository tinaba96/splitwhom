import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { DEFAULT_LOCALE, NON_DEFAULT_LOCALES, isLocale } from "@/i18n/config";
import { buildMetadata } from "@/i18n/metadata";

// Only the non-default locales get a /<locale>/ path; English lives at the root.
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
  return buildMetadata(locale);
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  return <HomePage locale={locale} />;
}
