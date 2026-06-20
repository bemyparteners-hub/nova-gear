import Link from "next/link";
export default function ConfirmationPage() {
  return <section className="container-nova grid min-h-[70vh] place-items-center pt-32 pb-20"><div className="rgb-border premium-card max-w-2xl p-10 text-center"><p className="eyebrow mx-auto w-fit">Commande confirmée</p><h1 className="mt-5 text-5xl font-black">Setup en préparation.</h1><p className="muted mt-4 leading-8">Merci pour ta commande. En mode démo, cette page confirme simplement le parcours checkout.</p><Link href="/mes-commandes" className="btn-primary mt-8">Voir mes commandes</Link></div></section>;
}
