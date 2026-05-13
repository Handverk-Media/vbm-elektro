import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Les om hvordan VBM Elektro AS behandler personopplysninger i henhold til GDPR.",
}

export default function PersonvernPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-10"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
          </svg>
          Tilbake til forsiden
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-3">
          Personvernerklæring
        </h1>
        <p className="text-[#6B6B6B] mb-12">Sist oppdatert: mai 2026</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-[#1A1A1A]">

          <section>
            <h2 className="text-xl font-bold mb-3">1. Behandlingsansvarlig</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              {BEDRIFT.navn}<br />
              Org.nr: {BEDRIFT.orgnr}<br />
              {BEDRIFT.adresse}<br />
              E-post: <a href={`mailto:${BEDRIFT.epost}`} className="text-[#E1342B] hover:underline">{BEDRIFT.epost}</a><br />
              Telefon: {BEDRIFT.telefon}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Hvilke opplysninger samler vi inn?</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">
              Vi samler inn følgende personopplysninger når du tar kontakt med oss eller bruker nettsiden:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B6B] space-y-1.5">
              <li>Navn og kontaktinformasjon (telefon, e-post)</li>
              <li>Adresse dersom du bestiller arbeid</li>
              <li>Beskrivelse av oppdrag og behov</li>
              <li>Betalingsinformasjon ved fakturering (behandles av tredjepart)</li>
              <li>Tekniske data som IP-adresse og nettlesertype (via analyseverktøy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Formål og rettslig grunnlag</h2>
            <div className="text-[#6B6B6B] leading-relaxed space-y-3">
              <p>Vi behandler personopplysninger til følgende formål:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-[#1A1A1A]">Kontraktsoppfyllelse</strong> – for å levere de elektriske tjenestene du har bestilt (GDPR art. 6 b)</li>
                <li><strong className="text-[#1A1A1A]">Berettiget interesse</strong> – besvare henvendelser, tilby tilbud og ivareta kundeforhold (GDPR art. 6 f)</li>
                <li><strong className="text-[#1A1A1A]">Rettslig forpliktelse</strong> – dokumentasjon og samsvarserklæringer pålagt ved lov (GDPR art. 6 c)</li>
                <li><strong className="text-[#1A1A1A]">Samtykke</strong> – nyhetsbrev og markedsføring, kun ved eksplisitt samtykke (GDPR art. 6 a)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Lagring og sletting</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Vi lagrer opplysninger så lenge det er nødvendig for formålet. Kundedata knyttet til utført
              arbeid lagres i 5 år i henhold til bokføringsloven. Data du har gitt samtykke til slettes
              på forespørsel. E-poster og henvendelser slettes etter 2 år dersom de ikke har tilknytning
              til pågående oppdrag.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Deling med tredjeparter</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">
              Vi deler ikke personopplysninger med tredjeparter uten hjemmel. Vi benytter følgende
              leverandører som kan behandle data på våre vegne:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B6B] space-y-1.5">
              <li>Vipps AS – betalingsbehandling</li>
              <li>Google LLC – analyseverktøy (Google Analytics, anonymisert)</li>
              <li>Vercel Inc. – nettsidehosting</li>
            </ul>
            <p className="text-[#6B6B6B] leading-relaxed mt-3">
              Alle leverandører er bundet av databehandleravtaler i samsvar med GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Dine rettigheter</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">
              Etter GDPR har du følgende rettigheter:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B6B] space-y-1.5">
              <li><strong className="text-[#1A1A1A]">Innsyn</strong> – du kan be om en kopi av opplysningene vi har om deg</li>
              <li><strong className="text-[#1A1A1A]">Retting</strong> – du kan kreve at feilaktige opplysninger korrigeres</li>
              <li><strong className="text-[#1A1A1A]">Sletting</strong> – du kan be om at opplysninger slettes («retten til å bli glemt»)</li>
              <li><strong className="text-[#1A1A1A]">Begrensning</strong> – du kan be om begrenset behandling</li>
              <li><strong className="text-[#1A1A1A]">Dataportabilitet</strong> – du kan be om å få dine data i maskinlesbart format</li>
              <li><strong className="text-[#1A1A1A]">Innsigelse</strong> – du kan protestere mot behandling basert på berettiget interesse</li>
              <li><strong className="text-[#1A1A1A]">Trekk samtykke</strong> – samtykke kan trekkes tilbake når som helst</li>
            </ul>
            <p className="text-[#6B6B6B] leading-relaxed mt-4">
              Send forespørsel til{" "}
              <a href={`mailto:${BEDRIFT.epost}`} className="text-[#E1342B] hover:underline">{BEDRIFT.epost}</a>.
              Vi svarer innen 30 dager. Du kan også klage til{" "}
              <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-[#E1342B] hover:underline">
                Datatilsynet
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Informasjonskapsler (cookies)</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Nettsiden benytter teknisk nødvendige cookies for å fungere. Vi bruker Google Analytics
              med anonymiserte IP-adresser for å forstå besøksmønstre. Du kan til enhver tid slette
              cookies i nettleserinnstillingene dine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Kontakt</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Spørsmål om personvern rettes til:{" "}
              <a href={`mailto:${BEDRIFT.epost}`} className="text-[#E1342B] hover:underline">{BEDRIFT.epost}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
