"use client"

import type { ReactNode } from "react"
import type { ViewState } from "@/components/concept-explorer"

type SiteHeaderProps = {
  view: ViewState
  readCount: number
  totalCount: number
  theme: "light" | "dark"
  search: ReactNode
  onHome: () => void
  onNodesStep: () => void
  onBack: () => void
  onToggleTheme: () => void
}

export function SiteHeader({
  view,
  readCount,
  totalCount,
  theme,
  search,
  onHome,
  onNodesStep,
  onBack,
  onToggleTheme,
}: SiteHeaderProps) {
  const nodesClass = ["step-link", view === "nodes" && "active", view === "pillars" && "disabled"]
    .filter(Boolean)
    .join(" ")
  const cardClass = ["step-link", view === "card" ? "active" : "disabled"].join(" ")

  return (
    <header>
      <button type="button" className="brand" onClick={onHome} style={{ background: "none", border: "none", color: "inherit", textAlign: "left" }}>
          <svg
            className="brand-logo"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo Budismo Colombia"
          >
            <circle cx="14" cy="14" r="11.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1" />
            <line x1="14" y1="2.5" x2="14" y2="10" stroke="currentColor" strokeWidth="1" />
            <line x1="14" y1="18" x2="14" y2="25.5" stroke="currentColor" strokeWidth="1" />
            <line x1="2.5" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1" />
            <line x1="18" y1="14" x2="25.5" y2="14" stroke="currentColor" strokeWidth="1" />
            <line x1="5.87" y1="5.87" x2="11.17" y2="11.17" stroke="currentColor" strokeWidth="1" />
            <line x1="16.83" y1="16.83" x2="22.13" y2="22.13" stroke="currentColor" strokeWidth="1" />
            <line x1="22.13" y1="5.87" x2="16.83" y2="11.17" stroke="currentColor" strokeWidth="1" />
            <line x1="11.17" y1="16.83" x2="5.87" y2="22.13" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="brand-title">Budismo Colombia</span>
        <span className="brand-sub">/ Repositorio Conceptual</span>
      </button>

      {search}

      <div className="nav-controls">
        <nav className="step-indicator" aria-label="Navegación por pasos">
          <span className={`step-link ${view === "pillars" ? "active" : ""}`} onClick={onHome}>
            01. Ejes
          </span>
          <span aria-hidden="true">{"→"}</span>
          <span className={nodesClass} onClick={onNodesStep}>
            02. Nodos
          </span>
          <span aria-hidden="true">{"→"}</span>
          <span className={cardClass}>03. Ficha</span>
        </nav>

        <span className="progress-counter" title="Conceptos estudiados guardados en tu navegador">
          {`${readCount}/${totalCount} Leídos`}
        </span>

        {view !== "pillars" && (
          <button type="button" className="btn-minimal" onClick={onBack}>
            {"← Volver"}
          </button>
        )}
        <button type="button" className="btn-minimal" onClick={onToggleTheme}>
          {theme === "dark" ? "Modo: Oscuro" : "Modo: Claro"}
        </button>
      </div>
    </header>
  )
}
