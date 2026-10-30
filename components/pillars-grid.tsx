"use client"

import type { UiStrings } from "@/lib/i18n"
import type { Pillar } from "@/lib/repository"

type PillarsGridProps = {
  pillars: Pillar[]
  t: UiStrings
  activePillarId: string | null
  onSelect: (pillarId: string) => void
}

export function PillarsGrid({ pillars, t, activePillarId, onSelect }: PillarsGridProps) {
  const total = String(pillars.length).padStart(2, "0")

  return (
    <section className="pillars-container" id="pillarsContainer">
      {pillars.map((p) => (
        <article
          key={p.id}
          className={`pillar ${activePillarId === p.id ? "active" : ""}`}
          onClick={() => onSelect(p.id)}
        >
          <div className="pillar-num">{`${p.num} / ${total}`}</div>
          <div className="pillar-center">
            <span className="pillar-pali">{p.pali}</span>
            <h2 className="pillar-title">{p.title}</h2>
            <p className="pillar-desc">{p.desc}</p>
          </div>
          <div className="pillar-footer">
            <span>{t.nodesCount(p.nodes.length)}</span>
            <span className="pillar-arrow">{"→"}</span>
          </div>
          <div className="pillar-vertical-label">{`${p.num} · ${p.title}`}</div>
        </article>
      ))}
    </section>
  )
}
