export function Newsletter() {
  return (
    <section className="container-nova py-20">
      <div className="rgb-border premium-card overflow-hidden p-8 text-center md:p-12">
        <p className="eyebrow mx-auto w-fit">Newsletter premium</p>
        <h2 className="section-title mt-5">Drop exclusifs, promos RGB et guides setup.</h2>
        <p className="muted mx-auto mt-4 max-w-2xl">Reçois les sélections Pro Picks, nouveautés OLED, bundles streaming et offres limitées.</p>
        <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]">
          <input type="email" placeholder="ton@email.com" className="rounded-full border border-white/10 bg-black/40 px-5 py-3 outline-none focus:border-nova-cyan" />
          <button className="btn-primary" type="button">S’inscrire</button>
        </form>
      </div>
    </section>
  );
}
