"use client";

import { useState, useEffect } from "react";

const COLORS = {
  kw: "text-[var(--color-accent-hover)]",
  fn: "text-[var(--color-accent)]",
  str: "text-emerald-400",
  bool: "text-amber-300",
  key: "text-zinc-200",
  com: "text-zinc-600",
  punct: "text-zinc-500",
  plain: "text-zinc-300",
};

const SNIPPETS = [
  {
    name: "developer.js",
    lines: [
      [["const ", "kw"], ["developer", "fn"], [" = {", "punct"]],
      [["  name", "key"], [": ", "punct"], ['"Mobashra Saeed"', "str"], [",", "punct"]],
      [["  role", "key"], [": ", "punct"], ['"Web & AI Developer"', "str"], [",", "punct"]],
      [
        ["  stack", "key"],
        [": [", "punct"],
        ['"Next.js"', "str"], [", ", "punct"],
        ['"React"', "str"], [", ", "punct"],
        ['"TypeScript"', "str"], [",", "punct"]
      ],
      [
        ["    ", "plain"],
        ['"Angular"', "str"], [", ", "punct"],
        ['"JavaScript"', "str"], [", ", "punct"],
        ['"WordPress"', "str"], [",", "punct"]
      ],
      [
        ["    ", "plain"],
        ['"REST APIs"', "str"],
        ["]", "punct"], [",", "punct"]
      ],
      [["  delivered", "key"], [": ", "punct"], ['"40+ projects"', "str"], [",", "punct"]],
      [["  available", "key"], [": ", "punct"], ["true", "bool"], [",", "punct"]],
      [["};", "punct"]],
    ],
  },
];

function flatten(snippet) {
  const flat = [];
  snippet.lines.forEach((line, li) => {
    line.forEach(([text, c]) => {
      for (const ch of text) flat.push({ ch, c, li });
    });
    flat.push({ ch: "\n", c: "plain", li });
  });
  return flat;
}

function renderRun(chars) {
  const out = [];
  let i = 0;
  while (i < chars.length) {
    const c = chars[i].c;
    let s = "";
    while (i < chars.length && chars[i].c === c) {
      s += chars[i].ch;
      i++;
    }
    out.push(
      <span key={out.length} className={COLORS[c] || COLORS.plain}>
        {s}
      </span>
    );
  }
  return out;
}

export default function CodeWindow() {
  const [si, setSi] = useState(0);
  const [n, setN] = useState(0);

  const snippet = SNIPPETS[si];
  const flat = flatten(snippet);
  const total = flat.length;
  const lineCount = snippet.lines.length;

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(total);
      return;
    }
    if (n < total) {
      const t = setTimeout(() => setN(n + 1), 26);
      return () => clearTimeout(t);
    }
    const hold = setTimeout(() => {
      setSi((p) => (p + 1) % SNIPPETS.length);
      setN(0);
    }, 2400);
    return () => clearTimeout(hold);
  }, [n, total, si]);

  const shown = flat.slice(0, n);
  const byLine = Array.from({ length: lineCount }, () => []);
  shown.forEach((c) => {
    if (c.ch !== "\n") byLine[c.li].push(c);
  });
  const currentLine = shown.length ? shown[shown.length - 1].li : 0;

  return (
    <div className="relative">
      {/* Restored: Original Ambient Glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-accent/10 blur-3xl" />

      {/* Restored: Original border, background surface, rounded corners & glow-ring class */}
      <div className="overflow-hidden rounded-2xl border border-line/60 bg-surface/90 backdrop-blur glow-ring">
        {/* Restored: Original Title bar */}
        <div className="flex items-center gap-2 border-b border-line/60 bg-surface-2/40 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted">{snippet.name}</span>
        </div>

        {/* Code Container */}
        <div className="code-scroll overflow-x-hidden p-5 font-mono text-[12.5px] leading-7 sm:text-sm">
          <div className="min-h-[252px]">
            {Array.from({ length: lineCount }).map((_, li) => (
              /* Structural Fix: Using items-start instead of flex-wrap prevents extra line drops */
              <div key={li} className="flex items-start">
                <span className="mr-4 inline-block w-5 shrink-0 select-none text-right text-faint">
                  {li + 1}
                </span>
                <code className="min-w-0 flex-1 whitespace-pre-wrap break-words">
                  {renderRun(byLine[li])}
                  {li === currentLine && n < total && (
                    <span className="caret text-accent">▍</span>
                  )}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}