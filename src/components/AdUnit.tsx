"use client";

import { useEffect } from "react";

// Google AdSense client id (ca-pub-...). Mirrors the default in app/layout.tsx;
// overridable via env for forks.
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1223705954567263";

// A single responsive AdSense unit. Renders nothing until a slot id is provided,
// so it is completely inert before AdSense approval (no empty boxes, review-safe).
// After approval: create the unit in the AdSense dashboard, set the slot env var,
// and redeploy — no code change needed (env is read at build time on static export).
export default function AdUnit({
  slot,
  className,
}: {
  slot?: string;
  className?: string;
}) {
  useEffect(() => {
    if (!slot) return;
    try {
      // The loader script (in app/layout.tsx) defines window.adsbygoogle.
      ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle ||
        []).push({});
    } catch {
      // Loader not ready (e.g. blocked) — fail silently.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <ins
      className={`adsbygoogle block${className ? ` ${className}` : ""}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
