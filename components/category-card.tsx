"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Armchair, Cpu, Headphones, Keyboard, Monitor, MousePointer2, RadioTower } from "lucide-react";
import type { Category } from "@/lib/types";

const icons = { Armchair, Cpu, Headphones, Keyboard, Monitor, MousePointer2, RadioTower } as const;

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const Icon = icons[category.icon as keyof typeof icons] ?? Cpu;
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.05 }}>
      <Link href={`/categorie/${category.slug}`} className="group premium-card block h-full p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-nova-violet/30 to-nova-cyan/20 text-nova-cyan ring-1 ring-white/10 transition group-hover:scale-110"><Icon /></div>
        <h3 className="mt-6 text-xl font-black">{category.name}</h3>
        <p className="muted mt-2 text-sm leading-6">{category.description}</p>
        <p className="mt-5 text-sm font-semibold text-nova-cyan">Explorer →</p>
      </Link>
    </motion.div>
  );
}
