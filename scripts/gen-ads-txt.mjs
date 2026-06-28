// Generates public/ads.txt from the AdSense client id so Google can verify the
// domain is authorized to sell ads. Runs automatically before `next build`.
import { writeFile, rm } from "node:fs/promises";

const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-1223705954567263";
const path = "public/ads.txt";

if (client && /^ca-pub-\d+$/.test(client)) {
  const pub = client.replace(/^ca-/, ""); // pub-1234567890123456
  await writeFile(path, `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`);
  console.log(`gen-ads-txt: wrote ${path} for ${pub}`);
} else {
  await rm(path, { force: true });
  console.log("gen-ads-txt: NEXT_PUBLIC_ADSENSE_CLIENT not set; no ads.txt");
}
