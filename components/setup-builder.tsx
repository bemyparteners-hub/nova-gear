"use client";

import { useMemo, useState } from "react";
import { Cpu, Sparkles } from "lucide-react";
import { products } from "@/lib/products";
import { setupNeeds, setupStyles } from "@/lib/setup-presets";
import { ProductCard } from "@/components/product-card";

export function SetupBuilder() {
  const [budget, setBudget] = useState(1500);
  const [style, setStyle] = useState("streamer");
  const [need, setNeed] = useState("streaming");

  const recommendation = useMemo(() => {
    const buckets = ["Souris gaming", "Claviers mécaniques", "Casques audio", "Écrans gaming", "Chaises gaming", "Streaming / accessoires"];
    const scored = products.map((product) => {
      let score = 0;
      if (product.use.toLowerCase().includes(need.toLowerCase())) score += 5;
      if (product.badges.join(" ").toLowerCase().includes("pro")) score += style === "esport" ? 2 : 0;
      if (product.badges.join(" ").toLowerCase().includes("streamer")) score += style === "streamer" ? 3 : 0;
      if (product.badges.join(" ").toLowerCase().includes("ultra")) score += style === "ultra premium" ? 4 : 0;
      if (product.price <= budget / 2) score += 1;
      if (product.recommended) score += 1;
      return { product, score };
    });
    const picked = buckets.map((bucket) => scored.filter((item) => item.product.category === bucket).sort((a, b) => b.score - a.score || b.product.rating - a.product.rating)[0]?.product).filter(Boolean);
    let total = picked.reduce((sum, product) => sum + product.price, 0);
    if (total > budget) {
      return picked.sort((a, b) => a.price - b.price).slice(0, 4);
    }
    return picked.slice(0, 6);
  }, [budget, style, need]);

  const total = recommendation.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <div className="glass-strong h-fit rounded-[2rem] p-6 lg:sticky lg:top-24">
        <p className="eyebrow"><Sparkles size={14} /> Setup Builder</p>
        <h2 className="mt-5 text-3xl font-black">Build your ultimate setup</h2>
        <p className="muted mt-3 leading-7">Choisis ton budget, ton style et ton besoin : NOVA recommande automatiquement une configuration cohérente.</p>
        <div className="mt-6 grid gap-5">
          <label className="grid gap-3 text-sm font-semibold">Budget : {budget.toLocaleString("fr-FR")} €<input type="range" min="500" max="7000" step="100" value={budget} onChange={(e) => setBudget(Number(e.target.value))} /></label>
          <label className="grid gap-2 text-sm font-semibold">Style<select value={style} onChange={(e) => setStyle(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted">{setupStyles.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          <label className="grid gap-2 text-sm font-semibold">Besoin<select value={need} onChange={(e) => setNeed(e.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-nova-muted">{setupNeeds.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5"><Cpu className="text-nova-cyan" /><p className="mt-3 text-sm text-nova-muted">Total recommandé</p><p className="text-3xl font-black">{total.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</p></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {recommendation.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
