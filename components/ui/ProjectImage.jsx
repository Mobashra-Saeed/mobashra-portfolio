"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectImage({ src, alt, sizes, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} screenshot unavailable`}
        className={`absolute inset-0 flex items-center justify-center bg-surface-2 px-4 text-center font-mono text-xs text-faint ${className}`}
      >
        Screenshot coming soon
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
