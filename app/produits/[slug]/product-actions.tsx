"use client";

import Link from "next/link";
import { ShoppingBag, Zap } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/store/cart-store";

export function AddToCartProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <button onClick={() => addItem(product)} className="btn-primary"><ShoppingBag size={18} /> Ajouter au panier</button>
      <Link href="/checkout" onClick={() => addItem(product)} className="btn-secondary"><Zap size={18} /> Acheter maintenant</Link>
    </div>
  );
}
