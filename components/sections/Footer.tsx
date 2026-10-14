'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [pakistanTime, setPakistanTime] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        setPakistanTime(formatter.format(new Date()))
      } catch {
        // Fallback
        const now = new Date()
        setPakistanTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      aria-label="Site Footer"
      className={cn('relative border-t border-hairline bg-bg py-12 sm:py-16 select-none', className)}
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between font-mono text-mono-xs text-muted">
          {/* Left Block: Name, Year, Location */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-ink font-medium uppercase tracking-wider">
              {profile.name}
            </span>
            <span aria-hidden="true" className="text-hairline">
              &bull;
            </span>
            <span>&copy; 2026</span>
            <span aria-hidden="true" className="text-hairline">
              &bull;
            </span>
            <span>Vehari, Pakistan</span>
          </div>

          {/* Center / Right Block: Live Pakistan Time & Back to Top */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span>
                PKT (UTC+5):{' '}
                <span className="text-ink font-medium">
                  {mounted ? (pakistanTime || '--:--') : '--:--'}
                </span>
              </span>
            </div>

            <button
              type="button"
              onClick={handleBackToTop}
              className="group flex items-center gap-1.5 text-ink hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <span>&uarr;</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
