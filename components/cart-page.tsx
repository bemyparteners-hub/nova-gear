"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/store/cart-store";
import { formatPrice } from "@/lib/products";

export function CartPage() {
  const { lines, updateQuantity, removeItem, subtotal, shipping, discount, total } = useCart();
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {lines.length === 0 ? <div className="glass rounded-[2rem] p-10 text-center"><h2 className="text-2xl font-black">Panier vide</h2><p className="muted mt-2">Ajoute du matériel pour construire ton setup.</p><Link href="/boutique" className="btn-primary mt-6">Explorer la boutique</Link></div> : null}
        {lines.map(({ product, quantity }) => <div key={product.id} className="glass flex flex-col gap-4 rounded-[2rem] p-4 sm:flex-row sm:items-center">
          <img src={product.image} alt="" className="h-28 w-28 rounded-3xl object-cover" />
          <div className="flex-1"><p className="text-xs font-bold uppercase tracking-[0.2em] text-nova-cyan">{product.brand}</p><h3 className="text-xl font-black">{product.name}</h3><p className="text-sm text-nova-muted">{formatPrice(product.price)}</p></div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 p-1"><button onClick={() => updateQuantity(product.id, quantity - 1)} className="rounded-full bg-white/5 p-2"><Minus size={14} /></button><span className="w-8 text-center font-bold">{quantity}</span><button onClick={() => updateQuantity(product.id, quantity + 1)} className="rounded-full bg-white/5 p-2"><Plus size={14} /></button></div>
          <button onClick={() => removeItem(product.id)} className="rounded-full border border-white/10 p-3 text-nova-red"><Trash2 size={18} /></button>
        </div>)}
      </div>
      <aside className="glass-strong h-fit rounded-[2rem] p-6 lg:sticky lg:top-24"><h2 className="text-2xl font-black">Total</h2><div className="mt-5 space-y-3 text-sm"><div className="flex justify-between text-nova-muted"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between text-nova-muted"><span>Livraison</span><span>{shipping ? formatPrice(shipping) : "Offerte"}</span></div>{discount ? <div className="flex justify-between text-nova-cyan"><span>Remise</span><span>-{formatPrice(discount)}</span></div> : null}<div className="flex justify-between text-2xl font-black"><span>Total</span><span>{formatPrice(total)}</span></div></div><Link href="/checkout" className="btn-primary mt-6 w-full">Checkout</Link></aside>
    </div>
  );
}
