'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between transition-colors duration-250">
      {/* ─── MINIMAL HEADER ──────────────────────────────────────────── */}
      <header className="border-b border-hairline py-5">
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl text-ink font-normal tracking-[-0.02em] hover:text-accent transition-colors"
          >
            Mubeen Ahmad
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-mono text-mono-xs text-muted uppercase">
              Vehari, Pakistan
            </span>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      {/* ─── 404 CONTENT ─────────────────────────────────────────────── */}
      <main className="py-24 sm:py-32 my-auto">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-mono text-mono-xs text-accent uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>(404) &bull; Resource Unindexed</span>
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal">
              This record does not exist in the{' '}
              <em className="font-normal italic text-accent">ledger.</em>
            </h1>

            <p className="text-body-lg text-muted font-sans leading-relaxed max-w-xl">
              The URL or case study you requested could not be located. It may have been renamed, archived, or was never indexed in this directory.
            </p>

            <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/"
                className="font-mono text-mono-xs uppercase tracking-wider bg-ink text-bg px-6 py-3.5 hover:bg-accent hover:text-white transition-colors duration-200 inline-flex items-center gap-2 self-start"
              >
                <span>&larr;</span>
                <span>Return to Index</span>
              </Link>

              <a
                href="mailto:mubeenahma1123@gmail.com"
                className="font-mono text-mono-xs uppercase tracking-wider text-muted hover:text-ink px-4 py-3.5 border border-hairline hover:border-ink/40 transition-colors duration-200 inline-flex items-center gap-2 self-start"
              >
                Report Broken Route &nearr;
              </a>
            </div>

            {/* Quick Directory Links */}
            <div className="mt-8 pt-8 border-t border-hairline/60">
              <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-3">
                Featured Case Studies
              </span>
              <div className="flex flex-wrap gap-4 font-mono text-mono-xs">
                <Link
                  href="/work/khanhub-erp"
                  className="text-ink hover:text-accent hover:underline underline-offset-4"
                >
                  Khan Hub ERP &rarr;
                </Link>
                <Link
                  href="/work/jobreel"
                  className="text-ink hover:text-accent hover:underline underline-offset-4"
                >
                  JobReel &rarr;
                </Link>
                <Link
                  href="/work/mrdevs-crm"
                  className="text-ink hover:text-accent hover:underline underline-offset-4"
                >
                  MR.DEVS CRM &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-hairline py-8">
        <Container className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-mono text-mono-xs text-muted gap-2">
          <span>&copy; 2026 Mubeen Ahmad</span>
          <span>HTTP 404 &bull; Not Found</span>
        </Container>
      </footer>
    </div>
  )
}
