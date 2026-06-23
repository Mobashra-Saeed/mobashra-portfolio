"use client";

import { useActionState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { site } from "@/lib/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

const initialState = { status: "idle", message: "" };

const inputCls =
  "w-full rounded-xl border border-line/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left — info */}
        <div>
          <SectionHeading eyebrow="contact" index="05" title="Let's build something." />
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Have a project, a role, or an idea worth shipping? Send a message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-muted transition-colors hover:text-white">
              <Mail size={18} className="text-accent" /> {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-muted transition-colors hover:text-white">
              <Phone size={18} className="text-accent" /> {site.phone}
            </a>
            <p className="flex items-center gap-3 text-muted">
              <MapPin size={18} className="text-accent" /> {site.location}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line/60 p-3 text-muted transition-colors hover:border-accent/60 hover:text-white">
              <Github size={18} />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-line/60 p-3 text-muted transition-colors hover:border-accent/60 hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right — working form */}
        <form action={formAction} className="rounded-2xl border border-line/50 bg-surface/50 p-6 sm:p-8">
          {/* Honeypot (hidden from humans) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me about it…" className={`${inputCls} resize-none`} />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-all hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
            >
              {pending ? "Sending…" : (<>Send message <Send size={16} /></>)}
            </button>

            {state.status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> {state.message}
              </p>
            )}
            {state.status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} /> {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
