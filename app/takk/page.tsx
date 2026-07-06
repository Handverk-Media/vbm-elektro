import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Takk – VBM Elektro",
  robots: { index: false, follow: false },
}

export default function TakkPage() {
  return (
    <div className="takk-page">
      <header className="takk-header">
        <Link href="/">
          <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} />
        </Link>
      </header>

      <div className="takk-body">
        <div className="takk-box">
          <div className="takk-icon">
            <svg viewBox="0 0 177 352" fill="currentColor">
              <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
            </svg>
          </div>

          <h1>Takk for bestillingen!</h1>
          <div className="takk-line" />
          <p>Vi har mottatt bestillingen din og ringer deg tilbake innen 1 time for å bekrefte tidspunkt og endelig pris.</p>

          <div className="takk-checks">
            {[
              "Bekreftelse sendes på SMS",
              "Endelig pris avklares etter befaring",
              "Samsvarserklæring leveres etter arbeid",
            ].map((t) => (
              <div key={t} className="takk-check">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                {t}
              </div>
            ))}
          </div>

          <Link href="/" className="takk-back">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  )
}
