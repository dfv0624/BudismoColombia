"use client"

import { useEffect, useRef, useState } from "react"

const CONTACT_EMAIL = "dfv.0624@hotmail.com"
const CONTACT_LOCATION = "Cali, Colombia"

type ContactPanelProps = {
  open: boolean
  onClose: () => void
}

export function ContactPanel({ open, onClose }: ContactPanelProps) {
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
          <span className="contact-label">{"Contacto"}</span>
          <button type="button" className="btn-minimal" onClick={onClose}>
            {"Cerrar ×"}
          </button>
        </div>

        <h2 id="contact-title" className="contact-title">
          {"Conversemos"}
        </h2>
        <p className="contact-text">
          {"Si tienes preguntas sobre algún concepto, quieres proponer un tema o colaborar con el repositorio, escríbeme."}
        </p>

        <dl className="contact-list">
          <div className="contact-row">
            <dt>{"Correo"}</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                {CONTACT_EMAIL}
              </a>
              <button type="button" className="contact-copy" onClick={copyEmail}>
                {copied ? "Copiado" : "Copiar"}
              </button>
            </dd>
          </div>
          <div className="contact-row">
            <dt>{"Ubicación"}</dt>
            <dd>{CONTACT_LOCATION}</dd>
          </div>
        </dl>

        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-minimal contact-cta">
          {"Escribir correo →"}
        </a>

        <span className="sr-only" aria-live="polite">
          {copied ? "Correo copiado al portapapeles" : ""}
        </span>
      </div>
    </dialog>
  )
}
