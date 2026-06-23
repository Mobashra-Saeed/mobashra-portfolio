import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/lib/data/site";
import "./globals.css";

const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono-face", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Web & AI Developer based in Bahawalpur, Pakistan. Building fast, accessible, production-grade web experiences with Next.js and modern AI tooling.",
  keywords: [
    "Mobashra Saeed", "Web Developer", "AI Developer", "Next.js Developer",
    "Frontend Engineer", "React Developer", "Bahawalpur", "Pakistan",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: "Web & AI Developer crafting fast, accessible, production-grade web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Web & AI Developer crafting fast, accessible, production-grade web experiences.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${mono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
