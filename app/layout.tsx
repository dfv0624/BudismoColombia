import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-G26EPE8H9Y'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://budismocolombia.com'),
  title: {
    default: 'Budismo Colombia — Repositorio Conceptual del Dharma',
    template: '%s | Budismo Colombia',
  },
  description:
    'Archivo interactivo y mapa conceptual de filosofía budista en Colombia. Explora Impermanencia (Anicca), Fricción (Dukkha), Mente (Sati) y Meditación (Vipassana) de forma práctica.',
  keywords: ['budismo colombia', 'meditacion colombia', 'anicca', 'dukkha', 'vipassana', 'sati', 'filosofia budista', 'dharma'],
  authors: [{ name: 'Budismo Colombia' }],
  alternates: {
    canonical: '/',
    languages: { 'es-CO': '/' },
  },
  openGraph: {
    title: 'Budismo Colombia — Repositorio Conceptual del Dharma',
    description:
      'Archivo interactivo y mapa conceptual de filosofía budista en Colombia. Explora Impermanencia (Anicca), Fricción (Dukkha), Mente (Sati) y Meditación (Vipassana) de forma práctica.',
    url: 'https://budismocolombia.com',
    siteName: 'Budismo Colombia',
    locale: 'es_CO',
    type: 'website',
  },
  other: {
    'geo.region': 'CO',
    'geo.placename': 'Colombia',
    'content-language': 'es-CO',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F6F8' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0E0E' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const themeScript = `try{document.documentElement.setAttribute("data-theme",localStorage.getItem("bc_theme")||"light")}catch(e){}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
