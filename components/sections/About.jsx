import { GraduationCap } from "lucide-react";
import { site } from "@/lib/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const skills = [
  "Machine Learning", "Natural Language Processing", "Data Science",
  "Next.js", "React", "Angular", "TypeScript", "Node.js", "WordPress",
  "Responsive UI", "AI / ML",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <RevealOnScroll>
        <SectionHeading eyebrow="about" title="About me." />
      </RevealOnScroll>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a Full-Stack &amp; AI Developer focused on building and shipping web
              applications and AI/ML products. My academic work includes machine learning,
              natural language processing, data science, and a thesis on news credibility
              classification.
            </p>
            <p>
              I care about the details that don&apos;t show up in a screenshot — load speed, semantic
              markup, keyboard navigation, and clean, maintainable code the next developer can
              actually read.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((s) => (
                <GlowCard
                  key={s}
                  className="rounded-lg px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {s}
                </GlowCard>
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
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Dates</p>
                <p className="font-display text-sm font-bold text-foreground">{site.education.dates}</p>
              </div>
            </div>
            <div className="mt-4 border-t border-line/50 pt-4 text-sm leading-relaxed text-muted">
              <p><span className="font-medium text-foreground">Undergraduate thesis:</span> {site.education.thesis}</p>
              <p className="mt-2">{site.education.language}</p>
            </div>
          </GlowCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
