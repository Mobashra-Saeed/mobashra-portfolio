import { cn } from "@/lib/utils";

export default function GlowCard({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line/50 bg-surface/60 backdrop-blur-sm transition-all duration-300",
        hover && "hover:border-accent/40 hover:glow-ring",
        className
      )}
    >
      {children}
    </div>
  );
}
