'use client'
import { useState } from 'react'
import { BefaringModal } from './BefaringModal'
import { trackEvent } from '@/lib/analytics'

interface Props {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export function BefaringCTA({ label = 'Gratis Befaring', className = 'btn btn-ghost', style }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={className} style={style} onClick={() => { trackEvent('befaring_cta_click', { label }); setOpen(true) }}>
        {label} <span className="arr">→</span>
      </button>
      <BefaringModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
