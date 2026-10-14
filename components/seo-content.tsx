import { REPOSITORY } from "@/lib/repository"
import { SITE_TITLE, SITE_DESCRIPTION, buildJsonLd } from "@/lib/seo"

export function SeoContent() {
  const jsonLd = buildJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="sr-only" aria-label="Repositorio completo de conceptos">
        <h1>{SITE_TITLE}</h1>
        <p>{SITE_DESCRIPTION}</p>
        {REPOSITORY.map((pillar) => (
          <article key={pillar.id} id={`seo-${pillar.id}`}>
            <h2>
              {pillar.num}. {pillar.title} ({pillar.pali})
            </h2>
            <p>{pillar.desc}</p>
            {pillar.nodes.map((node) => (
              <article key={node.id}>
                <h3>
                  {node.name} — {node.translation}
                </h3>
                <p>
                  {node.pali} · {node.type}
                </p>
                <blockquote>{node.quote}</blockquote>
                <p>{node.summary}</p>
                <p>{node.essence}</p>
                <ol>
                  {node.steps.map((step) => (
                    <li key={step.title}>
                      {step.title}: {step.desc}
                    </li>
                  ))}
                </ol>
                <p>Fuente: {node.source}</p>
              </article>
            ))}
          </article>
        ))}
      </section>
    </>
  )
}
