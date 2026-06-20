"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/store/cart-store";
import { CartDrawer } from "@/components/cart-drawer";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Produits" },
  { href: "/setup-builder", label: "Setups" },
  { href: "/pro-picks", label: "Pro Picks" },
  { href: "/boutique#promotions", label: "Promotions" },
  { href: "/support", label: "Support" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="container-nova flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-nova-violet via-nova-cyan to-nova-blue font-black shadow-glow">N</span>
            <span>
              <span className="block text-lg font-black tracking-[0.28em]">NOVA</span>
              <span className="block -mt-1 text-xs font-semibold tracking-[0.42em] text-nova-muted">GEAR</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-nova-muted transition hover:bg-white/5 hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/boutique" className="btn-secondary px-4 py-2"><Search size={16} /> Recherche</Link>
            <Link href="/connexion" className="btn-secondary px-4 py-2"><User size={16} /> Connexion</Link>
            <button onClick={() => setCartOpen(true)} className="btn-primary px-4 py-2" aria-label="Ouvrir le panier">
              <ShoppingBag size={16} /> Panier {itemCount ? <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{itemCount}</span> : null}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={() => setCartOpen(true)} className="relative rounded-full border border-white/10 p-3">
              <ShoppingBag size={18} />
              {itemCount ? <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-nova-cyan text-xs font-bold text-black">{itemCount}</span> : null}
            </button>
            <button onClick={() => setMobileOpen((value) => !value)} className="rounded-full border border-white/10 p-3" aria-label="Menu mobile">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="container-nova pb-5 lg:hidden">
            <div className="glass-strong grid gap-1 rounded-3xl p-3">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-nova-muted hover:bg-white/5 hover:text-white">{link.label}</Link>)}
              <Link href="/connexion" onClick={() => setMobileOpen(false)} className="btn-secondary mt-2">Connexion</Link>
            </div>
          </div>
        ) : null}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
