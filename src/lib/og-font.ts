// Load a Google Font subsetted to exactly the characters we draw, so OG images
// stay tiny (satori's bundle limit is 500KB and full CJK fonts are multi-MB).
// Fetching without a modern browser User-Agent makes Google Fonts return a TTF
// (satori reads ttf/otf/woff, not woff2/eot).

export async function loadGoogleFont(
  family: string,
  text: string,
  weight = 700,
): Promise<ArrayBuffer> {
  const url =
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}` +
    `&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(
    /src:\s*url\((https:\/\/[^)]+)\)\s*format\('(?:truetype|opentype)'\)/,
  );
  if (!match) throw new Error(`No ttf/otf font URL for ${family}: ${css.slice(0, 200)}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}
