"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { RGBOrb } from "@/components/ui/rgb-orb";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-nova-radial pt-32">
      <RGBOrb className="left-1/2 top-12 h-80 w-80 -translate-x-1/2" />
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className="absolute h-1 w-1 animate-pulseGlow rounded-full bg-nova-cyan" style={{ left: `${(index * 37) % 100}%`, top: `${18 + ((index * 19) % 72)}%`, animationDelay: `${index * 180}ms` }} />
        ))}
      </div>
      <div className="container-nova grid min-h-[760px] items-center gap-12 pb-20 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow"><Sparkles size={14} /> Marketplace premium gaming</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">Gear up. <span className="bg-gradient-to-r from-nova-violet via-nova-cyan to-nova-blue bg-clip-text text-transparent">Dominate</span> the game.</h1>
          <p className="muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl">Le matériel gaming premium pour setups d’exception. Performance, précision, immersion et esthétique RGB maîtrisée.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/boutique" className="btn-primary">Explorer la boutique <ArrowRight size={18} /></Link>
            <Link href="/boutique?sort=popular" className="btn-secondary">Voir les best-sellers</Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center">
            {[['30+','produits réels'], ['4.8/5','note moyenne'], ['24h','support setup']].map(([value, label]) => <div key={label} className="glass rounded-3xl p-4"><p className="text-2xl font-black">{value}</p><p className="mt-1 text-xs uppercase tracking-[0.2em] text-nova-muted">{label}</p></div>)}
          </div>
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.9, rotateX: 10 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
          <div className="rgb-border premium-card relative min-h-[520px] overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-rgb-line animate-scan" />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-nova-violet/30 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-nova-cyan/20 blur-3xl" />
            <div className="relative z-10 grid h-full place-items-center rounded-[2rem] border border-white/10 bg-black/30 p-8">
              <div className="w-full max-w-md animate-float">
                <div className="mx-auto h-40 w-72 rounded-t-[3rem] border border-nova-cyan/40 bg-gradient-to-br from-white/10 to-white/[.02] shadow-cyan" />
                <div className="mx-auto mt-4 h-5 w-80 rounded-full bg-gradient-to-r from-nova-violet via-nova-cyan to-nova-blue blur-sm" />
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="h-28 rounded-3xl border border-white/10 bg-white/5 shadow-glow" />
                  <div className="h-28 rounded-3xl border border-white/10 bg-gradient-to-br from-nova-violet/30 to-white/5" />
                  <div className="h-28 rounded-3xl border border-white/10 bg-white/5 shadow-cyan" />
                </div>
                <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-nova-muted"><Zap size={16} className="text-nova-cyan" /> RGB sync active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
