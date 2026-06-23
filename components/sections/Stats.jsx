import { site } from "@/lib/data/site";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Stats() {
  return (
    <section className="border-y border-line/40 bg-surface/20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 border-t border-line/40 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              /// Trusted by clients &amp; teams
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
              {site.clients.map((c) => (
                <span
                  key={c}
                  className="font-display text-lg font-bold tracking-tight text-zinc-500 transition-colors hover:text-foreground sm:text-xl"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
