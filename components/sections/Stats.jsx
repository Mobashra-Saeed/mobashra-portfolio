"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data/site";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

function parseCounterValue(value) {
  const suffix = value.includes("+") ? "+" : "";
  const normalized = value.replace("+", "");
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  return {
    target: Number(normalized),
    suffix,
    decimals,
  };
}

function Counter({ value }) {
  const { target, suffix, decimals } = parseCounterValue(value);
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 900;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const current = target * progress;
            setDisplay(
              decimals > 0
                ? current.toFixed(decimals)
                : Math.round(current).toString()
            );
            if (progress < 1) {
              requestAnimationFrame(step);
            } else if (suffix && decimals === 0) {
              setDisplay(`${Math.round(target)}${suffix}`);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);

  return (
    <span ref={ref} className="text-foreground">
      {display}
      {suffix && (display.endsWith(suffix) ? "" : suffix)}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-line/40 bg-surface/20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 border-t border-line/40 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Trusted by clients &amp; teams
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
