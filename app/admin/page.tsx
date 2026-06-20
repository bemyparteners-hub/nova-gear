import type { Metadata } from "next";
import { AdminProductTable } from "@/components/admin-product-table";
import { adminStats } from "@/lib/admin";
export const metadata: Metadata = { title: "Admin dashboard" };
export default function AdminPage() { return <section className="container-nova pt-32 pb-20"><div className="mb-10"><p className="eyebrow">Admin</p><h1 className="mt-5 text-5xl font-black">Dashboard premium.</h1><p className="muted mt-4">Connexion admin à brancher via Supabase Auth ou NextAuth selon ton choix.</p></div><div className="mb-8 grid gap-4 md:grid-cols-4">{adminStats.map((stat) => <div key={stat.label} className="glass rounded-3xl p-5"><p className="text-sm text-nova-muted">{stat.label}</p><p className="mt-2 text-3xl font-black">{stat.value}</p><p className="mt-1 text-sm text-nova-cyan">{stat.delta}</p></div>)}</div><AdminProductTable /></section>; }
