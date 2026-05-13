import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Providers } from "@/components/Providers"
import { CartDrawer } from "@/components/CartDrawer"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const siteUrl = "https://vbmelektro.no"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VBM Elektro AS – Autorisert elektriker i Bærum, Oslo og Asker",
    template: "%s | VBM Elektro AS",
  },
  description:
    "Autorisert elektriker i Bærum, Oslo og Asker. Elbillader (Zaptec, Easee), renovering, smarthus og serviceoppdrag. NELFO-godkjent, fast pris og tilbakering innen 1 time. Ring 90 63 31 18.",
  keywords: [
    "elektriker Bærum", "elektriker Oslo", "elektriker Asker", "elbillader installasjon",
    "NELFO elektriker", "el-anlegg Bærum", "smarthus elektriker", "elbillader Bærum",
    "autorisert elektriker", "elkontroll bolig", "elektriker Billingstad", "elektriker Sandvika",
    "elektriker Lysaker", "elektriker Fornebu", "elbillader Asker",
  ],
  openGraph: {
    title: "VBM Elektro AS – Autorisert elektriker i Bærum, Oslo og Asker",
    description: "Elbillader, renovering, smarthus og service. NELFO-godkjent. Fast pris. Ring 90 63 31 18.",
    locale: "nb_NO",
    type: "website",
    url: siteUrl,
    siteName: "VBM Elektro AS",
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "VBM Elektro AS",
  url: siteUrl,
  telephone: "+4790633118",
  email: "Benjamin@vbmelektro.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Billingstadletta 22",
    postalCode: "1396",
    addressLocality: "Billingstad",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.9,
    longitude: 10.48,
  },
  areaServed: ["Bærum", "Oslo", "Asker", "Sandvika", "Billingstad", "Lysaker", "Fornebu", "Høvik", "Nesbru"],
  openingHours: "Mo-Fr 07:00-16:00",
  priceRange: "kr kr",
  description: "Autorisert elektriker i Bærum og Oslo. Elbillader, renovering, smarthus og serviceoppdrag.",
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <CartDrawer />
        </Providers>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a04e119c3c81a645b7fbf48"
          strategy="afterInteractive"
        />
        <Script id="chat-widget-mobile-fix" strategy="afterInteractive">{`
          (function() {
            function fix() {
              if (window.innerWidth >= 768) return;
              document.querySelectorAll('[id*="chat"],[class*="chat"],[id*="widget"],[class*="widget-btn"],[class*="lc-"]').forEach(function(el) {
                var s = window.getComputedStyle(el);
                if (s.position === 'fixed' && parseInt(s.bottom) < 80) {
                  el.style.setProperty('bottom','72px','important');
                }
              });
            }
            new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});
            window.addEventListener('resize', fix);
          })();
        `}</Script>
      </body>
    </html>
  )
}
