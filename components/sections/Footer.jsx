import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-extrabold text-foreground">
            Mobashra Saeed<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
            <Github size={18} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
            <Mail size={18} />
          </a>
          <a href="#" aria-label="Back to top" className="ml-1 rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line/30">
        <p
          suppressHydrationWarning
          className="mx-auto max-w-6xl px-5 py-5 text-center font-mono text-xs text-faint sm:px-8"
        >
          © {new Date().getFullYear()} Mobashra Saeed — Built with Next.js, Tailwind &amp; Motion.
        </p>
      </div>
    </footer>
  );
}
