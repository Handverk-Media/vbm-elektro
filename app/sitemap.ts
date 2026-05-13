import { MetadataRoute } from "next"

const base = "https://vbmelektro.no"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/befaring`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nyhetsbrev`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/personvern`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}
