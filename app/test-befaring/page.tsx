export const metadata = { robots: 'noindex' }

export default function TestBefaringPage() {
  return (
    <section style={{ minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ width: '100%', maxWidth: 640 }}>
        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8, textAlign: 'center' }}>Book gratis befaring</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: 32 }}>Test-side — GHL-skjema embed</p>
        <iframe
          src="https://ghl-landing-form.vibepreview.com"
          width="100%"
          height="700px"
          style={{ border: 'none', borderRadius: 12, overflow: 'hidden' }}
          scrolling="no"
        />
      </div>
    </section>
  )
}
