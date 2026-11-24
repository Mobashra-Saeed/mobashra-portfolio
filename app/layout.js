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
    "Full-Stack & AI Developer based in Bahawalpur, Pakistan, building web applications and AI/ML products.",
  keywords: [
    "Mobashra Saeed", "Full-Stack Developer", "AI Developer", "Next.js Developer",
    "Machine Learning", "Natural Language Processing", "Bahawalpur", "Pakistan",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: "Full-Stack & AI Developer building web applications and AI/ML products.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Full-Stack & AI Developer building web applications and AI/ML products.",
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
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
