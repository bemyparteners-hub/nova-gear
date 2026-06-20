import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { formatPrice, getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { AddToCartProductActions } from "./product-actions";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  return { title: product?.name ?? "Produit", description: product?.shortDescription };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: product.name, brand: product.brand, description: product.shortDescription, image: product.image, offers: { "@type": "Offer", priceCurrency: "EUR", price: product.price, availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock" }, aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviews } };
  return (
    <section className="container-nova pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="rgb-border premium-card overflow-hidden p-4"><img src={product.image} alt={product.name} className="h-[520px] w-full rounded-[1.6rem] object-cover transition hover:scale-[1.02]" /></div>
          <div className="grid grid-cols-3 gap-4">{product.gallery.map((image) => <img key={image} src={image} alt="" className="h-32 rounded-3xl border border-white/10 object-cover" />)}</div>
        </div>
        <div>
          <Link href={`/categorie/${product.categorySlug}`} className="eyebrow">{product.category}</Link>
          <h1 className="mt-5 text-5xl font-black tracking-tight">{product.name}</h1>
          <p className="mt-3 text-nova-cyan">{product.brand}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4"><span className="text-4xl font-black">{formatPrice(product.price)}</span>{product.oldPrice ? <span className="text-xl text-nova-muted line-through">{formatPrice(product.oldPrice)}</span> : null}<span className="flex items-center gap-1 text-nova-muted"><Star className="fill-nova-cyan text-nova-cyan" size={18} /> {product.rating} ({product.reviews} avis)</span></div>
          <p className="muted mt-6 text-lg leading-8">{product.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">{product.badges.map((badge) => <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-nova-cyan">{badge}</span>)}</div>
          <AddToCartProductActions product={product} />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">{[{icon: ShieldCheck, title:"Paiement sécurisé"}, {icon: Truck, title:"Livraison rapide"}, {icon: RotateCcw, title:"Retours faciles"}].map(({ icon: Icon, title }) => <div key={title} className="glass rounded-3xl p-4 text-sm"><Icon className="mb-3 text-nova-cyan" />{title}</div>)}</div>
        </div>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-[2rem] p-6"><h2 className="text-2xl font-black">Caractéristiques techniques</h2><div className="mt-5 grid gap-3">{Object.entries(product.specs).map(([key, value]) => <div key={key} className="flex justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><span className="text-nova-muted">{key}</span><span className="font-semibold text-right">{value}</span></div>)}</div></div>
        <div className="glass rounded-[2rem] p-6"><h2 className="text-2xl font-black">Avantages clés</h2><ul className="mt-5 grid gap-3 text-nova-muted"><li>• Produit réel intégré dans la base NOVA GEAR.</li><li>• Prix éditable depuis l’admin avant publication.</li><li>• Compatible avec le comparateur et le Setup Builder.</li><li>• SEO produit via données structurées JSON-LD.</li></ul></div>
      </div>
      <div className="mt-16"><h2 className="text-3xl font-black">Avis clients</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><ReviewCard name="Alex" role="Client vérifié" text="Finition premium et livraison rapide. Le produit s’intègre parfaitement à mon setup." /><ReviewCard name="Nora" role="Streameuse" text="Le comparateur m’a aidée à choisir sans perdre du temps." /><ReviewCard name="Sami" role="Joueur compétitif" text="Très bon choix pour un usage orienté performance." /></div></div>
      <div className="mt-16"><h2 className="text-3xl font-black">Produits similaires</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></div>
    </section>
  );
}
