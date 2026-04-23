import type { Metadata } from 'next'
import { Space_Grotesk, Work_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MB Holding — Maître Bâtisseur',
    template: '%s | MB Holding',
  },
  description:
    "Groupe spécialisé dans la construction, l'immobilier et les services connexes en Afrique de l'Ouest.",
  metadataBase: new URL('https://mbholding.sn'),
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://mbholding.sn',
    siteName: 'MB Holding',
    images: [{ url: '/logo.png', width: 400, height: 160, alt: 'MB Holding — Maître Bâtisseur' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
