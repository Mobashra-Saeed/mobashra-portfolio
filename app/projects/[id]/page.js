import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, Github } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { BLUR } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ProjectGallery from "@/components/ui/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [project.image] },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) notFound();

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="mx-auto max-w-5xl px-5 py-28 sm:px-8">
      <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-white">
        <ArrowLeft size={16} /> Back to work
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-wider text-accent">
        {project.role} · {project.year}
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line/50 bg-surface-2 glow-ring">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted">
          <p>{project.context}</p>
        </div>

        <aside className="h-fit rounded-2xl border border-line/50 bg-surface/50 p-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Client</dt>
              <dd className="mt-1 text-foreground">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Role</dt>
              <dd className="mt-1 text-foreground">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Year</dt>
              <dd className="mt-1 text-foreground">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack?.map((t) => (
                  <span key={t} className="rounded-md border border-line/60 bg-surface-2/40 px-2 py-1 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          {project.link && (
            <Button href={project.link} external size="md" className="mt-6 w-full">
              Visit live site <ArrowUpRight size={15} />
            </Button>
          )}
          {project.github && (
            <Button href={project.github} external variant="secondary" size="md" className="mt-3 w-full">
              View source <Github size={15} />
            </Button>
          )}
        </aside>
      </div>

      {project.gallery && project.gallery.length > 1 && (
        <div className="mt-14">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">Gallery</p>
          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      )}

      <div className="mt-16 flex justify-end border-t border-line/40 pt-8">
        <Link href={`/projects/${next.id}`} className="group text-right">
          <span className="font-mono text-xs uppercase tracking-wider text-faint">Next project</span>
          <span className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-accent">
            {next.title} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </main>
  );
}
