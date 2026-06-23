import { experience } from "@/lib/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line/40 bg-surface/20">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <RevealOnScroll>
          <SectionHeading eyebrow="experience" index="02" title="Where I've been building." />
        </RevealOnScroll>

        <div className="mt-14">
          {experience.map((job, i) => (
            <RevealOnScroll key={job.company + i} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] gap-6 pb-12 sm:grid-cols-[170px_auto_1fr]">
                <p className="hidden font-mono text-sm text-muted sm:block">{job.period}</p>

                <div className="relative flex justify-center">
                  <span
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ring-4 ring-background ${
                      job.current ? "bg-accent" : "bg-surface-2"
                    }`}
                  />
                  {i < experience.length - 1 && (
                    <span className="absolute top-5 h-full w-px bg-line/60" />
                  )}
                </div>

                <div>
                  <p className="font-mono text-xs text-muted sm:hidden">{job.period}</p>
                  <h3 className="font-display text-xl font-bold text-foreground">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-accent">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{job.focus}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
