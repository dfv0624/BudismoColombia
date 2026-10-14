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
