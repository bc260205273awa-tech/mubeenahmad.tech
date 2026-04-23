import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mubeen Ahmad — Fullstack Web Developer',
  description:
    'Fullstack web developer specializing in healthcare technology, AI-powered applications, and premium digital experiences. Based in Pakistan, serving clients worldwide.',
  keywords: [
    'Mubeen Ahmad',
    'Fullstack Developer',
    'Web Developer Pakistan',
    'Healthcare Web Development',
    'Next.js Developer',
    'React Developer',
    'AI Web Applications',
    'mubeenahmad.tech',
  ],
  authors: [{ name: 'Mubeen Ahmad', url: 'https://mubeenahmad.tech' }],
  creator: 'Mubeen Ahmad',
  metadataBase: new URL('https://mubeenahmad.tech'),
  alternates: { canonical: 'https://mubeenahmad.tech' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mubeenahmad.tech',
    title: 'Mubeen Ahmad — Fullstack Web Developer',
    description:
      'Fullstack web developer specializing in healthcare tech, AI-powered applications, and premium digital experiences.',
    siteName: 'Mubeen Ahmad',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mubeen Ahmad — Fullstack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubeen Ahmad — Fullstack Web Developer',
    description:
      'Fullstack web developer specializing in healthcare tech, AI-powered applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
