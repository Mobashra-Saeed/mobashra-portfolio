"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, categories } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <RevealOnScroll>
        <SectionHeading eyebrow="selected work" index="03" title="Things I've shipped." />
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                cat === c.id
                  ? "border-accent bg-accent-soft text-white"
                  : "border-line/60 text-muted hover:border-accent/50 hover:text-white"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
