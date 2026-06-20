import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return ["souris-gaming", "claviers-mecaniques", "casques-audio", "ecrans-gaming", "chaises-gaming", "streaming-accessoires", "pc-setup-premium"].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  return { title: category?.name ?? "Catégorie", description: category?.description };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();
  const items = getProductsByCategory(params.slug);
  return (
    <section className="container-nova pt-32 pb-20">
      <div className="mb-10 max-w-3xl"><p className="eyebrow">Catégorie</p><h1 className="mt-5 text-5xl font-black tracking-tight">{category.name}</h1><p className="muted mt-4 text-lg leading-8">{category.description}</p></div>
      <ProductGrid products={items} initialCategory={params.slug} />
    </section>
  );
}
