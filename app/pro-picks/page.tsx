import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
export const metadata: Metadata = { title: "Pro Picks" };
const picks = [
  ["FPS compétitif", "FPS"], ["Streaming", "Streaming"], ["Setup console", "console"], ["Setup PC haut de gamme", "PC haut de gamme"], ["Setup étudiant gamer", "Étudiant"], ["Setup luxe", "luxe"]
];
export default function Page() { return <section className="container-nova pt-32 pb-20"><div className="mb-10"><p className="eyebrow">Pro Picks</p><h1 className="mt-5 text-5xl font-black">Sélections par usage.</h1></div><div className="grid gap-12">{picks.map(([title, needle]) => { const items = products.filter((p) => [p.use, p.badges.join(" "), p.specs.Usage ?? ""].join(" ").toLowerCase().includes(needle.toLowerCase())).slice(0, 4); return <div key={title}><h2 className="mb-5 text-2xl font-black">{title}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div></div>; })}</div></section>; }
