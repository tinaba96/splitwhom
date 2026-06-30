import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { loadGoogleFont } from "./og-font";

export const OG_SIZE = { width: 1200, height: 630 };

// One font per locale (each already includes the Latin glyphs we also need).
const FONT_FAMILY: Record<Locale, string> = {
  en: "Inter",
  es: "Inter",
  fr: "Inter",
  de: "Inter",
  pt: "Inter",
  it: "Inter",
  ru: "Inter",
  ja: "Noto Sans JP",
  zh: "Noto Sans SC",
  ko: "Noto Sans KR",
};

/** Build the localized "product peek" OG image for a locale. */
export async function ogImageResponse(locale: Locale): Promise<ImageResponse> {
  const t = getDictionary(locale);
  const family = FONT_FAMILY[locale];
  const headline = t.landing.heroHeading;
  const tagline = t.hero.tagline;
  const cardTitle = t.results.settlementTitle;
  const [a, b, c] = t.sample.names;
  const rows = [
    { from: b, to: a, amount: "$30.00" },
    { from: c, to: a, amount: "$9.00" },
  ];
  const freeBadge = "100% FREE";

  // every glyph we draw, so the subsetted font contains exactly what's needed
  const glyphs =
    "SplitWhom splitwhom.com ÷ → ✓ $0123456789., -—%" +
    headline +
    tagline +
    cardTitle +
    freeBadge +
    t.sample.names.join("");
  const font = await loadGoogleFont(family, glyphs, 700);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d0e22 0%, #221a55 52%, #4b38c8 100%)",
          fontFamily: family,
          color: "#ffffff",
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 760,
            height: 760,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(124,124,255,0.55) 0%, rgba(124,124,255,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -180,
            width: 680,
            height: 680,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(255,86,170,0.30) 0%, rgba(255,86,170,0) 70%)",
          }}
        />

        {/* top: brand + free badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 20,
                background: "linear-gradient(135deg, #8f8fff 0%, #5b5bf7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 42,
                boxShadow: "0 10px 30px rgba(91,91,247,0.6)",
              }}
            >
              ÷
            </div>
            <div style={{ fontSize: 42, color: "#ffffff", letterSpacing: -0.5 }}>SplitWhom</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.28)",
              background: "rgba(255,255,255,0.10)",
              color: "#ffffff",
              fontSize: 24,
              letterSpacing: 1,
            }}
          >
            {freeBadge}
          </div>
        </div>

        {/* headline + tagline + result card */}
        <div style={{ display: "flex", alignItems: "center", gap: 52 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                fontSize: 64,
                color: "#ffffff",
                lineHeight: 1.08,
                letterSpacing: -1.5,
              }}
            >
              {headline}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 28,
                color: "#c2c5f5",
                lineHeight: 1.3,
              }}
            >
              {tagline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 478,
              gap: 14,
              background: "#ffffff",
              borderRadius: 30,
              padding: 32,
              boxShadow: "0 40px 90px rgba(10,8,40,0.55)",
            }}
          >
            <div style={{ display: "flex", fontSize: 25, color: "#5b5bf7" }}>{cardTitle}</div>
            {rows.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#f3f4ff",
                  borderRadius: 16,
                  padding: "14px 20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 28, color: "#1a1c2b" }}>
                  <span>{r.from}</span>
                  <span style={{ color: "#5b5bf7" }}>→</span>
                  <span>{r.to}</span>
                </div>
                <div style={{ display: "flex", fontSize: 28, color: "#1a1c2b" }}>{r.amount}</div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 23, color: "#0e9f6e" }}>
              <span>✓</span>
              <span style={{ color: "#6b7088" }}>splitwhom.com</span>
            </div>
          </div>
        </div>

        {/* footer url */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 30, color: "#c2c5f5" }}>
          <span style={{ color: "#ffffff" }}>splitwhom.com</span>
          <span style={{ color: "#8f8fff" }}>→</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: family, data: font, weight: 700, style: "normal" }] },
  );
}
