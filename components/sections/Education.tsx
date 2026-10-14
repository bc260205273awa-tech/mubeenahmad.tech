'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface EducationProps {
  className?: string
}

export function Education({ className }: EducationProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const noteRef = useRef<HTMLDivElement | null>(null)

  const { education, educationSelfTaughtNote } = profile

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
      id="education"
      aria-label="Education & Academic Background"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20', className)}
    >
      <Container>
        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <SectionLabel number="06" label="Education" />
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal mt-4">
            Academic credentials &amp;{' '}
            <em className="font-normal italic text-accent">self-taught discipline.</em>
          </h2>
          <p className="mt-4 text-body-lg text-muted font-sans leading-relaxed">
            Formal foundations in computer science and mathematics, grounded by practical systems engineering under live operational constraints.
          </p>
        </div>

        {/* ─── VERTICAL EDITORIAL TIMELINE ────────────────────────────── */}
        <div className="flex flex-col">
          {education?.map((item, idx) => (
            <div
              key={`${item.institution}-${idx}`}
              ref={(el) => {
                rowsRef.current[idx] = el
              }}
              className="relative py-10 sm:py-12 first:pt-0"
            >
              {/* Animated Hairline */}
              <div className="timeline-hairline absolute top-0 left-0 right-0 h-[1px] bg-hairline" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-baseline">
                {/* Left Column: Mono Date */}
                <div className="timeline-text md:col-span-3">
                  <span className="font-mono text-mono-xs sm:text-mono-sm text-ink font-medium tracking-wider block">
                    {item.period}
                  </span>
                  <span className="font-mono text-mono-xs text-muted block mt-1">
                    {item.location}
                  </span>
                </div>

                {/* Right Column: Degree & Institution */}
                <div className="timeline-text md:col-span-9 flex flex-col">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-[-0.015em]">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-mono-xs text-accent mt-1.5 uppercase tracking-wider block">
                    {item.institution}
                  </span>
                  {item.details && (
                    <p className="mt-4 text-body-sm sm:text-body-md text-ink/80 font-sans leading-relaxed max-w-2xl">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── SELF-TAUGHT DEVELOPER TRUTH LINE ───────────────────────── */}
        {educationSelfTaughtNote && (
          <div ref={noteRef} className="relative mt-12 sm:mt-16 pt-8 sm:pt-10">
            <div className="note-hairline absolute top-0 left-0 right-0 h-[1px] bg-hairline" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="note-text md:col-span-3">
                <span className="font-mono text-mono-xs text-accent uppercase tracking-widest block">
                  Foundational Truth
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="note-text font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal tracking-[-0.015em]">
                  &ldquo;{educationSelfTaughtNote}&rdquo;
                </p>
                <p className="note-text mt-3 text-body-sm sm:text-body-md text-muted font-sans leading-relaxed max-w-2xl">
                  Degrees establish baseline rigor; real production builds demonstrate engineering capability. Everything I understand about scalable state, role permissions, and managed cloud databases was proven while shipping systems that people count on every single day.
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
