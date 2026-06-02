'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? ''

    try {
      const res = await fetch('/api/befaring-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          navn: get('navn'),
          telefon: get('telefon'),
          epost: get('epost'),
          adresse: get('adresse'),
          tjeneste: get('kategori'),
          melding: get('melding'),
        }),
      })
      if (res.ok) { trackEvent("generate_lead", { form_name: "kontaktskjema" }); setStatus('sent') } else { setStatus('error') }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form" style={{ alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
        <p style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 600, textAlign: 'center' }}>Takk!</p>
        <p style={{ color: 'var(--text-soft)', textAlign: 'center', marginTop: 8 }}>Vi tar kontakt innen 1 time i normal arbeidstid.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="navn">Navn</label>
          <input type="text" id="navn" name="navn" placeholder="Ola Nordmann" required />
        </div>
        <div className="form-field">
          <label htmlFor="telefon">Telefon</label>
          <input type="tel" id="telefon" name="telefon" placeholder="900 00 000" required />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" name="epost" placeholder="ola@example.com" required />
      </div>

      <div className="form-field">
        <label htmlFor="adresse">Adresse</label>
        <input type="text" id="adresse" name="adresse" placeholder="Gateadresse, postnummer" required />
      </div>

      <div className="form-field">
        <label htmlFor="kategori">Hva gjelder oppdraget?</label>
        <select id="kategori" name="kategori" required>
          <option value="">Velg kategori …</option>
          <option>Elbillader</option>
          <option>Serviceoppdrag</option>
          <option>Sikringsskap</option>
          <option>Renovering (bad, kjøkken)</option>
          <option>Smarthus</option>
          <option>Feilsøking</option>
          <option>Næring / rehab-prosjekt</option>
          <option>Annet</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="melding">
          Mer informasjon <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>(valgfritt)</span>
        </label>
        <textarea id="melding" name="melding" rows={4} placeholder="Beskriv kort hva du trenger …" />
      </div>

      <label className="form-check">
        <input type="checkbox" required />
        <span>
          Jeg godtar{' '}
          <a href="/personvern">personvernerklæringen</a> og at VBM Elektro kan kontakte meg angående denne henvendelsen.
        </span>
      </label>

      <button type="submit" className="btn btn-red form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sender …' : 'Få rask avklaring'} <span className="arr">→</span>
      </button>
      <p className="form-fine">Vi ringer deg tilbake innen 1 time i normal arbeidstid.</p>

      {status === 'error' && (
        <p style={{ color: 'var(--red)', textAlign: 'center', fontSize: 14 }}>Noe gikk galt. Ring oss på 90 63 31 18.</p>
      )}
    </form>
  )
}
