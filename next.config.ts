import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev server only. The default keeps 2 pages for 25s, so the next
  // route rebuilds ~1000 modules and the click waits 8–15s.
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 30,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.coverr.co",
      },
    ],
  },
};

export default nextConfig;
