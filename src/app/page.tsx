import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata(DEFAULT_LOCALE);

export default function Home() {
  return <HomePage locale={DEFAULT_LOCALE} />;
}
