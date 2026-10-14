'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface WhatIDoProps {
  className?: string
}

export function WhatIDo({ className }: WhatIDoProps) {
  const { services } = profile
  const [activeService, setActiveService] = useState<string | null>(null)

  const toggleService = (index: string) => {
    setActiveService((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="what-i-do"
      aria-label="What I Do — Engineering Services"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20', className)}
    >
      <Container>
        {/* ─── SECTION LABEL ─────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-16">
          <SectionLabel number="03" label="What I Do" />
        </div>

        {/* ─── TWO-COLUMN EDITORIAL LAYOUT ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── LEFT COLUMN: STICKY EDITORIAL HEADING ─────────────────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-ink font-normal">
              One developer, the whole build.
            </h2>
            <p className="mt-6 text-body-md text-muted font-sans leading-relaxed max-w-md">
              From database schema and role permissions to frontend performance and automated workflows. Direct execution with zero agency overhead.
            </p>

            <div className="mt-8 pt-6 border-t border-hairline flex flex-col gap-2 font-mono text-mono-xs text-muted/90">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full inline-block" />
                Direct technical communication
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full inline-block" />
                Single point of architecture accountability
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full inline-block" />
                Zero handoff friction or multi-layer bloat
              </span>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: 4 SERVICE ROWS SEPARATED BY HAIRLINES ────── */}
          <div className="lg:col-span-7 divide-y divide-hairline border-y border-hairline">
            {services.map((service) => (
              <article
                key={service.index}
                tabIndex={0}
                onClick={() => toggleService(service.index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleService(service.index)
                  }
                }}
                className={cn(
                  'group py-7 sm:py-9 transition-colors duration-250 hover:bg-surface/60 focus-visible:bg-surface/60 -mx-4 sm:-mx-6 px-4 sm:px-6 outline-none cursor-pointer',
                  activeService === service.index && 'bg-surface/60'
                )}
                aria-expanded={activeService === service.index}
              >
                <div className="flex flex-col gap-3">
                  {/* Row Header: Mono Number + Serif Title */}
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-mono-sm text-accent tracking-wider shrink-0 select-none">
                      {service.index}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-[-0.02em] group-hover:text-ink transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* 2-Line Description */}
                  <p className="font-sans text-body-md text-ink/80 leading-relaxed sm:pl-9 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Mono Line of Technologies */}
                  <div className="sm:pl-9 mt-1">
                    <span className="font-mono text-mono-xs text-muted tracking-wider uppercase block">
                      {service.technologies.join(' · ')}
                    </span>
                  </div>

                  {/* Expandable Example from Real Work on Tap / Hover / Focus */}
                  <div
                    className={cn(
                      'sm:pl-9 grid transition-[grid-template-rows] duration-300 ease-out',
                      activeService === service.index
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 mt-3 border-t border-hairline/70 flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="font-mono text-mono-xs text-accent uppercase tracking-wider shrink-0">
                          Production build:
                        </span>
                        <p className="font-serif text-lg text-ink font-normal italic leading-snug">
                          {service.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
