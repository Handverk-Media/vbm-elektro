const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
type UtmKey = typeof UTM_KEYS[number]
export type UtmParams = Partial<Record<UtmKey, string>>

export function captureUtms(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const found: UtmParams = {}
  for (const key of UTM_KEYS) {
    const val = params.get(key)
    if (val) found[key] = val
  }
  if (Object.keys(found).length > 0) {
    sessionStorage.setItem('vbm_utms', JSON.stringify(found))
  }
}

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(sessionStorage.getItem('vbm_utms') ?? '{}')
  } catch {
    return {}
  }
}
