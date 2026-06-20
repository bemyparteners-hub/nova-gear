import type { Metadata } from "next";
import { CheckoutSummary } from "@/components/checkout-summary";

export const metadata: Metadata = { title: "Checkout" };
export default function CheckoutPage() {
  return (
    <section className="container-nova pt-32 pb-20">
      <div className="mb-10"><p className="eyebrow">Checkout</p><h1 className="mt-5 text-5xl font-black">Paiement sécurisé.</h1><p className="muted mt-4">Interface prête pour Stripe Checkout, avec fallback démo.</p></div>
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <form className="glass rounded-[2rem] p-6"><h2 className="text-2xl font-black">Informations client</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><input placeholder="Prénom" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /><input placeholder="Nom" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /><input placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 md:col-span-2" /><input placeholder="Adresse" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 md:col-span-2" /><input placeholder="Ville" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /><input placeholder="Code postal" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" /></div></form>
        <CheckoutSummary />
      </div>
    </section>
  );
}
