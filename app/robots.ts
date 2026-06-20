import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nova-gear.local";
  return { rules: { userAgent: "*", allow: "/", disallow: ["/admin"] }, sitemap: `${baseUrl}/sitemap.xml` };
}
