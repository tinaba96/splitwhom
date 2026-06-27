import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SplitWhom — split the bill & see who pays whom",
  description:
    "Free, no-login web app that splits group expenses and shows exactly who pays whom in the fewest payments. Perfect for trips, camping, and shared houses.",
  keywords: [
    "split the bill",
    "split expenses",
    "bill splitter",
    "who pays whom",
    "settle up",
    "group expenses",
    "expense splitter",
    "split costs",
  ],
  openGraph: {
    title: "SplitWhom — split the bill & see who pays whom",
    description:
      "Split group expenses and settle up in the fewest payments. No sign-up, free, works in your browser.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
