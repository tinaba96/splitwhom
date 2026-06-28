import { ogImageResponse, OG_SIZE } from "@/lib/og";
import { DEFAULT_LOCALE } from "@/i18n/config";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImageResponse(DEFAULT_LOCALE);
}
