import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/config";

export const dynamic = "force-static";

// AI / answer-engine crawlers, allowed explicitly so generative search (ChatGPT,
// Claude, Perplexity, Google AI Overviews, etc.) can read and cite the site. `*`
// already permits everything; listing them removes any ambiguity that we opt out.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Meta-ExternalAgent",
  "CCBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AdSense crawlers, listed explicitly as a reassurance for the AdSense review.
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
      // Generative-search crawlers, explicitly welcomed.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
