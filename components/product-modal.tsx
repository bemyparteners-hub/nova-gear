"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cart-store";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { addItem } = useCart();
  return (
    <AnimatePresence>
      {product ? (
        <>
          <motion.button className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} aria-label="Fermer" />
          <motion.div className="fixed left-1/2 top-1/2 z-[80] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090d] shadow-card" initial={{ opacity: 0, scale: .94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .94 }}>
            <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2"><X size={18} /></button>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-nova-radial p-6"><img src={product.image} alt="" className="h-full min-h-80 w-full rounded-3xl object-cover" /></div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-nova-cyan">{product.brand}</p>
                <h3 className="mt-3 text-3xl font-black">{product.name}</h3>
                <p className="muted mt-4 leading-7">{product.shortDescription}</p>
                <div className="mt-5 flex items-center gap-3"><span className="text-3xl font-black">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-nova-muted"><Star size={16} className="fill-nova-cyan text-nova-cyan" /> {product.rating} ({product.reviews})</span></div>
                <div className="mt-6 grid gap-2 text-sm">
                  {Object.entries(product.specs).slice(0, 5).map(([key, value]) => <div key={key} className="flex justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><span className="text-nova-muted">{key}</span><span className="font-semibold">{value}</span></div>)}
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => addItem(product)} className="btn-primary flex-1"><ShoppingBag size={18} /> Ajouter au panier</button>
                  <Link href={`/produits/${product.slug}`} onClick={onClose} className="btn-secondary">Voir fiche</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
