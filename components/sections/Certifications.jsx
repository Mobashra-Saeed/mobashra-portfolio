import { certifications } from "@/lib/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CertCard from "@/components/ui/CertCard";

export default function Certifications() {
  return (
    <section className="border-t border-line/40 bg-surface/20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <RevealOnScroll>
          <SectionHeading eyebrow="credentials" index="04" title="Certifications & involvement." />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 0.05}>
              <CertCard cert={c} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
