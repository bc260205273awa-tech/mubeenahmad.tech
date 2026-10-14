'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface TrustProps {
  className?: string
}

export function Trust({ className }: TrustProps) {
  const { trust } = profile

  return (
    <section
      id="trust"
      aria-label="Client Trust & Verification"
      className={cn(
        'relative border-t border-hairline bg-surface/30 py-12 sm:py-16 md:py-20 select-none',
        className
      )}
    >
      <Container>
        {/* ─── HEADER: LABEL & METRIC STATUS ─────────────────────────── */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between pb-6 sm:pb-8">
          <SectionLabel number="01" label={trust.label} />
          <span className="font-mono text-mono-xs text-muted uppercase tracking-wider">
            Verified Production Software &bull; 2025–Present
          </span>
        </div>

        {/* ─── ROW 1: TYPOGRAPHIC WORDMARKS WITH DESCRIPTORS ──────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-hairline border-y border-hairline">
          {trust.organizations.map((org, idx) => {
            const Content = (
              <div className="group flex flex-col justify-between p-5 sm:p-7 transition-colors duration-200">
                <div className="min-h-[3.25rem] flex items-center">
                  <span className="font-serif text-xl sm:text-2xl text-muted group-hover:text-ink transition-colors duration-200 font-normal tracking-tight editorial-link">
                    {org.name}
                  </span>
                </div>
                <div className="pt-3 font-mono text-mono-xs uppercase tracking-wider text-muted/80">
                  {org.descriptor}
                </div>
              </div>
            )

            if (org.url) {
              return (
                <a
                  key={idx}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-accent"
                  aria-label={`${org.name} - ${org.descriptor}`}
                >
                  {Content}
                </a>
              )
            }

            return (
              <div key={idx} className="block">
                {Content}
              </div>
            )
          })}
        </div>

        {/* ─── ROW 2: "WHAT THAT MEANS" (3-COLUMN LUXURY PRINCIPLES) ──── */}
        <div className="pt-10 sm:pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trust.principles.map((principle) => (
            <div
              key={principle.index}
              className="flex flex-col gap-2.5"
            >
              <div className="flex items-baseline gap-2 font-mono text-mono-xs">
                <span className="text-accent font-medium">({principle.index})</span>
                <span className="text-ink font-medium tracking-tight text-body-sm font-sans uppercase">
                  &ldquo;{principle.title}&rdquo;
                </span>
              </div>
              <p className="text-body-sm text-muted leading-relaxed font-sans pl-6 sm:pl-7 border-l border-hairline/60">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
