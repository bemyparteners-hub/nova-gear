import { Star } from "lucide-react";

export function ReviewCard({ name, text, role }: { name: string; text: string; role: string }) {
  return (
    <article className="glass rounded-3xl p-6">
      <div className="flex gap-1 text-nova-cyan">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} className="fill-nova-cyan" />)}</div>
      <p className="mt-5 leading-7 text-white/90">“{text}”</p>
      <div className="mt-6"><p className="font-bold">{name}</p><p className="text-sm text-nova-muted">{role}</p></div>
    </article>
  );
}
