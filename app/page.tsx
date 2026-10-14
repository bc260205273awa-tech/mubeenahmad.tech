import React from 'react'
import {
  Navigation,
  Hero,
  Trust,
  SelectedWork,
  WhatIDo,
  Stack,
  Experience,
  Education,
  About,
  Contact,
  Footer,
} from '@/components/sections'
import { Container, ThemeToggle } from '@/components/ui'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-bg text-ink transition-colors duration-250">
      {/* ─── FIXED EDITORIAL NAVIGATION ──────────────────────────────── */}
      <Navigation />

      {/* ─── ACCESSIBLE MAIN CONTENT TARGET ──────────────────────────── */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* ─── HERO SECTION ────────────────────────────────────────────── */}
        <Hero />

        {/* ─── TRUST SECTION (QUIET LUXURY BAND) ───────────────────────── */}
        <Trust />

        {/* ─── SELECTED WORK (CORE EDITORIAL ROWS & MORE BUILDS) ───────── */}
        <SelectedWork />

        {/* ─── WHAT I DO (03) TWO-COLUMN SERVICE ROWS & EXPANDABLE HOVER ── */}
        <WhatIDo />

        {/* ─── STACK (04) TYPOGRAPHIC INDEX & HONEST GROWTH VECTOR ─────── */}
        <Stack />

        {/* ─── EXPERIENCE (05) VERTICAL EDITORIAL TIMELINE ─────────────── */}
        <Experience />

        {/* ─── EDUCATION (06) VERTICAL EDITORIAL TIMELINE ──────────────── */}
        <Education />

        {/* ─── ABOUT (07) TWO-COLUMN WITH PORTRAIT SLOT ────────────────── */}
        <About />

        {/* ─── CONTACT (08) GIANT STATEMENT, EMAIL & FORM ──────────────── */}
        <Contact />

        {/* ─── EDITORIAL SPECIMEN / AUDIT SUMMARY ──────────────────────── */}
        <section className="py-16 hairline-b">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-mono-xs uppercase text-muted">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span>SYSTEM VERIFICATION: LIGHT & DARK READY</span>
              </div>
              <div className="flex items-center gap-4">
                <span>CONTRAST: WCAG AA COMPLIANT</span>
                <span>RADIUS: 0–4PX MAX</span>
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* ─── FOOTER WITH LIVE PAKISTAN TIME & BACK TO TOP ────────────── */}
      <Footer />
    </div>
  )
}

