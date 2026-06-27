import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` (no Node server at runtime).
  // splitwhom uses no SSR/ISR/Route Handlers/Image Optimization, so this is lossless
  // and deployable to any static host (Cloudflare Pages).
  output: "export",
  // static hosts serve /path/ as /path/index.html — trailing slash keeps links correct
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
