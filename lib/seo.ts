import { REPOSITORY } from "@/lib/repository"

// Must match the primary Vercel domain; budismocolombia.com redirects here, and Google rejects canonicals/sitemap URLs that redirect.
export const SITE_URL = "https://www.budismocolombia.com"
export const SITE_NAME = "Budismo Colombia"
export const SITE_TITLE = "Budismo Colombia — Repositorio Conceptual del Dharma"
export const SITE_DESCRIPTION =
  "Archivo interactivo y mapa conceptual de filosofía budista en Colombia. Explora Impermanencia (Anicca), Fricción (Dukkha), Mente (Sati) y Meditación (Vipassana) de forma práctica."

// Uses the query-param format the app actually routes on (?eje=&nodo=), so each URL opens its concept directly.
export function conceptUrl(pillarId: string, nodeId?: string) {
  const params = new URLSearchParams({ eje: pillarId })
  if (nodeId) params.set("nodo", nodeId)
  return `${SITE_URL}/?${params.toString()}`
}

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: SITE_TITLE,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "es-CO",
      },
      ...REPOSITORY.map((pillar) => ({
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}/#${pillar.id}`,
        name: pillar.title,
        alternateName: pillar.pali,
        description: pillar.desc,
        url: conceptUrl(pillar.id),
        inLanguage: "es-CO",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        hasDefinedTerm: pillar.nodes.map((node) => ({
          "@type": "DefinedTerm",
          name: node.name,
          alternateName: node.pali,
          termCode: node.code,
          description: node.essence,
          url: conceptUrl(pillar.id, node.id),
          inDefinedTermSet: { "@id": `${SITE_URL}/#${pillar.id}` },
        })),
      })),
    ],
  }
}
