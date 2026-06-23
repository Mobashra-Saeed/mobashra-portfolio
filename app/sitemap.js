import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";

export default function sitemap() {
  const base = site.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((p) => p.actionType === "C")
      .map((p) => ({
        url: `${base}/projects/${p.id}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      })),
  ];
}
