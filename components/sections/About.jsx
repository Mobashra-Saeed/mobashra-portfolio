import { GraduationCap } from "lucide-react";
import { site } from "@/lib/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const skills = [
  "Next.js", "React", "JavaScript", "Tailwind CSS", "Motion",
  "Node.js", "WordPress", "Elementor Pro", "SEO", "Responsive UI",
  "AI Tooling", "Vercel",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <RevealOnScroll>
        <SectionHeading eyebrow="about" index="01" title="Engineering & design, in one toolkit." />
      </RevealOnScroll>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a Web &amp; AI Developer focused on building fast, accessible interfaces and
              shipping them to production. My work spans full-stack component architecture,
              performance optimization, and the practical use of AI tools in real products.
            </p>
            <p>
              I care about the details that don&apos;t show up in a screenshot — load speed, semantic
              markup, keyboard navigation, and clean, maintainable code the next developer can
              actually read.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-line/60 bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <GlowCard className="p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-accent-soft p-2.5 text-accent">
                <GraduationCap size={22} />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">Education</p>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-foreground">
              {site.education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{site.education.school}</p>
            <div className="mt-5 flex items-center justify-between border-t border-line/50 pt-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">CGPA</p>
                <p className="font-display text-lg font-bold text-foreground">{site.education.cgpa}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Graduation</p>
                <p className="font-display text-lg font-bold text-foreground">{site.education.graduation}</p>
              </div>
            </div>
          </GlowCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
