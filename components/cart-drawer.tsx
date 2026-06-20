"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cart-store";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, removeItem, updateQuantity, subtotal, total, shipping, discount } = useCart();
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button aria-label="Fermer" className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.aside className="fixed bottom-0 right-0 top-0 z-[80] flex w-full max-w-md flex-col border-l border-white/10 bg-[#08090d]/95 p-5 shadow-card backdrop-blur-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 26, stiffness: 220 }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-nova-cyan">Panier</p>
                <h2 className="text-2xl font-black">Ton setup</h2>
              </div>
              <button onClick={onClose} className="rounded-full border border-white/10 p-2"><X size={18} /></button>
            </div>
            <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
              {lines.length === 0 ? <p className="muted rounded-3xl border border-white/10 p-6 text-center">Ton panier est vide. Explore la boutique pour construire ton setup.</p> : null}
              {lines.map(({ product, quantity }) => (
                <div key={product.id} className="glass flex gap-4 rounded-3xl p-3">
                  <img src={product.image} alt="" className="h-20 w-20 rounded-2xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold">{product.name}</p>
                    <p className="text-sm text-nova-muted">{formatPrice(product.price)}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 p-1">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="rounded-full bg-white/5 p-1"><Minus size={14} /></button>
                        <span className="w-6 text-center text-sm font-bold">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="rounded-full bg-white/5 p-1"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeItem(product.id)} className="rounded-full p-2 text-nova-muted hover:text-nova-red"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
              <div className="flex justify-between text-nova-muted"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between text-nova-muted"><span>Livraison</span><span>{shipping ? formatPrice(shipping) : "Offerte"}</span></div>
              {discount ? <div className="flex justify-between text-nova-cyan"><span>Remise</span><span>-{formatPrice(discount)}</span></div> : null}
              <div className="flex justify-between text-xl font-black"><span>Total</span><span>{formatPrice(total)}</span></div>
              <Link href="/panier" onClick={onClose} className="btn-secondary w-full">Voir le panier</Link>
              <Link href="/checkout" onClick={onClose} className="btn-primary w-full">Checkout sécurisé</Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
