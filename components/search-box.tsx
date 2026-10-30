"use client"

import { useEffect, useRef, type RefObject } from "react"
import type { UiStrings } from "@/lib/i18n"
import type { ConceptNode, Pillar } from "@/lib/repository"

export type SearchMatch = { pillar: Pillar; node: ConceptNode }

type SearchBoxProps = {
  inputRef: RefObject<HTMLInputElement | null>
  query: string
  open: boolean
  matches: SearchMatch[]
  selectedIndex: number
  totalCount: number
  t: UiStrings
  onQueryChange: (value: string) => void
  onSelectedIndexChange: (index: number) => void
  onPick: (nodeId: string) => void
  onDismiss: () => void
}

export function SearchBox({
  inputRef,
  query,
  open,
  matches,
  selectedIndex,
  totalCount,
  t,
  onQueryChange,
  onSelectedIndexChange,
  onPick,
  onDismiss,
}: SearchBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) onDismiss()
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [onDismiss])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return
    const count = Math.max(1, matches.length)
    if (e.key === "ArrowDown") {
      e.preventDefault()
      onSelectedIndexChange((selectedIndex + 1) % count)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      onSelectedIndexChange((selectedIndex - 1 + count) % count)
    } else if (e.key === "Enter" && matches[selectedIndex]) {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      inputRef.current?.blur()
      onPick(matches[selectedIndex].node.id)
    }
  }

  return (
    <div className="search-box" id="searchBox" ref={boxRef}>
      <input
        ref={inputRef}
        type="text"
        id="searchInput"
        className="search-input"
        placeholder={t.searchPlaceholder(totalCount)}
        autoComplete="off"
        aria-label={t.searchLabel}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <span className="search-kbd" aria-hidden="true">
        /
      </span>
      <div className={`search-results ${open ? "open" : ""}`} id="searchResults" role="listbox">
        {open && matches.length === 0 && (
          <div className="search-result-item">
            <span className="sr-meta">{t.noMatches}</span>
          </div>
        )}
        {open &&
          matches.map((item, idx) => (
            <div
              key={item.node.id}
              role="option"
              aria-selected={idx === selectedIndex}
              className={`search-result-item ${idx === selectedIndex ? "selected" : ""}`}
              onClick={() => onPick(item.node.id)}
            >
              <div>
                <div className="sr-title">
                  {item.node.name} — <em>{item.node.translation}</em>
                </div>
                <div className="sr-meta">{`${t.pillar} ${item.pillar.num}: ${item.pillar.title}`}</div>
              </div>
              <span className="sr-meta">{`${item.node.code} ↵`}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
