import { REPOSITORY } from "@/lib/repository"
import { SITE_DESCRIPTION, SITE_URL, conceptUrl } from "@/lib/seo"

export const dynamic = "force-static"

function buildMarkdown() {
  const lines: string[] = [
    "# Budismo Colombia — Repositorio Conceptual",
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Sitio: ${SITE_URL}`,
    "Idioma: es-CO",
    "",
  ]

  for (const pillar of REPOSITORY) {
    lines.push(`## ${pillar.num}. ${pillar.title} (${pillar.pali})`, "", pillar.desc, "")
    for (const node of pillar.nodes) {
      lines.push(
        `### ${node.code} ${node.name} — ${node.translation}`,
        "",
        `- Término en Pali: ${node.pali}`,
        `- Tipo: ${node.type}`,
        `- URL: ${conceptUrl(pillar.id, node.id)}`,
        `- Fuente: ${node.source}`,
        "",
        `> ${node.quote}`,
        "",
        `**Síntesis:** ${node.summary}`,
        "",
        node.essence,
        "",
        "**Práctica:**",
        "",
        ...node.steps.map((step, i) => `${i + 1}. **${step.title}:** ${step.desc}`),
        "",
      )
    }
  }

  return lines.join("\n")
}

export function GET() {
  return new Response(buildMarkdown(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
