import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn, BLUR } from "@/lib/utils";

const catLabel = {
  web: "Web Development",
  wordpress: "WordPress",
  chatbot: "Chatbot",
  "ai-ml": "AI / ML",
};

export default function ProjectCard({ project }) {
  const { id, title, role, year, image, link, summary, stack, featured, category } = project;
  const projectCategories = Array.isArray(category) ? category : [category];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/50 bg-surface/60 transition-all duration-300 hover:-translate-y-1.5",
        featured ? "hover:border-accent/50 hover:glow-ring" : "hover:border-line"
      )}
    >
      {/* stretched link → whole card opens the case study */}
      <Link href={`/projects/${id}`} aria-label={`View ${title}`} className="absolute inset-0 z-10" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-line/50 bg-surface-2">
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL={BLUR}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {projectCategories.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line/60 bg-background/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur"
            >
              {catLabel[item]}
            </span>
          ))}
        </div>
        <span className="absolute right-3 top-3 font-mono text-[11px] text-muted">{year}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{role}</p>
        <h3 className="mt-2 font-display text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack?.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md border border-line/60 bg-surface-2/40 px-2 py-1 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            View project <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-1 rounded-full border border-line/60 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-white"
            >
              Live <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
