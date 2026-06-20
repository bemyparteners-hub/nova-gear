import Link from "next/link";
export default function NotFound() { return <section className="container-nova grid min-h-[70vh] place-items-center pt-32 pb-20"><div className="text-center"><p className="eyebrow mx-auto w-fit">404</p><h1 className="mt-5 text-5xl font-black">Page introuvable.</h1><Link href="/" className="btn-primary mt-8">Retour accueil</Link></div></section>; }
