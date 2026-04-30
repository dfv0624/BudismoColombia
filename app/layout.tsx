import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anicca Mind - Encuentra la paz en el límite del silencio',
  description: 'Discover tranquility through mindful meditation and embrace the stillness that exists between thoughts and breath.',
  keywords: ['meditation', 'mindfulness', 'mental health', 'wellness', 'calm', 'peace', 'breathing', 'anicca'],
  authors: [{ name: 'Anicca Mind' }],
  openGraph: {
    title: 'Anicca Mind - Encuentra la paz en el límite del silencio',
    description: 'Discover tranquility through mindful meditation and embrace the stillness that exists between thoughts and breath.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d2a26',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
