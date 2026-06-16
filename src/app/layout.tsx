import type { Metadata } from "next"
import { Barlow_Condensed, Figtree } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { VBM } from "@/lib/vbm"
import { GA4_ID } from "@/lib/gtag"
import { CookieConsent } from "@/components/CookieConsent"

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
        {/* Consent Mode v2 — defaults must be set before gtag.js loads */}
        <script dangerouslySetInnerHTML={{ __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500
});
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">{`
gtag('js',new Date());
gtag('config','${GA4_ID}');
        `}</Script>
      </body>
    </html>
  )
}
