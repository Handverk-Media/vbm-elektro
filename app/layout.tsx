import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Providers } from "@/components/Providers"
import { CartDrawer } from "@/components/CartDrawer"
import { CookieConsent } from "@/components/CookieConsent"
import { UtmCapture } from "@/components/UtmCapture"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
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
  twitter: {
    card: "summary_large_image",
    title: "VBM Elektro AS – Autorisert elektriker i Bærum, Oslo og Asker",
    description: "Elbillader, renovering, smarthus og service. NELFO-godkjent. Fast pris. Ring 90 63 31 18.",
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
  geo: { "@type": "GeoCoordinates", latitude: 59.9, longitude: 10.48 },
  areaServed: ["Bærum", "Oslo", "Asker", "Sandvika", "Billingstad", "Lysaker", "Fornebu", "Høvik", "Nesbru"],
  openingHours: "Mo-Fr 07:00-16:00",
  priceRange: "kr kr",
  description: "Autorisert elektriker i Bærum og Oslo. Elbillader, renovering, smarthus og serviceoppdrag.",
  sameAs: [],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Hva koster en elbillader-installasjon hos dere?", acceptedAnswer: { "@type": "Answer", text: "Standard installasjon starter på kr 12 490. Det inkluderer kabling fra sikringsskap, nødvendig vern, dokumentasjon og idriftsettelse." } },
    { "@type": "Question", name: "Hvor raskt kan dere komme?", acceptedAnswer: { "@type": "Answer", text: "Vanlige serviceoppdrag og elbillader: 1–5 dager. Akutte feil prioriteres — ring 90 63 31 18." } },
    { "@type": "Question", name: "Hva hvis jobben blir større enn dere trodde?", acceptedAnswer: { "@type": "Answer", text: "Du hører fra oss før det skjer. Tillegg avklares alltid med deg før vi går videre." } },
    { "@type": "Question", name: "Er dere NELFO-godkjent og autorisert?", acceptedAnswer: { "@type": "Answer", text: "Ja. Vi er registrert i Elvirksomhetsregisteret hos DSB og NELFO-medlem." } },
    { "@type": "Question", name: "Kan jeg betale med Vipps?", acceptedAnswer: { "@type": "Answer", text: "Ja, vi tar Vipps for mindre serviceoppdrag. Større prosjekter faktureres med vanlig betalingsfrist." } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        <Providers>
          {children}
          <CartDrawer />
          <CookieConsent />
          <UtmCapture />
        </Providers>
        <Script id="gtag-consent-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
          var consent = localStorage.getItem('cookie-consent');
          if (consent === 'all') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            });
          }
          gtag('js', new Date());
          gtag('config', 'G-NCM4D5K2XN', { send_page_view: true });
          ${process.env.NEXT_PUBLIC_GADS_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GADS_ID}');` : ''}
        `}</Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-NCM4D5K2XN`}
          strategy="afterInteractive"
        />
        <Script id="meta-pixel-init" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('consent', 'revoke');
          fbq('init', '1307585811530562');
          if (localStorage.getItem('cookie-consent') === 'all') {
            fbq('consent', 'grant');
          }
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1307585811530562&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
