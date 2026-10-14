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
const DEFAULT_TITLE = "Budismo Colombia — Repositorio Conceptual del Dharma"

// State lives in query params (?eje=&nodo=) rather than the hash: hashes like
// "#eje/nodo" are not valid CSS selectors and break tooling that runs
// document.querySelector(location.hash). Legacy hash links are still accepted.
function readUrl(): { pillarId: string | null; nodeId: string | null } {
  const params = new URLSearchParams(window.location.search)
  const pillarId = params.get("eje")
  if (pillarId) return { pillarId, nodeId: params.get("nodo") }

  const legacy = window.location.hash.replace(/^#/, "")
  if (!legacy) return { pillarId: null, nodeId: null }
  const [pillarPart, nodePart] = decodeURIComponent(legacy).split("/")
  return { pillarId: pillarPart || null, nodeId: nodePart || null }
}

function writeUrl(pillarId?: string, nodeId?: string) {
  const params = new URLSearchParams()
  if (pillarId) params.set("eje", pillarId)
  if (nodeId) params.set("nodo", nodeId)
  const search = params.toString()
  history.replaceState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`)
}

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

      if (updateHash) writeUrl(result.pillar.id, nodeId)
    },
    [view, displayedNodeId],
  )

  const selectPillar = useCallback((pillarId: string, updateHash = true) => {
    setActivePillarId(pillarId)
    setActiveNodeId(null)
    setView("nodes")
    if (updateHash) writeUrl(pillarId)
  }, [])

  const resetToHome = useCallback(() => {
    setView("pillars")
    setActivePillarId(null)
    setActiveNodeId(null)
    writeUrl()
  }, [])

  const stepBack = useCallback(() => {
    if (view === "card") {
      setView("nodes")
      setActiveNodeId(null)
      if (activePillarId) writeUrl(activePillarId)
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
    const { pillarId, nodeId } = readUrl()
    if (!pillarId) {
      resetToHome()
      return
    }
    const pillar = REPOSITORY.find((p) => p.id === pillarId)
    if (!pillar) return
    const rewriteLegacyHash = window.location.hash.length > 1
    if (nodeId) selectNode(nodeId, rewriteLegacyHash)
    else selectPillar(pillar.id, rewriteLegacyHash)
  }, [resetToHome, selectNode, selectPillar])

  const latest = useRef({ syncFromHash, stepBack, selectNode, closeSearch, view, activePillarId, activeNodeId, searchOpen })
  latest.current = { syncFromHash, stepBack, selectNode, closeSearch, view, activePillarId, activeNodeId, searchOpen }

  useEffect(() => {
    try {
      setReadNodes(new Set(JSON.parse(localStorage.getItem(READ_KEY) || "[]")))
    } catch {}
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light")
    if (window.location.hash || window.location.search) latest.current.syncFromHash()

    const onUrlChange = () => latest.current.syncFromHash()
    window.addEventListener("popstate", onUrlChange)
    window.addEventListener("hashchange", onUrlChange)
    return () => {
      window.removeEventListener("popstate", onUrlChange)
      window.removeEventListener("hashchange", onUrlChange)
    }
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

  const activeNode = activeNodeId ? findNodeById(activeNodeId)?.node : null
  useEffect(() => {
    if (view === "card" && activeNode) {
      document.title = `${activeNode.name} — ${activeNode.translation} | Budismo Colombia`
    } else if (view === "nodes" && activePillar) {
      document.title = `${activePillar.title} (${activePillar.pali}) | Budismo Colombia`
    } else {
      document.title = DEFAULT_TITLE
    }
  }, [view, activePillar, activeNode])

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
