'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  number?: string
  label: string
  animate?: boolean
  className?: string
  side?: 'left' | 'right'
}

export function SectionLabel({
  number,
  label,
  animate = false,
  className,
}: SectionLabelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!animate || !containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const el = containerRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [animate])

  // Normalize number format to (01) if provided as '01'
  const formattedNumber = number
    ? number.startsWith('(') ? number : `(${number})`
    : null

  return (
    <div
      ref={containerRef}
      className={cn(
        'inline-flex items-center gap-2 font-mono text-mono-xs uppercase tracking-widest text-muted',
        className
      )}
    >
      {formattedNumber && (
        <span className="text-ink font-medium">{formattedNumber}</span>
      )}
      <span>{label}</span>
    </div>
  )
}
