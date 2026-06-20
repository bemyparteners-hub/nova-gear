"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { brands, categories } from "@/lib/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { ProductModal } from "@/components/product-modal";

const sortOptions = [
  { value: "popular", label: "Populaires" },
  { value: "new", label: "Nouveautés" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "rating", label: "Mieux notés" },
];

export function ProductGrid({ products, initialCategory }: { products: Product[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory ?? "all");
  const [brand, setBrand] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("popular");
  const [quickProduct, setQuickProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesQuery = [product.name, product.brand, product.category, product.shortDescription, product.use].join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || product.categorySlug === category;
      const matchesBrand = brand === "all" || product.brand === brand;
      const matchesAvailability = availability === "all" || (availability === "stock" ? product.stock > 0 : product.stock <= 5);
      const matchesRating = product.rating >= Number(minRating);
      const matchesPrice = price === "all" || (price === "0-150" && product.price <= 150) || (price === "150-500" && product.price > 150 && product.price <= 500) || (price === "500+" && product.price > 500);
      return matchesQuery && matchesCategory && matchesBrand && matchesAvailability && matchesRating && matchesPrice;
    });
    result = [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "new") return Number(b.badges.includes("New")) - Number(a.badges.includes("New"));
      return b.reviews - a.reviews;
    });
    return result;
  }, [products, query, category, brand, availability, minRating, price, sort]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="glass-strong h-fit rounded-[2rem] p-5 lg:sticky lg:top-24">
        <div className="flex items-center gap-2 text-lg font-black"><Filter size={18} className="text-nova-cyan" /> Filtres</div>
        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">Catégorie<select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted"><option value="all">Toutes</option>{categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
          <label className="grid gap-2 text-sm font-semibold">Marque<select value={brand} onChange={(e) => setBrand(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted"><option value="all">Toutes</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          <label className="grid gap-2 text-sm font-semibold">Prix<select value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted"><option value="all">Tous</option><option value="0-150">≤ 150 €</option><option value="150-500">150–500 €</option><option value="500+">500 € et +</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Note<select value={minRating} onChange={(e) => setMinRating(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted"><option value="0">Toutes</option><option value="4.5">4.5+</option><option value="4.7">4.7+</option><option value="4.8">4.8+</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Disponibilité<select value={availability} onChange={(e) => setAvailability(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted"><option value="all">Toutes</option><option value="stock">En stock</option><option value="low">Stock faible</option></select></label>
        </div>
      </aside>
      <div>
        <div className="glass-strong mb-6 grid gap-3 rounded-[2rem] p-4 md:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-nova-muted" size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Recherche instantanée : souris, OLED, streaming..." className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pl-11 pr-4 outline-none transition focus:border-nova-cyan" />
          </label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted">{sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
        </div>
        <div className="mb-5 flex items-center justify-between text-sm text-nova-muted"><span>{filtered.length} produits</span><span>Prix éditables depuis l’admin</span></div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>{filtered.map((product) => <ProductCard key={product.id} product={product} onQuickView={setQuickProduct} />)}</AnimatePresence>
        </div>
        {filtered.length === 0 ? <p className="glass rounded-3xl p-8 text-center text-nova-muted">Aucun produit ne correspond à ces filtres.</p> : null}
      </div>
      <ProductModal product={quickProduct} onClose={() => setQuickProduct(null)} />
    </div>
  );
}
