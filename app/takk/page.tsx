import Link from "next/link"
import Image from "next/image"

export default function TakkPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] flex flex-col">
      <header className="border-b border-[#EEEDE8] px-6 h-16 flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="VBM Elektro" width={120} height={48} />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 177 352" fill="currentColor" className="w-6 h-12 text-[#E1342B]">
              <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">Takk for bestillingen!</h1>
          <div className="w-10 h-[3px] bg-[#E1342B] mx-auto mb-6" />
          <p className="text-[#6B6B6B] leading-relaxed mb-8">
            Vi har mottatt bestillingen din og ringer deg tilbake innen 1 time for å bekrefte tidspunkt og endelig pris.
          </p>

          <div className="bg-[#EEEDE8] rounded-xl p-6 text-left mb-8 space-y-3">
            {[
              "Bekreftelse sendes på SMS",
              "Endelig pris avklares etter befaring",
              "Samsvarserklæring leveres etter arbeid",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E1342B] flex-shrink-0">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                {t}
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors text-sm font-medium"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
            </svg>
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  )
}
