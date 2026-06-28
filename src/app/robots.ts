import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // `*` already permits everything; the AdSense crawlers are listed
    // explicitly only as a reassurance for the AdSense review.
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
