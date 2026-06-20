"use client";

import { useMemo, useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import { products as initialProducts, formatPrice } from "@/lib/products";
import type { Product } from "@/lib/types";

export function AdminProductTable() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter((product) => [product.name, product.brand, product.category].join(" ").toLowerCase().includes(query.toLowerCase())), [products, query]);

  const updateProduct = (id: string, patch: Partial<Product>) => setProducts((current) => current.map((product) => product.id === id ? { ...product, ...patch } : product));
  const removeProduct = (id: string) => setProducts((current) => current.filter((product) => product.id !== id));
  const addProduct = () => setProducts((current) => [{ ...current[0], id: `draft-${Date.now()}`, name: "Nouveau produit", slug: `nouveau-produit-${Date.now()}`, price: 99, stock: 1, badges: ["New"] }, ...current]);

  return (
    <div className="glass-strong rounded-[2rem] p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div><h2 className="text-2xl font-black">Produits</h2><p className="text-sm text-nova-muted">Prototype admin local. À brancher à Supabase/MongoDB.</p></div>
        <div className="flex gap-2"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none" /><button onClick={addProduct} className="btn-primary"><Plus size={16} /> Ajouter</button></div>
      </div>
      <div className="mt-5 overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[980px] text-sm">
          <thead className="bg-white/[0.04]"><tr>{["Produit", "Marque", "Catégorie", "Prix", "Stock", "Badges", "Actions"].map((head) => <th key={head} className="p-4 text-left font-black">{head}</th>)}</tr></thead>
          <tbody>
            {filtered.map((product) => <tr key={product.id} className="border-t border-white/10">
              <td className="p-3"><input value={product.name} onChange={(e) => updateProduct(product.id, { name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2" /></td>
              <td className="p-3">{product.brand}</td>
              <td className="p-3 text-nova-muted">{product.category}</td>
              <td className="p-3"><input type="number" value={product.price} onChange={(e) => updateProduct(product.id, { price: Number(e.target.value) })} className="w-28 rounded-xl border border-white/10 bg-black/30 px-3 py-2" /><span className="ml-2 text-nova-muted">{formatPrice(product.price)}</span></td>
              <td className="p-3"><input type="number" value={product.stock} onChange={(e) => updateProduct(product.id, { stock: Number(e.target.value) })} className="w-20 rounded-xl border border-white/10 bg-black/30 px-3 py-2" /></td>
              <td className="p-3 text-nova-muted">{product.badges.join(", ")}</td>
              <td className="p-3"><div className="flex gap-2"><button className="rounded-full border border-white/10 p-2 text-nova-cyan"><Save size={16} /></button><button onClick={() => removeProduct(product.id)} className="rounded-full border border-white/10 p-2 text-nova-red"><Trash2 size={16} /></button></div></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
