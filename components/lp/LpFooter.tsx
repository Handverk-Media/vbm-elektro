import Image from 'next/image'
import { IcPhoneOutline, IcMail, IcPin } from './LpIcons'

export function LpFooter() {
  return (
    <footer className="lp3-lp-footer">
      <div className="lp3-wrap lp3-lp-footer-inner">
        <a href="/" className="lp3-logo" aria-label="VBM Elektro AS">
          <Image src="/logo.svg" alt="VBM Elektro AS" width={130} height={52} className="lp3-logo-img" />
        </a>
        <div className="lp3-lp-footer-items">
          <a href="tel:90633118" className="lp3-lp-footer-item"><IcPhoneOutline size={17} />90 63 31 18</a>
          <a href="mailto:post@vbmelektro.no" className="lp3-lp-footer-item"><IcMail size={17} />post@vbmelektro.no</a>
          <span className="lp3-lp-footer-item"><IcPin size={17} />Drammen · Asker · Bærum · Lier · Øvre Eiker</span>
        </div>
      </div>
      <p className="lp3-footer-mini"><a href="/personvern">Personvern</a> · VBM Elektro AS</p>
    </footer>
  )
}
