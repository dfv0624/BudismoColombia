"use client"

import { useEffect, useRef, useState } from "react"
import type { UiStrings } from "@/lib/i18n"
import type { Pillar } from "@/lib/repository"

type NodesStageProps = {
  pillar: Pillar | null
  t: UiStrings
  activeNodeId: string | null
  readNodes: Set<string>
  onSelect: (nodeId: string) => void
}

export function NodesStage({ pillar, t, activeNodeId, readNodes, onSelect }: NodesStageProps) {
  const [revealed, setRevealed] = useState(0)
  const nodeRefs = useRef(new Map<string, HTMLElement>())
  const pillarId = pillar?.id
  const nodeCount = pillar?.nodes.length ?? 0

  // Keyed on the pillar id, not the object, so switching language doesn't replay the reveal.
  useEffect(() => {
    setRevealed(0)
    if (!pillarId) return
    const timers = Array.from({ length: nodeCount }, (_, idx) =>
      setTimeout(() => setRevealed(idx + 1), 45 * (idx + 1)),
    )
    return () => timers.forEach(clearTimeout)
  }, [pillarId, nodeCount])

  useEffect(() => {
    if (activeNodeId) {
      nodeRefs.current.get(activeNodeId)?.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [activeNodeId])

  return (
    <section className="nodes-stage" id="nodesStage">
      <div className="stage-header">
        <span className="stage-label">{pillar ? `${t.pillar} ${pillar.num} — ${pillar.title}` : t.nodesDefault}</span>
        <span className="stage-label">{t.nodesHint}</span>
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
                      title={isRead ? t.readDone : t.readPending}
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
                <span>{t.openCard}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
