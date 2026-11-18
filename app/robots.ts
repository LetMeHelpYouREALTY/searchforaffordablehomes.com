import { MetadataRoute } from "next";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

/**
 * Production robots — keep marketing pages indexable.
 * Preview / Vercel SSO hosts are noindexed via middleware X-Robots-Tag.
 */
export default function robots(): MetadataRoute.Robots {
  const host = SITE_BRAND.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/monitoring/"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
