import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tiago Sales dos Santos | Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack em Campina Grande, PB. Construo aplicações web e APIs REST com React, Next.js, TypeScript, Node.js e PostgreSQL.',
  openGraph: {
    title: 'Tiago Sales dos Santos | Desenvolvedor Full Stack',
    description: 'Aplicações web, APIs REST e produtos SaaS seguros e prontos para produção.',
    locale: 'pt_BR',
    type: 'website',
  },
  generator: 'Next.js',
  icons: {
    icon: '/icon-ts.svg',
    shortcut: '/icon-ts.svg',
    apple: '/icon-ts.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
