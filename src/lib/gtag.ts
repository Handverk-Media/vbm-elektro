export const GA4_ID = 'G-NCM4D5K2XN'

export function normalizePhoneNO(raw: string): string {
  return '+47' + raw.replace(/\D/g, '').replace(/^47/, '').replace(/^0/, '')
}
