"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/data/site";
import Button from "@/components/ui/Button";
import CodeWindow from "@/components/ui/CodeWindow";

const ease = [0.16, 1, 0.3, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-30">
      <div className="ambient-accent pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div>
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Web & AI Developer
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Mobashra
            <br />
            <span className="text-accent">Saeed.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-6 flex items-center gap-2 text-sm text-faint">
            <MapPin size={16} className="text-accent" /> {site.location}
          </motion.div>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work" size="lg">
              View the work <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in touch
            </Button>
            <div className="ml-1 flex items-center gap-3">
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
                <Github size={18} />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-line/60 p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — animated code editor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
