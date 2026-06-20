import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { BrandMarquee } from "@/components/brand-marquee";
import { Newsletter } from "@/components/newsletter";
import { SetupBuilder } from "@/components/setup-builder";
import { categories, featuredProducts } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="container-nova py-20">
        <SectionHeading eyebrow="Catégories" title="Tout pour un setup qui impose le respect." description="Une sélection claire, premium et orientée performance : périphériques, OLED, streaming, chaises et bundles." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category, index) => <CategoryCard key={category.slug} category={category} index={index} />)}</div>
      </section>
      <section className="container-nova py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Vedettes" title="Produits sélectionnés par NOVA." description="Du matériel sélectionné pour les vrais passionnés." /><Link href="/boutique" className="btn-secondary h-fit">Tout voir</Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featuredProducts.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="container-nova py-20"><SetupBuilder /></section>
      <section className="container-nova py-16">
        <SectionHeading eyebrow="Avis clients" title="Chaque détail compte quand la victoire se joue à la milliseconde." />
        <div className="grid gap-5 md:grid-cols-3">
          <ReviewCard name="Yanis" role="Joueur FPS" text="J’ai construit un setup ultra propre en une soirée. Les Pro Picks sont vraiment utiles." />
          <ReviewCard name="Lina" role="Streameuse" text="Le rendu premium inspire confiance, les bundles streaming vont droit au but." />
          <ReviewCard name="Marc" role="Créateur vidéo" text="Enfin une boutique gaming qui ne ressemble pas à une page amateur trop flashy." />
        </div>
      </section>
      <section className="container-nova py-16"><SectionHeading eyebrow="Marques" title="L’écosystème premium gaming." /><BrandMarquee /></section>
      <Newsletter />
    </>
  );
}
