import type { MetadataRoute } from "next"
import { VBM } from "@/lib/vbm"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${VBM.url}/sitemap.xml`,
  }
}
