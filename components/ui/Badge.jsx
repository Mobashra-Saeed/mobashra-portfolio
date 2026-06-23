import { cn } from "@/lib/utils";

const variants = {
  default: "bg-surface-2/60 text-muted border-line/60",
  accent: "bg-accent-soft text-accent-hover border-accent/30",
  available: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
