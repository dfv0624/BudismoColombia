# Budismo Colombia — Repositorio Conceptual

Un repositorio interactivo y minimalista de conceptos de la filosofía budista, pensado para la práctica en la vida diaria. Cada concepto se presenta en una ficha breve con su término original en pali/sánscrito, una explicación clara y ejercicios concretos para aplicarlo.

**Sitio:** [budismocolombia.com](https://www.budismocolombia.com)

## Contenido

El repositorio organiza **20 conceptos** en **4 ejes** temáticos:

| Eje | Término | Enfoque |
| --- | --- | --- |
| Realidad y Cambio | Tilakkhana | Impermanencia, no-yo, origen co-dependiente, vacuidad, formaciones mentales |
| Fricción y Deseo | Sacca | Sufrimiento, deseo, apego, ignorancia, cesación |
| Arquitectura Mental | Citta | Atención plena, ecuanimidad, concentración, sabiduría, compasión |
| Cultivo y Método | Bhāvanā | Respiración, meditación de visión, calma, conducta y habla correctas |

Cada ficha incluye:

- Término original y su escritura en devanagari
- Definición y explicación práctica
- Tres ejercicios aplicables al día a día
- Conceptos relacionados para seguir explorando

## Funcionalidades

- **Navegación en tres niveles:** ejes → conceptos → ficha
- **Búsqueda rápida** con `/` o `Ctrl/⌘ + K`, navegable con teclado
- **Progreso de lectura** guardado en el navegador
- **Ruta de estudio** con los conceptos visitados
- **Temporizador de contemplación** de 1 minuto
- **Modo claro y oscuro**
- **Enlaces compartibles** a cualquier concepto (`?eje=impermanencia&nodo=anicca`)
- **Panel de contacto**
- **Diseño responsive** para móvil, tablet y escritorio
- **SEO:** metadatos, datos estructurados, `sitemap.xml`, `robots.txt` y `llms.txt`

## Tecnologías

- [Next.js 16](https://nextjs.org) (App Router) y React 19
- TypeScript
- CSS propio con variables de tema
- Fuentes optimizadas con `next/font`
- Google Analytics
- Despliegue en [Vercel](https://vercel.com)

## Estructura

```
app/
  layout.tsx        Layout raíz, fuentes, metadatos y Analytics
  page.tsx          Página principal
  globals.css       Estilos y temas claro/oscuro
  icon.svg          Favicon (Rueda del Dharma)
  sitemap.ts        Sitemap
  robots.ts         Reglas para buscadores
  llms.txt/         Resumen del contenido para modelos de IA
components/
  concept-explorer.tsx  Estado y navegación principal
  site-header.tsx       Encabezado, búsqueda y tema
  pillars-grid.tsx      Vista de ejes
  nodes-stage.tsx       Vista de conceptos
  atomic-card.tsx       Ficha de concepto
  practice-timer.tsx    Temporizador de contemplación
  contact-panel.tsx     Panel de contacto
lib/
  repository.ts     Contenido: ejes y conceptos
  seo.ts            Configuración SEO
```

## Desarrollo local

Requiere Node.js 20 o superior y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para generar la versión de producción:

```bash
pnpm build
pnpm start
```

## Agregar o editar conceptos

Todo el contenido está en `lib/repository.ts`. Cada eje contiene una lista de conceptos con `id`, término, definición, ejercicios (`practice`) y conceptos relacionados. Al agregar un concepto, aparece automáticamente en la navegación, la búsqueda y el sitemap.

## Contacto

Cali, Colombia · [dfv.0624@hotmail.com](mailto:dfv.0624@hotmail.com)

---

Desarrollado con [v0](https://v0.app). [Continuar en v0 →](https://v0.app/chat/projects/prj_L66vwpd7o1nXzGmipIfUarj9o6iQ)
