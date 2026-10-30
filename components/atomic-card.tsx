"use client"

import { Fragment } from "react"
import { PracticeTimer } from "@/components/practice-timer"
import type { Lang, UiStrings } from "@/lib/i18n"
import { findNodeById, type ConceptNode, type Pillar } from "@/lib/repository"

type AtomicCardProps = {
  pillar: Pillar
  node: ConceptNode
  trail: string[]
  lang: Lang
  t: UiStrings
  switching: boolean
  timerKey: string
  onSelect: (nodeId: string) => void
}

export function AtomicCard({ pillar, node, trail, lang, t, switching, timerKey, onSelect }: AtomicCardProps) {
  return (
    <div className={`card-inner ${switching ? "switching" : ""}`}>
      <div className="atomic-header">
        <div>
          <div className="atomic-meta">
            <span>{`${t.pillar} ${pillar.num} · ${pillar.title}`}</span>
            <span>·</span>
            <span>{node.type}</span>
            <span>·</span>
            <span>{`${t.cardRef}: ${node.source}`}</span>
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
            <div className="cell-tag">{t.cellSynthesis}</div>
            <blockquote className="essence-quote">{node.quote}</blockquote>
            <p className="essence-body">{node.essence}</p>
          </div>
          <div className="stage-label" style={{ marginTop: 24 }}>
            {t.atomicReading}
          </div>
        </div>

        <div className="atomic-cell">
          <div>
            <div className="cell-tag">{t.cellPractice}</div>
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
          <PracticeTimer key={timerKey} t={t} />
        </div>

        <div className="atomic-connections">
          <div className="connections-row">
            <span className="stage-label">{t.cellConnections}</span>
            <div className="conn-list">
              {node.connections.map((connId) => {
                const target = findNodeById(connId, lang)
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
            <span>{t.trail}</span>
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
