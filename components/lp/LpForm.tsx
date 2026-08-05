'use client'
import { useRef, useState } from 'react'
import { getUtmParams } from '@/lib/utm'
import { getStoredGclid } from '@/hooks/useGclid'
import { trackLpFormStart, trackLpFileUpload, trackLpLeadSubmit } from '@/lib/analytics'

export type LpField =
  | { kind: 'text' | 'tel' | 'email'; name: string; label: string; placeholder?: string; required?: boolean }
  | { kind: 'select'; name: string; label: string; options: string[]; required?: boolean }
  | { kind: 'textarea'; name: string; label: string; placeholder?: string; required?: boolean; rows?: number }
  | { kind: 'file'; name: string; label: string; hint?: string; multiple?: boolean }
  | { kind: 'radio'; name: string; label: string; options: string[] }

interface Props {
  page: string
  idPrefix: string
  rows: LpField[][]
  submitLabel: string
  onSent?: () => void
}

function Field({ f, id, onFileChange }: { f: LpField; id: string; onFileChange: (name: string) => void }) {
  if (f.kind === 'file') {
    return (
      <div className="lp3-field-file">
        <label htmlFor={id}>{f.label}</label>
        <input id={id} name={f.name} type="file" accept="image/*" multiple={f.multiple} onChange={() => onFileChange(f.name)} />
        {f.hint && <span className="lp3-field-hint">{f.hint}</span>}
      </div>
    )
  }
  if (f.kind === 'select') {
    return (
      <div className="lp3-field">
        <label htmlFor={id}>{f.label}</label>
        <select id={id} name={f.name} required={f.required}>
          <option value="">Velg …</option>
          {f.options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    )
  }
  if (f.kind === 'radio') {
    return (
      <div className="lp3-field">
        <label>{f.label}</label>
        <div className="lp3-radio-row">
          {f.options.map(o => (
            <label key={o}>
              <input type="radio" name={f.name} value={o} />
              {o}
            </label>
          ))}
        </div>
      </div>
    )
  }
  if (f.kind === 'textarea') {
    return (
      <div className="lp3-field">
        <label htmlFor={id}>{f.label}</label>
        <textarea id={id} name={f.name} rows={f.rows ?? 4} placeholder={f.placeholder} required={f.required} />
      </div>
    )
  }
  return (
    <div className="lp3-field">
      <label htmlFor={id}>{f.label}</label>
      <input id={id} name={f.name} type={f.kind} placeholder={f.placeholder} required={f.required} />
    </div>
  )
}

export function LpForm({ page, idPrefix, rows, submitLabel, onSent }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const started = useRef(false)

  function markStarted() {
    if (started.current) return
    started.current = true
    trackLpFormStart(page)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    fd.set('landingsside', page)
    fd.set('gclid', getStoredGclid())
    fd.set('referrer', typeof document !== 'undefined' ? document.referrer : '')
    const utms = getUtmParams()
    Object.entries(utms).forEach(([k, v]) => { if (v) fd.set(k, v) })

    try {
      const res = await fetch('/api/lp-lead', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Nettverksfeil')
      trackLpLeadSubmit(page)
      setStatus('sent')
      onSent?.()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="lp3-form-success">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6L9 17l-5-5" /></svg>
        <h3>Takk — vi har mottatt henvendelsen</h3>
        <p>Vi ringer deg tilbake innen 1 time i normal arbeidstid. Har du sendt bilder, vurderer vi dem før vi ringer.</p>
      </div>
    )
  }

  return (
    <form className="lp3-form" onSubmit={handleSubmit} onFocus={markStarted}>
      {rows.map((row, i) => (
        <div key={i} className={row.length > 1 ? 'lp3-form-row' : undefined}>
          {row.map(f => <Field key={f.name} f={f} id={`${idPrefix}${f.name}`} onFileChange={name => trackLpFileUpload(page, name)} />)}
        </div>
      ))}

      <label className="lp3-checkbox">
        <input type="checkbox" required />
        <span>Jeg godtar <a href="/personvern">personvernerklæringen</a> og at VBM Elektro kan kontakte meg angående denne henvendelsen.</span>
      </label>

      <button type="submit" className="lp3-btn lp3-btn-primary lp3-btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sender …' : submitLabel}
      </button>
      <p className="lp3-form-fine">Vi ringer deg tilbake innen 1 time i normal arbeidstid.</p>
      {status === 'error' && <p className="lp3-form-error">Noe gikk galt. Ring oss på 90 63 31 18.</p>}
    </form>
  )
}
