const AW = process.env.NEXT_PUBLIC_GADS_ID // e.g. 'AW-123456789'

export function normalizePhoneNO(raw: string): string {
  const d = (raw || '').replace(/\D/g, '')
  if (d.length === 8) return '+47' + d
  if (d.startsWith('47') && d.length === 10) return '+' + d
  return d ? '+' + d : ''
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window.gtag as any)(...args)
}

export function trackEvent(name: string, params?: Record<string, string | number>) {
  gtag('event', name, params)
}

export function trackPhoneClick(location: string) {
  gtag('event', 'phone_click', { location })
  if (AW) gtag('event', 'conversion', { send_to: `${AW}/phone_click` })
}

export function trackBefaringSubmit(service?: string) {
  gtag('event', 'generate_lead', { form_name: 'befaring', service })
  if (AW) gtag('event', 'conversion', { send_to: `${AW}/befaring_skjema_sendt` })
}

export function trackLeadSubmit(formName: string) {
  gtag('event', 'generate_lead', { form_name: formName })
  if (AW) gtag('event', 'conversion', { send_to: `${AW}/befaring_skjema_sendt` })
}

// ── Landingssider (Google Ads) ──────────────────────────────────────────
// GA4-hendelser er frie å legge til. Ads-konvertering gjenbruker det ene
// verifiserte, virkende labelen (befaring_skjema_sendt) inntil egne
// konverteringshandlinger per landingsside er opprettet i Ads-kontoen.

export function trackLpPrimaryCta(page: string) {
  gtag('event', 'lp_primary_cta_click', { page })
}

export function trackLpFormStart(page: string) {
  gtag('event', 'lp_form_start', { page })
}

export function trackLpFileUpload(page: string, field: string) {
  gtag('event', 'lp_file_upload', { page, field })
}

export function trackLpLeadSubmit(page: string) {
  gtag('event', 'generate_lead', { form_name: page })
  gtag('event', 'lp_lead_submit', { page })
  if (AW) gtag('event', 'conversion', { send_to: `${AW}/befaring_skjema_sendt` })
}
