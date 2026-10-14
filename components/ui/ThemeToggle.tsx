'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Current theme: ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'group inline-flex items-center gap-1 font-mono text-mono-xs uppercase tracking-widest transition-colors duration-200 select-none cursor-pointer focus-visible:outline-accent py-1',
        className
      )}
    >
      <span
        className={cn(
          'transition-colors duration-200',
          theme === 'light' ? 'text-ink font-semibold' : 'text-muted group-hover:text-ink'
        )}
      >
        Light
      </span>
      <span className="text-hairline select-none px-0.5" aria-hidden="true">
        /
      </span>
      <span
        className={cn(
          'transition-colors duration-200',
          theme === 'dark' ? 'text-ink font-semibold' : 'text-muted group-hover:text-ink'
        )}
      >
        Dark
      </span>
    </button>
  )
}
