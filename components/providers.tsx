"use client";

import { CartProvider } from "@/store/cart-store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
