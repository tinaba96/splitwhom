import { ogImageResponse, OG_SIZE } from "@/lib/og";
import { NON_DEFAULT_LOCALES, DEFAULT_LOCALE, isLocale } from "@/i18n/config";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return ogImageResponse(isLocale(locale) ? locale : DEFAULT_LOCALE);
}
