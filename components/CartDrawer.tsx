"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"

export function CartDrawer() {
  const { items, fjern, total, åpen, setÅpen } = useCart()

  if (!åpen) return null

  return (
    <>
      <div className="cart-backdrop" onClick={() => setÅpen(false)} />
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Handlekurv</h2>
          <button className="cart-close" onClick={() => setÅpen(false)} aria-label="Lukk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 177 352" fill="currentColor">
                <polygon points="148.63,0.48 103.24,139.95 177.14,139.95 27.66,351.9 72.66,194.79 0,194.79 36.62,0.48" />
              </svg>
              <p>Handlekurven er tom</p>
            </div>
          ) : (
            <ul className="cart-items">
              {items.map(({ tjeneste, antall }) => (
                <li key={tjeneste.id} className="cart-item">
                  <div className="cart-item-info">
                    <p className="cart-item-name">{tjeneste.navn}</p>
                    <p className="cart-item-unit">{tjeneste.enhet}</p>
                    {antall > 1 && <p className="cart-item-qty">{antall} stk</p>}
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-price">kr {(tjeneste.pris * antall).toLocaleString("nb-NO")}</span>
                    <button className="cart-item-remove" onClick={() => fjern(tjeneste.id)} aria-label="Fjern">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="cart-subtotal-lbl">Delsum</span>
              <span className="cart-subtotal-amt">kr {total.toLocaleString("nb-NO")}</span>
            </div>
            <p className="cart-fine">Inkl. mva. Endelig pris avklares etter befaring.</p>
            <Link href="/bestill" onClick={() => setÅpen(false)} className="cart-checkout">
              Gå til betaling
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
