import type { MetadataRoute } from "next"
import { VBM } from "@/lib/vbm"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = VBM.url
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/elektriker-asker`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/elektriker-baerum`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/elbillader-installasjon`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/sikringsskap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/oppussing-elektro`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ]
}
