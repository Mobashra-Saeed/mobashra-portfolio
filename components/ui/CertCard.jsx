"use client";

import { useState } from "react";
import { Award, Trophy, Users, Eye } from "lucide-react";
import Modal from "@/components/ui/Modal";

const icons = { certification: Award, achievement: Trophy, leadership: Users };

export default function CertCard({ cert }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[cert.type] || Award;
  const hasImg = Boolean(cert.image);

  return (
    <>
      <div
        onClick={() => hasImg && setOpen(true)}
        className={`flex h-full items-start gap-4 rounded-2xl border border-line/50 bg-surface/50 p-5 transition-colors hover:border-accent/40 ${
          hasImg ? "cursor-pointer" : ""
        }`}
      >
        <span className="rounded-xl bg-accent-soft p-2.5 text-accent">
          <Icon size={20} />
        </span>
        <div className="min-w-0">
          <h3 className="font-medium leading-snug text-foreground">{cert.title}</h3>
          <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
          <div className="mt-2 flex items-center gap-3">
            <p className="font-mono text-xs text-faint">{cert.year}</p>
            {hasImg && (
              <span className="inline-flex items-center gap-1 font-mono text-xs text-accent">
                view <Eye size={12} />
              </span>
            )}
          </div>
        </div>
      </div>

      {hasImg && (
        <Modal open={open} onClose={() => setOpen(false)} title={cert.title}>
          <div className="p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cert.image} alt={cert.title} className="mx-auto block max-h-[82vh] w-auto rounded-lg" />
          </div>
        </Modal>
      )}
    </>
  );
}
