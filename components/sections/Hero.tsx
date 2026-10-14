'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface HeroProps {
  showPortrait?: boolean
  className?: string
}

export function Hero({ showPortrait = true, className }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null)
  const headlineLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const introRef = useRef<HTMLDivElement | null>(null)
  const portraitSlotRef = useRef<HTMLDivElement | null>(null)
  const statsRowRef = useRef<HTMLDivElement | null>(null)
  const hairlineRef = useRef<HTMLDivElement | null>(null)

  const { hero, proofStats } = profile

  useEffect(() => {
    if (!heroRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Immediate visibility without transforms
      if (eyebrowRef.current) gsap.set(eyebrowRef.current, { opacity: 1, y: 0 })
      headlineLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { yPercent: 0, opacity: 1 })
      })
      if (introRef.current) gsap.set(introRef.current, { opacity: 1, y: 0 })
      if (portraitSlotRef.current) gsap.set(portraitSlotRef.current, { opacity: 1 })
      if (hairlineRef.current) gsap.set(hairlineRef.current, { scaleX: 1 })
      if (statsRowRef.current) gsap.set(statsRowRef.current, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const validLines = headlineLinesRef.current.filter(Boolean)

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out', // cubic-bezier(0.22, 1, 0.36, 1)
        },
      })

      // 1. Initial states
      if (eyebrowRef.current) gsap.set(eyebrowRef.current, { opacity: 0, y: -8 })
      gsap.set(validLines, { yPercent: 115 })
      if (introRef.current) gsap.set(introRef.current, { opacity: 0, y: 14 })
      if (portraitSlotRef.current) gsap.set(portraitSlotRef.current, { opacity: 0, scale: 0.98 })
      if (hairlineRef.current) gsap.set(hairlineRef.current, { scaleX: 0, transformOrigin: 'left center' })
      if (statsRowRef.current) gsap.set(statsRowRef.current, { opacity: 0, y: 8 })

      // 2. Headline masked lines reveal (stagger 0.08s, duration 0.9s)
      tl.to(validLines, {
        yPercent: 0,
        duration: 0.9,
        stagger: 0.08,
      })

      // 3. Eyebrow & live availability line fade in (overlapping headline reveal)
      if (eyebrowRef.current) {
        tl.to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.65'
        )
      }

      // 4. Intro copy and CTAs fade in
      if (introRef.current) {
        tl.to(
          introRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.55'
        )
      }

      // 5. Optional portrait slot reveal
      if (portraitSlotRef.current) {
        tl.to(
          portraitSlotRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
          },
          '-=0.5'
        )
      }

      // 6. Bottom hairline draw-in & stats reveal (total animation complete within ~1.4s)
      if (hairlineRef.current) {
        tl.to(
          hairlineRef.current,
          {
            scaleX: 1,
            duration: 0.7,
          },
          '-=0.45'
        )
      }

      if (statsRowRef.current) {
        tl.to(
          statsRowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '-=0.4'
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Introduction & Overview"
      className={cn(
        'relative flex min-h-[100svh] flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 overflow-hidden',
        className
      )}
    >
      <Container className="flex flex-1 flex-col justify-between">
        {/* ─── TOP MONO LINE: ROLE / LOCATION & LIVE AVAILABILITY ────── */}
        <div
          ref={eyebrowRef}
          className="flex flex-col gap-2 pt-2 sm:pt-4 pb-4 sm:flex-row sm:items-center sm:justify-between font-mono text-mono-xs uppercase tracking-wider text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="text-ink font-medium">{hero.eyebrow}</span>
          </div>

          <div className="inline-flex items-center gap-2 text-ink">
            {/* Small solid accent dot, strictly no pulsing glow */}
            <span
              className="h-1.5 w-1.5 bg-accent rounded-none shrink-0"
              aria-hidden="true"
            />
            <span className="text-muted tracking-widest text-[11px] sm:text-mono-xs">
              {hero.availability}
            </span>
          </div>
        </div>

        {/* ─── GIANT SERIF HEADLINE WITH ITALLIC ACCENT WORD ─────────── */}
        <div className="my-auto py-4 sm:py-6 lg:py-8">
          <h1 className="font-serif text-display-hero text-ink font-normal break-words sm:break-normal">
            {/* Line 1 */}
            <span className="block overflow-hidden py-0.5">
              <span
                ref={(el) => { headlineLinesRef.current[0] = el }}
                className="block will-change-transform"
              >
                {hero.headline.line1}
              </span>
            </span>

            {/* Line 2 with italic accent word */}
            <span className="block overflow-hidden py-0.5">
              <span
                ref={(el) => { headlineLinesRef.current[1] = el }}
                className="block will-change-transform"
              >
                <em className="font-normal italic text-accent pr-1">
                  {hero.headline.line2Em}
                </em>{' '}
                {hero.headline.line2Rest}
              </span>
            </span>

            {/* Line 3 */}
            <span className="block overflow-hidden py-0.5">
              <span
                ref={(el) => { headlineLinesRef.current[2] = el }}
                className="block will-change-transform"
              >
                {hero.headline.line3}
              </span>
            </span>
          </h1>

          {/* ─── TWO-COLUMN ROW: 2-SENTENCE INTRO & ACTIONS / PORTRAIT ─── */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            {/* Left Column: 2-sentence intro and action buttons */}
            <div
              ref={introRef}
              className="lg:col-span-8 flex flex-col gap-6"
            >
              <p className="max-w-2xl text-body-md sm:text-body-lg text-ink/80 leading-relaxed font-sans">
                {hero.intro}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Button
                  href="#work"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  View selected work
                </Button>
                <Button
                  href="#contact"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Right Column: Optional well-cropped portrait slot */}
            {showPortrait && hero.portraitUrl && (
              <div
                ref={portraitSlotRef}
                className="lg:col-span-4 flex lg:justify-end items-end"
              >
                {/* ─── CLEARLY MARKED PORTRAIT SLOT ─── */}
                <div
                  className="relative group border border-hairline bg-surface p-1 rounded-none overflow-hidden"
                  title="Mubeen Ahmad — Portrait"
                >
                  <div className="relative w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 overflow-hidden bg-bg">
                    <Image
                      src={hero.portraitUrl}
                      alt="Mubeen Ahmad"
                      fill
                      priority
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                      className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500 ease-editorial"
                    />
                  </div>
                  <div className="pt-1.5 px-0.5 flex items-center justify-between font-mono text-[9px] tracking-widest text-muted uppercase">
                    <span>MUBEEN A.</span>
                    <span>PK / 2026</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── BOTTOM PROOF STATS ROW (HAIRLINE + MONO PROOF STATS) ──── */}
        <div className="mt-6 sm:mt-8">
          <div
            ref={hairlineRef}
            role="separator"
            className="h-[1px] w-full bg-hairline"
          />

          <div
            ref={statsRowRef}
            className="pt-4 sm:pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 font-mono text-mono-xs uppercase tracking-wider text-muted"
          >
            {proofStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <span className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-mono-xs text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
