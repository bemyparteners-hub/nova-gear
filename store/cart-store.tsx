"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartLine, Product } from "@/lib/types";

type CartContextValue = {
  lines: CartLine[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyPromo: (code: string) => void;
  promoCode: string;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const raw = window.localStorage.getItem("nova-cart");
    if (raw) setLines(JSON.parse(raw));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nova-cart", JSON.stringify(lines));
  }, [lines]);

  const addItem = (product: Product, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      if (existing) {
        return current.map((line) =>
          line.product.id === product.id ? { ...line, quantity: Math.min(line.quantity + quantity, product.stock || 99) } : line
        );
      }
      return [...current, { product, quantity }];
    });
  };

  const removeItem = (productId: string) => setLines((current) => current.filter((line) => line.product.id !== productId));
  const updateQuantity = (productId: string, quantity: number) => {
    setLines((current) =>
      current.map((line) =>
        line.product.id === productId ? { ...line, quantity: Math.max(1, Math.min(quantity, line.product.stock || 99)) } : line
      )
    );
  };
  const clearCart = () => setLines([]);
  const applyPromo = (code: string) => setPromoCode(code.trim().toUpperCase());

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const discount = promoCode === "NOVA10" ? subtotal * 0.1 : 0;
  const shipping = subtotal - discount > 250 || subtotal === 0 ? 0 : 8.9;
  const total = Math.max(subtotal - discount + shipping, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);

  const value = useMemo(
    () => ({ lines, addItem, removeItem, updateQuantity, clearCart, applyPromo, promoCode, subtotal, discount, shipping, total, itemCount }),
    [lines, promoCode, subtotal, discount, shipping, total, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart doit être utilisé dans CartProvider");
  return context;
}
