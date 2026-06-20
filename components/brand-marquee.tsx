export function BrandMarquee() {
  const brands = ["Logitech G", "Razer", "SteelSeries", "Corsair", "MSI", "ASUS ROG", "Secretlab", "Elgato"];
  return <div className="glass rounded-[2rem] p-6"><div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 lg:grid-cols-8">{brands.map((brand) => <div key={brand} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm font-black text-white/80">{brand}</div>)}</div></div>;
}
