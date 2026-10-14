"use client"

import { Fragment } from "react"
import { PracticeTimer } from "@/components/practice-timer"
import { findNodeById, type ConceptNode, type Pillar } from "@/lib/repository"

type AtomicCardProps = {
  pillar: Pillar
  node: ConceptNode
  trail: string[]
  switching: boolean
  timerKey: string
  onSelect: (nodeId: string) => void
}

export function AtomicCard({ pillar, node, trail, switching, timerKey, onSelect }: AtomicCardProps) {
  return (
    <div className={`card-inner ${switching ? "switching" : ""}`}>
      <div className="atomic-header">
        <div>
          <div className="atomic-meta">
            <span>{`Eje ${pillar.num} · ${pillar.title}`}</span>
            <span>·</span>
            <span>{node.type}</span>
            <span>·</span>
            <span>{`Ref: ${node.source}`}</span>
          </div>
          <h1 className="atomic-title">
            {node.name} — <em>{node.translation}</em>
          </h1>
        </div>
        <div className="atomic-pali-badge">{node.pali}</div>
      </div>

      <div className="atomic-grid">
        <div className="atomic-cell">
          <div>
            <div className="cell-tag">01. Síntesis Conceptual</div>
            <blockquote className="essence-quote">{node.quote}</blockquote>
            <p className="essence-body">{node.essence}</p>
          </div>
          <div className="stage-label" style={{ marginTop: 24 }}>
            {"Lectura atómica · Sin ruido doctrinal"}
          </div>
        </div>

        <div className="atomic-cell">
          <div>
            <div className="cell-tag">02. Observación Práctica (3 pasos)</div>
            <ul className="practice-steps">
              {node.steps.map((s, i) => (
                <li key={s.title} className="practice-step">
                  <span className="step-num">{`0${i + 1}`}</span>
                  <div className="step-text">
                    <strong>{s.title}</strong> {s.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <PracticeTimer key={timerKey} />
        </div>

        <div className="atomic-connections">
          <div className="connections-row">
            <span className="stage-label">03. Conceptos Interconectados:</span>
            <div className="conn-list">
              {node.connections.map((connId) => {
                const target = findNodeById(connId)
                if (!target) return null
                return (
                  <button key={connId} type="button" className="conn-chip" onClick={() => onSelect(target.node.id)}>
                    {target.node.name} <span>{`${target.node.translation} →`}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="session-trail">
            <span>Hilo de estudio:</span>
            {trail.map((tid, idx) => {
              const t = findNodeById(tid)
              if (!t) return null
              return (
                <Fragment key={`${tid}-${idx}`}>
                  {idx > 0 && <span aria-hidden="true">{"→"}</span>}
                  <button
                    type="button"
                    className={`trail-node ${tid === node.id ? "current" : ""}`}
                    onClick={() => onSelect(tid)}
                  >
                    {t.node.name}
                  </button>
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
