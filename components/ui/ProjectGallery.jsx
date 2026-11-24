"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ProjectImage from "@/components/ui/ProjectImage";

export default function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(null);
  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(src)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-line/50 bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <ProjectImage
              src={src}
              alt={`${title} — screenshot ${i + 1}`}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={title}>
        {active && (
          <div className="p-2">
            <div className="relative mx-auto h-[82vh] w-[min(90vw,1024px)] max-w-full">
              <ProjectImage key={active} src={active} alt={title} sizes="(max-width: 640px) 90vw, 1024px" className="rounded-lg" />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
