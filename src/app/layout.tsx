import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/i18n/config";

// Google Analytics 4 measurement id; analytics only load when it's configured.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Google AdSense client id (ca-pub-...). Public by nature; defaults to the
// production account, overridable via env for forks.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1223705954567263";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SplitWhom — split the bill & see who pays whom",
  description:
    "Free, no-login web app that splits group expenses and shows who pays whom in the fewest payments.",
  // AdSense site verification meta (only when configured)
  ...(ADSENSE_CLIENT ? { other: { "google-adsense-account": ADSENSE_CLIENT } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <html lang> defaults to "en"; non-default locale pages correct it via LangSync.
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      {ADSENSE_CLIENT ? (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      ) : null}
    </html>
  );
}
