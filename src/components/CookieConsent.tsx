'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie_consent'

function updateConsent(state: 'granted' | 'denied') {
  window.gtag?.('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  })
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') {
      updateConsent('granted')
    } else if (!stored) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    updateConsent('granted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-coal text-white px-6 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between shadow-lg">
      <p className="text-sm text-steel text-center sm:text-left max-w-xl">
        Vi bruker informasjonskapsler for å måle trafikk og markedsføring. Les vår{' '}
        <a href="/personvern" className="underline hover:text-white transition-colors">
          personvernerklæring
        </a>
        .
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="text-ghost text-sm hover:text-white transition-colors"
        >
          Kun nødvendige
        </button>
        <button
          onClick={accept}
          className="bg-brand text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-brand/90 transition-colors"
        >
          Godta alle
        </button>
      </div>
    </div>
  )
}
