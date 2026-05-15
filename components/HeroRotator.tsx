'use client'
import { useEffect, useRef } from 'react'

const words = [
  'som svarer.',
  'som holder pris.',
  'som møter opp.',
  'som holder avtaler.',
  'som leverer dokumentasjon.',
]

export function HeroRotator() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let index = 0
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease'

    const cycle = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(8px)'
      setTimeout(() => {
        index = (index + 1) % words.length
        const w = words[index]
        const base = w.endsWith('.') ? w.slice(0, -1) : w
        el.innerHTML = `${base}<span class="punct">.</span>`
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300)
    }

    const id = setInterval(cycle, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="swap-word" ref={ref}>
      som svarer<span className="punct">.</span>
    </span>
  )
}
