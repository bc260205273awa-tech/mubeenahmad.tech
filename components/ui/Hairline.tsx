'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

interface HairlineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  animate?: boolean
  className?: string
}

export function Hairline({
  orientation = 'horizontal',
  animate = false,
  className,
  ...props
}: HairlineProps) {
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!animate || !lineRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const el = lineRef.current
    const isHorizontal = orientation === 'horizontal'

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          scaleX: isHorizontal ? 0 : 1,
          scaleY: isHorizontal ? 1 : 0,
          transformOrigin: isHorizontal ? 'left center' : 'top center',
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 0.9,
          ease: 'power3.out', // corresponds to cubic-bezier(0.22, 1, 0.36, 1)
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [animate, orientation])

  return (
    <div
      ref={lineRef}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-hairline',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
}
