"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

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
            className="group relative overflow-hidden rounded-xl border border-line/50 bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} — screenshot ${i + 1}`}
              loading="lazy"
              className="block max-h-[420px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={title}>
        {active && (
          <div className="p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active} alt={title} className="mx-auto block max-h-[82vh] w-auto rounded-lg" />
          </div>
        )}
      </Modal>
    </>
  );
}
