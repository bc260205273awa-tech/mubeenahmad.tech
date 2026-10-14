import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mubeen Ahmad — Full-Stack Engineer & Agency Co-Founder',
  description:
    'Editorial portfolio of Mubeen Ahmad (mubeenahmad.tech). High-load institutional ERP engineering, managed backends, and bespoke digital software.',
  metadataBase: new URL('https://mubeenahmad.tech'),
  authors: [{ name: 'Mubeen Ahmad', url: 'https://mubeenahmad.tech' }],
  creator: 'Mubeen Ahmad',
  keywords: [
    'Mubeen Ahmad',
    'Full-Stack Developer',
    'Software Engineer',
    'ERP Systems',
    'Next.js',
    'React',
    'Vehari Pakistan',
    'MR DEVS',
    'mubeenahmad.tech',
  ],
  alternates: {
    canonical: 'https://mubeenahmad.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mubeenahmad.tech',
    title: 'Mubeen Ahmad — Full-Stack Engineer & Agency Co-Founder',
    description:
      'High-load institutional ERP engineering, managed backends, and bespoke digital software.',
    siteName: 'Mubeen Ahmad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubeen Ahmad — Full-Stack Engineer',
    description:
      'High-load institutional ERP engineering, managed backends, and bespoke digital software.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EFEBE3' },
    { media: '(prefers-color-scheme: dark)', color: '#12110F' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mubeen Ahmad',
  jobTitle: 'Full-Stack Developer & Systems Builder',
  url: 'https://mubeenahmad.tech',
  email: 'mailto:mubeenahma1123@gmail.com',
  image: 'https://mubeenahmad.tech/mubeen.webp',
  sameAs: [
    'https://mrdevs.dev',
    'https://github.com/TODO_REAL_VALUE',
    'https://linkedin.com/in/TODO_REAL_VALUE',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vehari',
    addressRegion: 'Punjab',
    addressCountry: 'Pakistan',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'MR DEVS',
    url: 'https://mrdevs.dev',
  },
  knowsAbout: [
    'Full-Stack Web Development',
    'Enterprise ERP Platforms',
    'Role-Based Access Control',
    'Next.js',
    'React',
    'TypeScript',
    'Firebase',
    'Supabase',
    'AI LLM Tool-Calling',
    'Node.js',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {/* Anti-FOUC script: Synchronously apply dark/light class before DOM paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* JSON-LD Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased selection:bg-accent selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-ink focus:text-bg focus:font-mono focus:text-mono-xs focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

