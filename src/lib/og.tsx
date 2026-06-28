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
  const cardTitle = t.results.settlementTitle;
  const [a, b, c] = t.sample.names;
  const rows = [
    { from: b, to: a, amount: "$30.00" },
    { from: c, to: a, amount: "$9.00" },
  ];

  // every glyph we draw, so the subsetted font contains exactly what's needed
  const glyphs =
    "SplitWhom splitwhom.com ÷ → ✓ $0123456789., -—" +
    headline +
    cardTitle +
    t.sample.names.join("");
  const font = await loadGoogleFont(family, glyphs, 700);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #eef0ff 0%, #f6f7fb 55%, #ffffff 100%)",
          fontFamily: family,
        }}
      >
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#5b5bf7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 40,
            }}
          >
            ÷
          </div>
          <div style={{ fontSize: 38, color: "#1a1c2b" }}>SplitWhom</div>
        </div>

        {/* headline + result card */}
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              fontSize: 58,
              color: "#1a1c2b",
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            {headline}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 470,
              gap: 14,
              background: "#ffffff",
              border: "2px solid #e7e9f3",
              borderRadius: 28,
              padding: 30,
              boxShadow: "0 24px 60px rgba(91,91,247,0.20)",
            }}
          >
            <div style={{ fontSize: 24, color: "#5b5bf7" }}>{cardTitle}</div>
            {rows.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#f6f7fb",
                  borderRadius: 14,
                  padding: "12px 18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 27, color: "#1a1c2b" }}>
                  <span>{r.from}</span>
                  <span style={{ color: "#5b5bf7" }}>→</span>
                  <span>{r.to}</span>
                </div>
                <div style={{ fontSize: 27, color: "#1a1c2b" }}>{r.amount}</div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 22, color: "#0e9f6e" }}>
              <span>✓</span>
              <span style={{ color: "#6b7088" }}>splitwhom.com</span>
            </div>
          </div>
        </div>

        {/* footer url */}
        <div style={{ fontSize: 30, color: "#5b5bf7" }}>splitwhom.com</div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: family, data: font, weight: 700, style: "normal" }] },
  );
}
