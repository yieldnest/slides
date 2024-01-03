import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YieldNest Slides',
  description: 'Pitch Deck for YieldNest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
