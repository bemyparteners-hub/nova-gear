import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

const columns = [
  { title: "Boutique", links: [["Produits", "/boutique"], ["Setup Builder", "/setup-builder"], ["Pro Picks", "/pro-picks"], ["Comparateur", "/comparateur"]] },
  { title: "Support", links: [["Contact", "/contact"], ["FAQ", "/faq"], ["Livraison & retours", "/livraison-retours"], ["Mon compte", "/mon-compte"]] },
  { title: "Légal", links: [["CGV", "/conditions-generales"], ["Confidentialité", "/politique-confidentialite"], ["À propos", "/a-propos"]] },
];

export function TrustBadges() {
  const items = [
    { icon: ShieldCheck, title: "Paiement sécurisé", text: "Stripe-ready et conformité PCI via prestataire." },
    { icon: Truck, title: "Livraison rapide", text: "Frais offerts dès 250 €." },
    { icon: RotateCcw, title: "Retours faciles", text: "Process simple et suivi client clair." },
    { icon: Headphones, title: "Support expert", text: "Aide setup, compatibilité et choix produits." },
  ];
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(({ icon: Icon, title, text }) => <div key={title} className="glass rounded-3xl p-5"><Icon className="text-nova-cyan" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-nova-muted">{text}</p></div>)}</div>;
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-14">
      <div className="container-nova">
        <TrustBadges />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-nova-violet via-nova-cyan to-nova-blue font-black">N</span>
              <div><p className="text-xl font-black tracking-[0.28em]">NOVA</p><p className="-mt-1 text-xs tracking-[0.42em] text-nova-muted">GEAR</p></div>
            </div>
            <p className="muted mt-5 max-w-md leading-7">Marketplace premium pour joueurs exigeants, streamers, créateurs de contenu et passionnés de setups haut de gamme.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => <div key={column.title}><h4 className="font-bold">{column.title}</h4><div className="mt-4 grid gap-3">{column.links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-nova-muted hover:text-white">{label}</Link>)}</div></div>)}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-nova-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NOVA GEAR. Projet e-commerce premium.</p>
          <p>Performance, précision, immersion.</p>
        </div>
      </div>
    </footer>
  );
}
