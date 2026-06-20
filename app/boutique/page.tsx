import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Catalogue NOVA GEAR : souris, claviers, casques, écrans, chaises, streaming et setups premium.",
};

export default function BoutiquePage() {
  return (
    <section className="container-nova pt-32 pb-20">
      <div className="mb-10 max-w-3xl"><p className="eyebrow">Catalogue</p><h1 className="mt-5 text-5xl font-black tracking-tight">Boutique gaming premium.</h1><p className="muted mt-4 text-lg leading-8">Recherche instantanée, filtres dynamiques, badges Pro Picks et ajout panier rapide.</p></div>
      <ProductGrid products={products} />
    </section>
  );
}
