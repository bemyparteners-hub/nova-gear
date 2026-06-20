"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cart-store";

export function ProductCard({ product, onQuickView }: { product: Product; onQuickView?: (product: Product) => void }) {
  const { addItem } = useCart();
  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8, rotateX: 2, rotateY: -2 }} className="premium-card group relative overflow-hidden p-4">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.badges.slice(0, 2).map((badge) => <span key={badge} className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur">{badge}</span>)}
        </div>
        <button className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 p-2 text-nova-muted backdrop-blur hover:text-nova-cyan" aria-label="Ajouter à la wishlist"><Heart size={16} /></button>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-nova-cyan">{product.brand}</p>
          <span className="flex items-center gap-1 text-sm text-nova-muted"><Star size={14} className="fill-nova-cyan text-nova-cyan" /> {product.rating}</span>
        </div>
        <Link href={`/produits/${product.slug}`} className="mt-2 block min-h-[3.5rem] text-lg font-black leading-tight hover:text-nova-cyan">{product.name}</Link>
        <p className="muted mt-2 line-clamp-2 text-sm leading-6">{product.shortDescription}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-black">{formatPrice(product.price)}</p>
            {product.oldPrice ? <p className="text-sm text-nova-muted line-through">{formatPrice(product.oldPrice)}</p> : null}
          </div>
          <p className={product.stock > 0 ? "text-xs font-bold text-nova-cyan" : "text-xs font-bold text-nova-red"}>{product.stock > 0 ? `${product.stock} en stock` : "Rupture"}</p>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <button onClick={() => addItem(product)} className="btn-primary px-4 py-2"><ShoppingBag size={16} /> Ajouter</button>
          <button onClick={() => onQuickView?.(product)} className="btn-secondary px-3 py-2" aria-label="Aperçu rapide"><Eye size={16} /></button>
        </div>
      </div>
    </motion.article>
  );
}
