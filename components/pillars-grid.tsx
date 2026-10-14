"use client"

import { REPOSITORY } from "@/lib/repository"

type PillarsGridProps = {
  activePillarId: string | null
  onSelect: (pillarId: string) => void
}

export function PillarsGrid({ activePillarId, onSelect }: PillarsGridProps) {
  const total = String(REPOSITORY.length).padStart(2, "0")

  return (
    <section className="pillars-container" id="pillarsContainer">
      {REPOSITORY.map((p) => (
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
            <span>{`${p.nodes.length} Nodos`}</span>
            <span className="pillar-arrow">{"→"}</span>
          </div>
          <div className="pillar-vertical-label">{`${p.num} · ${p.title}`}</div>
        </article>
      ))}
    </section>
  )
}
