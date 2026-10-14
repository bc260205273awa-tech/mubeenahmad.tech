'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span'
  lines?: string[]
  children?: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  triggerOnScroll?: boolean
}

export function RevealText({
  as: Component = 'div',
  lines,
  children,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 1.0,
  triggerOnScroll = true,
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Reveal immediately with no animation
      const lineEls = containerRef.current.querySelectorAll('.reveal-inner')
      gsap.set(lineEls, { yPercent: 0, opacity: 1 })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const el = containerRef.current
    const lineEls = el.querySelectorAll('.reveal-inner')

    if (!lineEls.length) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: triggerOnScroll
          ? {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            }
          : undefined,
      })

      tl.fromTo(
        lineEls,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out', // cubic-bezier(0.22, 1, 0.36, 1)
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, duration, stagger, triggerOnScroll])

  // If explicit lines array is provided, mask each line individually
  if (lines && lines.length > 0) {
    return (
      <Component
        ref={containerRef as any}
        className={cn('overflow-hidden', className)}
      >
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden leading-tight">
            <span className="reveal-inner block will-change-transform">
              {line}
            </span>
          </span>
        ))}
      </Component>
    )
  }

  // Fallback for single block of content/children
  return (
    <Component
      ref={containerRef as any}
      className={cn('block overflow-hidden', className)}
    >
      <span className="reveal-inner block will-change-transform">
        {children}
      </span>
    </Component>
  )
}
