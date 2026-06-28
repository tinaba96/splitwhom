import type { Metadata } from "next";
import ShareView from "@/components/ShareView";
import { NON_DEFAULT_LOCALES } from "@/i18n/config";

// Localized share view (/ja/view, /es/view, ...). The split data is in the URL
// hash; the path locale lets crawlers serve a localized OG preview.
export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Shared split · SplitWhom",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export default function LocaleViewPage() {
  return <ShareView />;
}
