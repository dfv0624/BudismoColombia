"use client"

import { useEffect, useRef, useState } from "react"
import type { Pillar } from "@/lib/repository"

type NodesStageProps = {
  pillar: Pillar | null
  activeNodeId: string | null
  readNodes: Set<string>
  onSelect: (nodeId: string) => void
}

export function NodesStage({ pillar, activeNodeId, readNodes, onSelect }: NodesStageProps) {
  const [revealed, setRevealed] = useState(0)
  const nodeRefs = useRef(new Map<string, HTMLElement>())

  useEffect(() => {
    setRevealed(0)
    if (!pillar) return
    const timers = pillar.nodes.map((_, idx) => setTimeout(() => setRevealed(idx + 1), 45 * (idx + 1)))
    return () => timers.forEach(clearTimeout)
  }, [pillar])

  useEffect(() => {
    if (activeNodeId) {
      nodeRefs.current.get(activeNodeId)?.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [activeNodeId])

  return (
    <section className="nodes-stage" id="nodesStage">
      <div className="stage-header">
        <span className="stage-label">{pillar ? `Eje ${pillar.num} — ${pillar.title}` : "Nodos del Eje"}</span>
        <span className="stage-label">{"Flechas [↑/↓] o clic para abrir ficha"}</span>
      </div>
      <div className="nodes-grid" id="nodesGrid">
        {pillar?.nodes.map((n, idx) => {
          const isRead = readNodes.has(n.id)
          const classes = ["node-item", activeNodeId === n.id && "active", idx < revealed && "reveal"]
            .filter(Boolean)
            .join(" ")
          return (
            <article
              key={n.id}
              id={`node-${n.id}`}
              className={classes}
              onClick={() => onSelect(n.id)}
              ref={(el) => {
                if (el) nodeRefs.current.set(n.id, el)
                else nodeRefs.current.delete(n.id)
              }}
            >
              <div>
                <div className="node-top">
                  <span className="node-code">
                    <span
                      className={`read-dot ${isRead ? "is-read" : ""}`}
                      title={isRead ? "Concepto estudiado" : "Pendiente por leer"}
                    >
                      {isRead ? "●" : "○"}
                    </span>{" "}
                    {n.code}
                  </span>
                  <span className="node-type">{n.type}</span>
                </div>
                <h3 className="node-name">{n.name}</h3>
                <div className="node-translation">{n.translation}</div>
                <p className="node-summary">{n.summary}</p>
              </div>
              <div className="node-bottom">
                <span>{n.source}</span>
                <span>{"Abrir ficha →"}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
