"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";
import Button from "@/components/ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-line/50 bg-background/80 backdrop-blur-md" : "border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="font-display text-lg font-extrabold tracking-tight text-foreground">
          MS<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={`mailto:${site.email}`} external size="md">
            Hire me <ArrowUpRight size={16} />
          </Button>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-lg font-extrabold">
                MS<span className="text-accent">.</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-foreground">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-5 pt-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl font-bold text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button href={`mailto:${site.email}`} external size="lg" className="mt-8 self-start">
                Hire me <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
