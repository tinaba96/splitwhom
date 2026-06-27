"use client";

import { useEffect } from "react";

// The root <html lang> is statically "en". For non-default locales, correct the
// document language after mount so screen readers and the browser see the right one.
// (Search engines use content + hreflang, which are already correct per route.)
export default function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
