'use client'
import { useState } from 'react'
import { TilbudModal } from './TilbudModal'
import { trackEvent } from '@/lib/analytics'

interface Props {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export function TilbudCTA({ label = 'Be om tilbud', className = 'btn btn-red', style }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={className} style={style} onClick={() => { trackEvent('tilbud_cta_click', { label }); setOpen(true) }}>
        {label} <span className="arr">→</span>
      </button>
      <TilbudModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
