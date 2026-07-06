import { MetadataRoute } from "next"
import posts from "@/data/posts.json"

const base = "https://vbmelektro.no"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/befaring`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tjenester`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tjenester/elbillader`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/priser`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tilbud`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/videoavklaring`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/book`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/slik-gjor-vi-det`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/om-oss`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blogg`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/nyhetsbrev`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/personvern`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blogg/${post.slug}`,
    lastModified: new Date(post.dato),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
