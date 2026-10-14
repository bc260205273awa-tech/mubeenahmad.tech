import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center font-mono uppercase tracking-wider text-mono-xs transition-colors duration-200 select-none cursor-pointer focus-visible:outline-accent disabled:opacity-40 disabled:cursor-not-allowed rounded-none'

  const variantStyles = {
    primary:
      'bg-ink text-bg border border-ink hover:bg-accent hover:border-accent hover:text-[#FFFFFF]',
    ghost:
      'bg-transparent text-ink border border-hairline hover:border-ink hover:text-ink',
    accent:
      'bg-accent text-[#FFFFFF] border border-accent hover:bg-ink hover:border-ink hover:text-bg',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-mono-xs',
    md: 'px-5 py-2.5 text-mono-xs',
    lg: 'px-6 py-3.5 text-body-sm font-mono',
  }

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
