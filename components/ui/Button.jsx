import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "btn-fill inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: {
    cls: "bg-accent text-white hover:text-white shadow-[var(--shadow-accent)]",
    fill: "var(--color-accent-hover)",
  },
  secondary: {
    cls: "border border-line/80 text-foreground hover:text-white hover:border-accent",
    fill: "var(--color-accent-soft)",
  },
  ghost: {
    cls: "text-muted hover:text-white",
    fill: "var(--color-accent-soft)",
  },
};

const sizes = { md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };

export default function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const v = variants[variant] || variants.primary;
  const cls = cn(base, v.cls, sizes[size], className);
  const style = { "--btn-fill": v.fill };
  const inner = <span className="btn-content">{children}</span>;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} {...props}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} style={style} {...props}>
      {inner}
    </button>
  );
}
