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
