import { site } from "@/lib/data/site";

export default function Marquee() {
  const items = site.marquee;
  const row = (
    <div className="marquee-track">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 font-display text-2xl font-extrabold uppercase tracking-tight text-faint sm:text-3xl">
            {t}
          </span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-mask overflow-hidden border-y border-line/40 bg-surface/20 py-5 sm:py-6" aria-hidden="true">
      {row}
    </div>
  );
}
