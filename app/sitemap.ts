import { MetadataRoute } from "next";
import { categories, products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nova-gear.local";
  const staticPages = ["", "/boutique", "/setup-builder", "/pro-picks", "/comparateur", "/a-propos", "/contact", "/faq", "/livraison-retours"];
  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })),
    ...categories.map((category) => ({ url: `${baseUrl}/categorie/${category.slug}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${baseUrl}/produits/${product.slug}`, lastModified: new Date() })),
  ];
}
