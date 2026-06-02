'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const KEY = 'vbm_gclid'

export function useGclid() {
  const params = useSearchParams()
  useEffect(() => {
    const gclid = params.get('gclid')
    if (gclid) localStorage.setItem(KEY, gclid)
  }, [params])
}

export function getStoredGclid(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(KEY) ?? ''
}
