"use client";

import { useMemo, useState } from "react";
import { products, formatPrice } from "@/lib/products";

export function CompareGear() {
  const [selected, setSelected] = useState<string[]>(products.slice(0, 3).map((p) => p.id));
  const items = useMemo(() => selected.map((id) => products.find((product) => product.id === id)).filter((item): item is NonNullable<typeof item> => item !== undefined), [selected]);
  const update = (index: number, id: string) => setSelected((current) => current.map((value, i) => (i === index ? id : value)));
  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <select key={index} value={selected[index] ?? ""} onChange={(e) => update(index, e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted">
            <option value="">Produit {index + 1}</option>
            {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>
        ))}
      </div>
      <div className="overflow-x-auto rounded-[2rem] border border-white/10">
        <table className="w-full min-w-[760px] border-collapse bg-white/[0.03] text-sm">
          <thead><tr>{["Critère", ...items.map((item) => item.name)].map((head) => <th key={head} className="border-b border-white/10 p-4 text-left font-black">{head}</th>)}</tr></thead>
          <tbody>
            {[
              ["Prix", ...items.map((item) => formatPrice(item.price))],
              ["Note", ...items.map((item) => `${item.rating}/5 (${item.reviews})`)],
              ["Catégorie", ...items.map((item) => item.category)],
              ["Connectivité", ...items.map((item) => item.specs.Connectivité ?? item.specs.Connexion ?? "—")],
              ["Autonomie", ...items.map((item) => item.specs.Autonomie ?? "—")],
              ["Compatibilité", ...items.map((item) => item.specs.Compatibilité ?? "—")],
              ["Usage recommandé", ...items.map((item) => item.use)],
              ["Stock", ...items.map((item) => `${item.stock}`)],
            ].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index} className="border-b border-white/10 p-4 text-nova-muted first:font-bold first:text-white">{cell}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
