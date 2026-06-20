"use client";

import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cart-store";

export function CheckoutSummary() {
  const { lines, subtotal, shipping, discount, total, applyPromo, clearCart } = useCart();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
    const response = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: lines.map(({ product, quantity }) => ({ id: product.id, name: product.name, price: product.price, quantity })) }) });
    const data = await response.json();
    if (data.url) {
      clearCart();
      window.location.href = data.url;
    }
    setLoading(false);
  };

  return (
    <aside className="glass-strong rounded-[2rem] p-6">
      <div className="flex items-center gap-2"><Lock className="text-nova-cyan" size={18} /><h2 className="text-2xl font-black">Résumé sécurisé</h2></div>
      <div className="mt-6 space-y-3">
        {lines.map(({ product, quantity }) => <div key={product.id} className="flex justify-between gap-3 text-sm"><span className="text-nova-muted">{product.name} × {quantity}</span><span>{formatPrice(product.price * quantity)}</span></div>)}
      </div>
      <div className="mt-6 flex gap-2"><input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code promo : NOVA10" className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none" /><button onClick={() => applyPromo(code)} className="btn-secondary">OK</button></div>
      <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
        <div className="flex justify-between text-nova-muted"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between text-nova-muted"><span>Livraison</span><span>{shipping ? formatPrice(shipping) : "Offerte"}</span></div>
        {discount ? <div className="flex justify-between text-nova-cyan"><span>Remise</span><span>-{formatPrice(discount)}</span></div> : null}
        <div className="flex justify-between text-2xl font-black"><span>Total</span><span>{formatPrice(total)}</span></div>
      </div>
      <button disabled={!lines.length || loading} onClick={checkout} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50"><CreditCard size={18} /> {loading ? "Redirection..." : "Payer avec Stripe"}</button>
      <p className="mt-3 text-center text-xs text-nova-muted">Mode démo si STRIPE_SECRET_KEY n’est pas configurée.</p>
    </aside>
  );
}
