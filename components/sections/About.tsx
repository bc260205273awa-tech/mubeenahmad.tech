'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface AboutProps {
  portraitUrl?: string
  className?: string
}

export function About({ portraitUrl = '/mubeen.webp', className }: AboutProps) {
  const [imageError, setImageError] = useState(false)
  const hasPortrait = Boolean(portraitUrl) && !imageError

  return (
    <section
      id="about"
      aria-label="About Mubeen Ahmad"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20', className)}
    >
      <Container>
        {/* ─── SECTION LABEL ─────────────────────────────────────────── */}
        <div className="mb-14 sm:mb-20">
          <SectionLabel number="07" label="About" />
        </div>

        {/* ─── TWO-COLUMN EDITORIAL LAYOUT ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── LEFT COLUMN: OPTIONAL RECTANGULAR PORTRAIT SLOT ────────── */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {hasPortrait ? (
              <div className="relative border border-hairline bg-surface p-2 sm:p-2.5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                  <Image
                    src={portraitUrl}
                    alt="Mubeen Ahmad — Full-Stack Developer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center filter grayscale contrast-[1.04] transition-all duration-500 hover:filter-none"
                    onError={() => setImageError(true)}
                    priority={false}
                  />
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between font-mono text-[11px] text-muted uppercase tracking-wider">
                  <span>Mubeen Ahmad</span>
                  <span>Vehari, PK</span>
                </div>
              </div>
            ) : (
              /* Fallback if no portrait is available or image errors */
              <div className="border border-hairline bg-surface p-8 sm:p-10 flex flex-col justify-between aspect-[4/5]">
                <span className="font-mono text-mono-xs text-accent uppercase tracking-widest">
                  Engineering Profile
                </span>
                <p className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
                  One developer, direct execution, zero agency layers.
                </p>
                <span className="font-mono text-mono-xs text-muted uppercase tracking-wider">
                  Mubeen Ahmad &bull; Vehari, Pakistan
                </span>
              </div>
            )}
          </div>

          {/* ─── RIGHT COLUMN: 3 PLAIN-SPOKEN PARAGRAPHS & MONO METADATA ─ */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal">
              Building software for the people who{' '}
              <em className="font-normal italic text-accent">actually run the business.</em>
            </h2>

            {/* 3 Short Paragraphs in Mubeen's Voice */}
            <div className="space-y-6 text-body-lg text-ink/85 font-sans leading-relaxed">
              <p>
                I am a self-taught full-stack developer based in Vehari, Pakistan. I build operational systems—multi-department ERP platforms, clinical booking software, and custom digital tools for organizations that cannot afford software that breaks under daily staff use.
              </p>

              <p>
                I talk to the people who will actually use the software first, then build, then train them. Real software succeeds or fails based on whether a front-desk receptionist, cashier, or doctor can do their job without getting stuck. Good software should be invisible to the operator.
              </p>

              <p>
                Currently, I lead engineering at MR DEVS, deepen my knowledge in Node.js and backend architecture, and build reliable digital systems for clinics, colleges, and small businesses. I work directly with clients from concept through production.
              </p>
            </div>

            {/* Small Mono List */}
            <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-mono-xs text-muted uppercase tracking-wider">
              <div className="text-ink">
                Languages: <span className="text-muted">English, Urdu</span>
              </div>
              <div>
                Based in Vehari, Pakistan &bull; Working remotely worldwide.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
