import type { Metadata } from "next";
export const metadata: Metadata = { title: "Livraison & retours" };
export default function Page() {
  return <section className="container-nova grid min-h-[70vh] place-items-center pt-32 pb-20"><div className="premium-card max-w-3xl p-8 md:p-12"><p className="eyebrow">NOVA GEAR</p><h1 className="mt-5 text-5xl font-black">Livraison & retours</h1><p className="muted mt-5 text-lg leading-8">Livraison rapide, retours faciles et garantie fabricant.</p><div className="mt-8 grid gap-4 md:grid-cols-2"><input placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /><input placeholder="Message / information" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /></div><button className="btn-primary mt-6">Voir les conditions</button></div></section>;
}
