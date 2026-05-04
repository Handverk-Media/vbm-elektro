import type { Metadata } from "next"
import { Barlow_Condensed, Figtree } from "next/font/google"
import "./globals.css"
import { VBM } from "@/lib/vbm"

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Elektriker i Asker, Bærum, Oslo og Drammen | VBM Elektro",
    template: "%s | VBM Elektro",
  },
  description:
    "VBM Elektro utfører boliginstallasjon, service og elektrikerarbeid for private, entreprenører og næring i Asker, Bærum, Oslo, Drammen, Lillestrøm og Holmestrand.",
  keywords: [
    "elektriker asker",
    "elektriker bærum",
    "elektriker oslo",
    "elektriker drammen",
    "elektriker billingstad",
    "boliginstallasjon",
    "elektriker oppussing",
    "elbillader installasjon",
    "sikringsskap",
    "elektriker nær meg",
  ],
  metadataBase: new URL(VBM.url),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: VBM.name,
    title: "Elektriker i Asker, Bærum, Oslo og Drammen | VBM Elektro",
    description: VBM.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: VBM.org,
  description: VBM.tagline,
  url: VBM.url,
  telephone: VBM.phone,
  email: VBM.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asker",
    addressRegion: "Viken",
    addressCountry: "NO",
  },
  areaServed: VBM.areas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  priceRange: "kr kr",
  openingHours: "Mo-Fr 07:00-15:00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nb"
      className={`${barlow.variable} ${figtree.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
