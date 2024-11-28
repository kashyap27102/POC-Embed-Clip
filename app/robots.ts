import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/api/og",
      disallow: "/private/",
    },
    sitemap: "https://poc-embed-clip.vercel.app/sitemap.xml",
  };
}
