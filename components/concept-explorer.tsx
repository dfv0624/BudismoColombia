"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AtomicCard } from "@/components/atomic-card"
import { NodesStage } from "@/components/nodes-stage"
import { PillarsGrid } from "@/components/pillars-grid"
import { SearchBox, type SearchMatch } from "@/components/search-box"
import { SiteHeader } from "@/components/site-header"
import { REPOSITORY, TOTAL_NODES, findNodeById, normalizeText } from "@/lib/repository"

export type ViewState = "pillars" | "nodes" | "card"

const READ_KEY = "bc_read_nodes"
const THEME_KEY = "bc_theme"
const TRAIL_LIMIT = 8
const SWITCH_DELAY = 170

export function ConceptExplorer() {
  const [view, setView] = useState<ViewState>("pillars")
  const [activePillarId, setActivePillarId] = useState<string | null>(null)
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null)
  const [displayedNodeId, setDisplayedNodeId] = useState<string | null>(null)
  const [switching, setSwitching] = useState(false)
  const [readNodes, setReadNodes] = useState<Set<string>>(() => new Set())
  const [trail, setTrail] = useState<string[]>([])
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [cardVisit, setCardVisit] = useState(0)

  const [query, setQuery] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activePillar = useMemo(() => REPOSITORY.find((p) => p.id === activePillarId) ?? null, [activePillarId])
  const displayed = displayedNodeId ? findNodeById(displayedNodeId) : null

  const matches = useMemo<SearchMatch[]>(() => {
    const q = normalizeText(query.trim())
    if (!q) return []
    return REPOSITORY.flatMap((pillar) =>
      pillar.nodes
        .filter((n) =>
          normalizeText(`${n.name} ${n.translation} ${n.pali} ${n.summary} ${n.code} ${n.source}`).includes(q),
        )
        .map((node) => ({ pillar, node })),
    )
  }, [query])

  const selectNode = useCallback(
    (nodeId: string, updateHash = true) => {
      const result = findNodeById(nodeId)
      if (!result) return

      const wasInCard = view === "card"
      setActivePillarId(result.pillar.id)
      setActiveNodeId(nodeId)
      setView("card")
      setCardVisit((v) => v + 1)

      setReadNodes((prev) => {
        if (prev.has(nodeId)) return prev
        const next = new Set(prev).add(nodeId)
        localStorage.setItem(READ_KEY, JSON.stringify([...next]))
        return next
      })
      setTrail((prev) => {
        if (prev[prev.length - 1] === nodeId) return prev
        const next = [...prev, nodeId]
        return next.length > TRAIL_LIMIT ? next.slice(-TRAIL_LIMIT) : next
      })

      if (switchTimer.current) clearTimeout(switchTimer.current)
      if (wasInCard && displayedNodeId) {
        setSwitching(true)
        switchTimer.current = setTimeout(() => {
          setDisplayedNodeId(nodeId)
          setSwitching(false)
        }, SWITCH_DELAY)
      } else {
        setSwitching(false)
        setDisplayedNodeId(nodeId)
      }

      if (updateHash) history.replaceState(null, "", `#${result.pillar.id}/${nodeId}`)
    },
    [view, displayedNodeId],
  )

  const selectPillar = useCallback((pillarId: string, updateHash = true) => {
    setActivePillarId(pillarId)
    setActiveNodeId(null)
    setView("nodes")
    if (updateHash) history.replaceState(null, "", `#${pillarId}`)
  }, [])

  const resetToHome = useCallback(() => {
    setView("pillars")
    setActivePillarId(null)
    setActiveNodeId(null)
    history.replaceState(null, "", window.location.pathname)
  }, [])

  const stepBack = useCallback(() => {
    if (view === "card") {
      setView("nodes")
      setActiveNodeId(null)
      history.replaceState(null, "", `#${activePillarId}`)
    } else if (view === "nodes") {
      resetToHome()
    }
  }, [view, activePillarId, resetToHome])

  function handlePillarClick(pillarId: string) {
    if (view === "card" && activePillarId !== pillarId) {
      const pillar = REPOSITORY.find((p) => p.id === pillarId)
      if (pillar) selectNode(pillar.nodes[0].id)
      return
    }
    selectPillar(pillarId)
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem(THEME_KEY, next)
    setTheme(next)
  }

  const closeSearch = useCallback(() => {
    setQuery("")
    setSearchOpen(false)
  }, [])

  const dismissResults = useCallback(() => setSearchOpen(false), [])

  function handleQueryChange(value: string) {
    setQuery(value)
    setSelectedIndex(0)
    setSearchOpen(value.trim().length > 0)
  }

  function pickSearchNode(nodeId: string) {
    closeSearch()
    selectNode(nodeId)
  }

  const syncFromHash = useCallback(() => {
    const raw = window.location.hash.replace(/^#/, "")
    if (!raw) {
      resetToHome()
      return
    }
    const [pillarPart, nodePart] = raw.split("/")
    const pillar = REPOSITORY.find((p) => p.id === pillarPart)
    if (!pillar) return
    if (nodePart) selectNode(nodePart, false)
    else selectPillar(pillar.id, false)
  }, [resetToHome, selectNode, selectPillar])

  const latest = useRef({ syncFromHash, stepBack, selectNode, closeSearch, view, activePillarId, activeNodeId, searchOpen })
  latest.current = { syncFromHash, stepBack, selectNode, closeSearch, view, activePillarId, activeNodeId, searchOpen }

  useEffect(() => {
    try {
      setReadNodes(new Set(JSON.parse(localStorage.getItem(READ_KEY) || "[]")))
    } catch {}
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light")
    if (window.location.hash) latest.current.syncFromHash()

    const onHashChange = () => latest.current.syncFromHash()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const s = latest.current
      const input = searchInputRef.current
      const inputFocused = document.activeElement === input

      if ((e.key === "/" && !inputFocused) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault()
        input?.focus()
        input?.select()
        return
      }

      if (e.key === "Escape") {
        if (inputFocused || s.searchOpen) {
          s.closeSearch()
          input?.blur()
        } else {
          s.stepBack()
        }
        return
      }

      if (!inputFocused && s.activePillarId && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        const pillar = REPOSITORY.find((p) => p.id === s.activePillarId)
        if (!pillar) return
        e.preventDefault()
        const current = pillar.nodes.findIndex((n) => n.id === s.activeNodeId)
        const len = pillar.nodes.length
        const next = current === -1 ? 0 : e.key === "ArrowDown" ? (current + 1) % len : (current - 1 + len) % len
        s.selectNode(pillar.nodes[next].id)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => () => {
    if (switchTimer.current) clearTimeout(switchTimer.current)
  }, [])

  const stageClass = view === "nodes" ? "state-nodes" : view === "card" ? "state-card" : ""

  return (
    <>
      <SiteHeader
        view={view}
        readCount={readNodes.size}
        totalCount={TOTAL_NODES}
        theme={theme}
        onHome={resetToHome}
        onNodesStep={() => {
          if (activePillarId && view === "card") stepBack()
        }}
        onBack={stepBack}
        onToggleTheme={toggleTheme}
        search={
          <SearchBox
            inputRef={searchInputRef}
            query={query}
            open={searchOpen}
            matches={matches}
            selectedIndex={selectedIndex}
            totalCount={TOTAL_NODES}
            onQueryChange={handleQueryChange}
            onSelectedIndexChange={setSelectedIndex}
            onPick={pickSearchNode}
            onDismiss={dismissResults}
          />
        }
      />

      <main id="stage" className={stageClass}>
        <PillarsGrid activePillarId={activePillarId} onSelect={handlePillarClick} />
        <NodesStage
          pillar={activePillar}
          activeNodeId={activeNodeId}
          readNodes={readNodes}
          onSelect={(id) => selectNode(id)}
        />
        <section className="card-stage" id="cardStage">
          {displayed && (
            <AtomicCard
              pillar={displayed.pillar}
              node={displayed.node}
              trail={trail}
              switching={switching}
              timerKey={`${displayed.node.id}-${cardVisit}`}
              onSelect={(id) => selectNode(id)}
            />
          )}
        </section>
      </main>
    </>
  )
}
