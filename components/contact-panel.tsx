"use client"

import { useEffect, useRef, useState } from "react"
import type { UiStrings } from "@/lib/i18n"

const CONTACT_EMAIL = "dfv.0624@hotmail.com"
const CONTACT_LOCATION = "Cali, Colombia"
const DONATE_URL =
  "https://www.paypal.com/donate/?business=FYVXB644UKLKC&no_recurring=0&item_name=Repositorio+gratuito+para+estudiar+budismo+en+espa%C3%B1ol%2C+sin+publicidad.+Tu+aporte+mantiene+el+sitio+en+l%C3%ADnea+y+en+crecimiento.&currency_code=USD"

type ContactPanelProps = {
  t: UiStrings
  open: boolean
  onClose: () => void
}

export function ContactPanel({ t, open, onClose }: ContactPanelProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-panel"
      aria-labelledby="contact-title"
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      // Keeps the explorer's global shortcuts (Esc = volver, flechas, "/") from firing while the panel is open.
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="contact-inner">
        <div className="contact-top">
          <span className="contact-label">{t.contact}</span>
          <button type="button" className="btn-minimal" onClick={onClose}>
            {t.contactClose}
          </button>
        </div>

        <h2 id="contact-title" className="contact-title">
          {t.contactTitle}
        </h2>
        <p className="contact-text">{t.contactText}</p>

        <dl className="contact-list">
          <div className="contact-row">
            <dt>{t.contactEmail}</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                {CONTACT_EMAIL}
              </a>
              <button type="button" className="contact-copy" onClick={copyEmail}>
                {copied ? t.contactCopied : t.contactCopy}
              </button>
            </dd>
          </div>
          <div className="contact-row">
            <dt>{t.contactLocation}</dt>
            <dd>{CONTACT_LOCATION}</dd>
          </div>
        </dl>

        <section className="contact-donate" aria-labelledby="donate-title">
          <span id="donate-title" className="contact-label">
            {t.donateTitle}
          </span>
          <p className="contact-text">{t.donateText}</p>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal contact-donate-link"
          >
            {t.donateButton}
            <span className="sr-only">{t.newTab}</span>
          </a>
        </section>

        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-minimal contact-cta">
          {t.writeEmail}
        </a>

        <span className="sr-only" aria-live="polite">
          {copied ? t.contactCopiedLive : ""}
        </span>
      </div>
    </dialog>
  )
}
