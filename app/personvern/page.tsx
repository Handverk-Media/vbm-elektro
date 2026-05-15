import type { Metadata } from "next"
import Link from "next/link"
import { BEDRIFT } from "@/data/bedrift"

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Les om hvordan VBM Elektro AS behandler personopplysninger i henhold til GDPR.",
}

export default function PersonvernPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div className="prose-page">
        <Link href="/" className="prose-back">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" />
          </svg>
          Tilbake til forsiden
        </Link>

        <h1>Personvernerklæring</h1>
        <p className="prose-meta">Sist oppdatert: mai 2026</p>

        <div className="prose-section">
          <h2>1. Behandlingsansvarlig</h2>
          <p>
            {BEDRIFT.navn}<br />
            Org.nr: {BEDRIFT.orgnr}<br />
            {BEDRIFT.adresse}<br />
            E-post: <a href={`mailto:${BEDRIFT.epost}`}>{BEDRIFT.epost}</a><br />
            Telefon: {BEDRIFT.telefon}
          </p>
        </div>

        <div className="prose-section">
          <h2>2. Hvilke opplysninger samler vi inn?</h2>
          <p>Vi samler inn følgende personopplysninger når du tar kontakt med oss eller bruker nettsiden:</p>
          <ul>
            <li>Navn og kontaktinformasjon (telefon, e-post)</li>
            <li>Adresse dersom du bestiller arbeid</li>
            <li>Beskrivelse av oppdrag og behov</li>
            <li>Betalingsinformasjon ved fakturering (behandles av tredjepart)</li>
            <li>Tekniske data som IP-adresse og nettlesertype (via analyseverktøy)</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>3. Formål og rettslig grunnlag</h2>
          <p>Vi behandler personopplysninger til følgende formål:</p>
          <ul>
            <li><strong>Kontraktsoppfyllelse</strong> – for å levere de elektriske tjenestene du har bestilt (GDPR art. 6 b)</li>
            <li><strong>Berettiget interesse</strong> – besvare henvendelser, tilby tilbud og ivareta kundeforhold (GDPR art. 6 f)</li>
            <li><strong>Rettslig forpliktelse</strong> – dokumentasjon og samsvarserklæringer pålagt ved lov (GDPR art. 6 c)</li>
            <li><strong>Samtykke</strong> – nyhetsbrev og markedsføring, kun ved eksplisitt samtykke (GDPR art. 6 a)</li>
          </ul>
        </div>

        <div className="prose-section">
          <h2>4. Lagring og sletting</h2>
          <p>
            Vi lagrer opplysninger så lenge det er nødvendig for formålet. Kundedata knyttet til utført
            arbeid lagres i 5 år i henhold til bokføringsloven. Data du har gitt samtykke til slettes
            på forespørsel. E-poster og henvendelser slettes etter 2 år dersom de ikke har tilknytning
            til pågående oppdrag.
          </p>
        </div>

        <div className="prose-section">
          <h2>5. Deling med tredjeparter</h2>
          <p>Vi deler ikke personopplysninger med tredjeparter uten hjemmel. Vi benytter følgende leverandører som kan behandle data på våre vegne:</p>
          <ul>
            <li>Vipps AS – betalingsbehandling</li>
            <li>Google LLC – analyseverktøy (Google Analytics, anonymisert)</li>
            <li>Vercel Inc. – nettsidehosting</li>
          </ul>
          <p>Alle leverandører er bundet av databehandleravtaler i samsvar med GDPR.</p>
        </div>

        <div className="prose-section">
          <h2>6. Dine rettigheter</h2>
          <p>Etter GDPR har du følgende rettigheter:</p>
          <ul>
            <li><strong>Innsyn</strong> – du kan be om en kopi av opplysningene vi har om deg</li>
            <li><strong>Retting</strong> – du kan kreve at feilaktige opplysninger korrigeres</li>
            <li><strong>Sletting</strong> – du kan be om at opplysninger slettes («retten til å bli glemt»)</li>
            <li><strong>Begrensning</strong> – du kan be om begrenset behandling</li>
            <li><strong>Dataportabilitet</strong> – du kan be om å få dine data i maskinlesbart format</li>
            <li><strong>Innsigelse</strong> – du kan protestere mot behandling basert på berettiget interesse</li>
            <li><strong>Trekk samtykke</strong> – samtykke kan trekkes tilbake når som helst</li>
          </ul>
          <p>
            Send forespørsel til <a href={`mailto:${BEDRIFT.epost}`}>{BEDRIFT.epost}</a>.
            Vi svarer innen 30 dager. Du kan også klage til{" "}
            <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">Datatilsynet</a>.
          </p>
        </div>

        <div className="prose-section">
          <h2>7. Informasjonskapsler (cookies)</h2>
          <p>
            Nettsiden benytter teknisk nødvendige cookies for å fungere. Vi bruker Google Analytics
            med anonymiserte IP-adresser for å forstå besøksmønstre. Du kan til enhver tid slette
            cookies i nettleserinnstillingene dine.
          </p>
        </div>

        <div className="prose-section">
          <h2>8. Kontakt</h2>
          <p>
            Spørsmål om personvern rettes til:{" "}
            <a href={`mailto:${BEDRIFT.epost}`}>{BEDRIFT.epost}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
