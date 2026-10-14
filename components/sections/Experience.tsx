'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface ExperienceProps {
  className?: string
}

export function Experience({ className }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const noteRef = useRef<HTMLDivElement | null>(null)

  const { experience, experienceAdminNote } = profile

  useEffect(() => {
    if (!sectionRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const validRows = rowsRef.current.filter(Boolean)

      validRows.forEach((row) => {
        if (!row) return
        const hairline = row.querySelector<HTMLElement>('.timeline-hairline')
        const textElements = row.querySelectorAll<HTMLElement>('.timeline-text')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        if (hairline) {
          tl.fromTo(
            hairline,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.6, ease: 'power2.out' }
          )
        }

        if (textElements.length > 0) {
          tl.fromTo(
            textElements,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' },
            hairline ? '-=0.4' : 0
          )
        }
      })

      if (noteRef.current) {
        const noteHairline = noteRef.current.querySelector<HTMLElement>('.note-hairline')
        const noteText = noteRef.current.querySelectorAll<HTMLElement>('.note-text')

        const noteTl = gsap.timeline({
          scrollTrigger: {
            trigger: noteRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })

        if (noteHairline) {
          noteTl.fromTo(
            noteHairline,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.6, ease: 'power2.out' }
          )
        }

        if (noteText.length > 0) {
          noteTl.fromTo(
            noteText,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
            noteHairline ? '-=0.4' : 0
          )
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="Experience & Ledgers"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20 bg-surface/30', className)}
    >
      <Container>
        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <SectionLabel number="05" label="Experience" />
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal mt-4">
            Production history &amp;{' '}
            <em className="font-normal italic text-accent">operating roles.</em>
          </h2>
          <p className="mt-4 text-body-lg text-muted font-sans leading-relaxed">
            Verifiable experience architecting institutional platforms, co-founding an engineering studio, and delivering production systems used daily by staff and clients.
          </p>
        </div>

        {/* ─── VERTICAL EDITORIAL TIMELINE ────────────────────────────── */}
        <div className="flex flex-col">
          {experience.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              ref={(el) => {
                rowsRef.current[idx] = el
              }}
              className="relative py-10 sm:py-14 first:pt-0"
            >
              {/* Animated Hairline (Top of each row) */}
              <div className="timeline-hairline absolute top-0 left-0 right-0 h-[1px] bg-hairline" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-baseline">
                {/* Left Column: Mono Date */}
                <div className="timeline-text md:col-span-3">
                  <span className="font-mono text-mono-xs sm:text-mono-sm text-ink font-medium tracking-wider block">
                    {exp.period}
                  </span>
                  <span className="font-mono text-mono-xs text-muted block mt-1">
                    {exp.location}
                  </span>
                </div>

                {/* Right Column: Role, Org, In Simple Words, Bullets */}
                <div className="md:col-span-9 flex flex-col">
                  {/* Role & Org */}
                  <div className="timeline-text">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal tracking-[-0.015em]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-mono-xs text-accent mt-1.5 uppercase tracking-wider">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline underline-offset-4"
                        >
                          {exp.company} &nearr;
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  {/* "In simple words" Sentence (Khan Hub Entry) */}
                  {exp.simpleWords && (
                    <div className="timeline-text mt-6 p-5 sm:p-6 border border-hairline bg-surface/80">
                      <span className="font-mono text-mono-xs text-accent uppercase tracking-widest block mb-2">
                        In simple words
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-ink font-normal italic leading-snug">
                        {exp.simpleWords}
                      </p>
                    </div>
                  )}

                  {/* Outcome-focused Bullets */}
                  <ul className="timeline-text mt-6 space-y-3">
                    {exp.accomplishments.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-body-sm sm:text-body-md text-ink/85 font-sans leading-relaxed flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="font-mono text-mono-xs text-accent select-none pt-0.5 shrink-0"
                        >
                          &mdash;
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mono Technologies Line */}
                  <div className="timeline-text mt-6 pt-4 border-t border-hairline/60">
                    <span className="font-mono text-mono-xs text-muted tracking-wider uppercase block">
                      {exp.technologies.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── ADMINISTRATIVE / IT OFFICER OPERATIONAL NOTE ───────────── */}
        {experienceAdminNote && (
          <div ref={noteRef} className="relative mt-12 sm:mt-16 pt-8 sm:pt-10">
            <div className="note-hairline absolute top-0 left-0 right-0 h-[1px] bg-hairline" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="note-text md:col-span-3">
                <span className="font-mono text-mono-xs text-accent uppercase tracking-widest block">
                  Operational Experience
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="note-text font-serif text-2xl sm:text-3xl text-ink font-normal italic leading-snug tracking-[-0.015em]">
                  &ldquo;{experienceAdminNote}&rdquo;
                </p>
                <p className="note-text mt-3 text-body-sm sm:text-body-md text-muted font-sans leading-relaxed max-w-2xl">
                  Direct operational relevance for IT Officer and administrative roles: I don&apos;t build software in an academic vacuum. Having reconciled cashier cash balances and managed fee registers firsthand, I design permission boundaries and audit ledgers that real staff can run reliably every day.
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
