import type { MetadataRoute } from "next";

const situs = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${situs}/sitemap.xml`,
    host: situs,
  };
}
