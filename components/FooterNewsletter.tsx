'use client'
import { useState } from 'react'

export function FooterNewsletter() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const epost = (e.currentTarget.elements.namedItem('epost') as HTMLInputElement).value

    try {
      const res = await fetch('/api/nyhetsbrev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ epost }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>Takk! Du er meldt på.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="epost" placeholder="din@epost.no" required />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sender …' : 'Meld deg på →'}
      </button>
      {status === 'error' && <p style={{ color: 'var(--red)', fontSize: 13 }}>Noe gikk galt.</p>}
    </form>
  )
}
