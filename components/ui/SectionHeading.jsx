import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, index, className, align = "left" }) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <div className={cn("flex items-baseline gap-3", align === "center" && "justify-center")}>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/// {eyebrow}</p>
        )}
        {index && (
          <span className="font-mono text-xs tracking-[0.2em] text-faint">({index})</span>
        )}
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
