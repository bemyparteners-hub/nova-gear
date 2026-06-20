import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";

export const metadata: Metadata = { title: "Panier" };
export default function Page() {
  return <section className="container-nova pt-32 pb-20"><div className="mb-10"><p className="eyebrow">Panier</p><h1 className="mt-5 text-5xl font-black">Ton panier NOVA.</h1></div><CartPage /></section>;
}
