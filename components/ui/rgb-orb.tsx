export function RGBOrb({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: "radial-gradient(circle, rgba(139,92,246,.7), rgba(6,182,212,.28), transparent 68%)" }}
    />
  );
}
