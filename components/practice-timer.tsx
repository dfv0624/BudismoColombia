"use client"

import { useEffect, useState } from "react"
import type { UiStrings } from "@/lib/i18n"

const DURATION = 60

export function PracticeTimer({ t }: { t: UiStrings }) {
  const [running, setRunning] = useState(false)
  const [seconds, setSeconds] = useState(DURATION)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  const completed = seconds === 0
  const progress = ((DURATION - seconds) / DURATION) * 100

  function toggle() {
    if (running) {
      setRunning(false)
      setSeconds(DURATION)
      return
    }
    setSeconds(DURATION)
    setRunning(true)
  }

  const display = completed ? t.timerDone : `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`
  const label = running ? t.timerStop : completed ? t.timerRestart : t.timerStart

  return (
    <div className="practice-timer-box">
      <div className="timer-row">
        <span className="stage-label">{t.timerLabel}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="timer-display" id="timerDisplay" aria-live="polite">
            {display}
          </span>
          <button type="button" className="btn-minimal" id="timerBtn" onClick={toggle}>
            {label}
          </button>
        </div>
      </div>
      <div className="timer-bar-track">
        <div className="timer-bar-fill" id="timerBarFill" style={{ width: `${running || completed ? progress : 0}%` }} />
      </div>
    </div>
  )
}
