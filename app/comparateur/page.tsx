import type { Metadata } from "next";
import { CompareGear } from "@/components/compare-gear";
export const metadata: Metadata = { title: "Comparateur" };
export default function Page() { return <section className="container-nova pt-32 pb-20"><div className="mb-10 max-w-3xl"><p className="eyebrow">Compare Gear</p><h1 className="mt-5 text-5xl font-black">Compare 2 à 4 produits.</h1><p className="muted mt-4 text-lg leading-8">Prix, note, specs, connectivité, autonomie, compatibilité et usage recommandé.</p></div><CompareGear /></section>; }
