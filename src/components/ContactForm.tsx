"use client"

import { useState } from "react"
import { Phone, Send } from "lucide-react"
import { VBM } from "@/lib/vbm"
import { normalizePhoneNO } from "@/lib/gtag"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  // Push user_data on blur so it's in dataLayer before GTM fires generate_lead on submit
  function handleUserDataBlur(e: React.FocusEvent<HTMLInputElement>) {
    const form = e.currentTarget.form
    if (!form) return
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim().toLowerCase() ?? ''
    const rawPhone = (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim() ?? ''
    const userData: Record<string, string> = {}
    if (email) userData.email = email
    if (rawPhone) userData.phone_number = normalizePhoneNO(rawPhone)
    if (Object.keys(userData).length) window.gtag?.('set', 'user_data', userData)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim().toLowerCase()
    const rawPhone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const phone = normalizePhoneNO(rawPhone)

    // Ensure user_data is set (covers cases where blur didn't fire)
    window.gtag?.('set', 'user_data', { email, phone_number: phone })
    window.gtag?.('event', 'generate_lead')

    setSent(true)
  }

  return (
    <section id="kontakt" className="bg-mist section-pad">
      <div className="container-vbm">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          <div>
            <p className="type-eyebrow text-brand mb-3">Ta kontakt</p>
            <h2 className="type-section text-coal mb-6">
              Vi svarer<br />samme dag.
            </h2>
            <p className="text-body text-steel leading-relaxed mb-8 max-w-sm">
              Fyll ut skjemaet og vi kontakter deg innen én time i arbeidstiden. Foretrekker du telefon? Ring direkte.
            </p>

            <a href={VBM.phoneHref} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand/90 transition-colors">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="type-label text-ghost">Ring oss</div>
                <div className="type-pillar text-coal group-hover:text-brand transition-colors">{VBM.phone}</div>
              </div>
            </a>

            <div className="mt-10 pt-10 border-t border-surface">
              <p className="text-caption text-ghost leading-relaxed">
                <span className="font-semibold text-steel">Åpningstider:</span> Man–fre 07:00–15:00<br />
                Vi tar kontakt innen én time i arbeidstiden.
              </p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-coal p-10 h-full flex flex-col items-center justify-center text-center gap-4">
                <p className="type-section text-brand">Sendt!</p>
                <p className="text-steel text-body">Takk! Vi tar kontakt innen én time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {[
                  { id: "name", label: "Navn", type: "text", autocomplete: "name", placeholder: "Ditt navn", ecBlur: false },
                  { id: "email", label: "E-post", type: "email", autocomplete: "email", placeholder: "din@epost.no", ecBlur: true },
                  { id: "phone", label: "Telefon", type: "tel", autocomplete: "tel", placeholder: "Ditt telefonnummer", ecBlur: true },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="type-label text-ghost block mb-2">{f.label}</label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required
                      autoComplete={f.autocomplete}
                      placeholder={f.placeholder}
                      onBlur={f.ecBlur ? handleUserDataBlur : undefined}
                      className="w-full border border-border bg-white px-4 py-3 text-body text-coal placeholder-ghost rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="type-label text-ghost block mb-2">Hva gjelder det?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Beskriv kort hva du trenger hjelp med…"
                    className="w-full border border-border bg-white px-4 py-3 text-body text-coal placeholder-ghost rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand text-white font-semibold py-4 rounded-md text-body-sm hover:bg-brand/90 transition-colors mt-1"
                >
                  <Send className="w-4 h-4" />
                  Send forespørsel
                </button>
                <p className="text-caption text-ghost text-center">Vi svarer innen én time i arbeidstiden</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
