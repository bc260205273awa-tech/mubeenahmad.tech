import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  external?: boolean
  showArrow?: boolean
  children: React.ReactNode
  className?: string
}

export function TextLink({
  href,
  external = false,
  showArrow = false,
  children,
  className,
  ...props
}: TextLinkProps) {
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:')

  const content = (
    <>
      <span className="editorial-link">{children}</span>
      {showArrow && (
        <span
          className="ml-1 inline-block text-[0.8em]"
          aria-hidden="true"
        >
          ↗
        </span>
      )}
    </>
  )

  const classes = cn(
    'group inline-flex items-baseline text-ink transition-colors duration-200 hover:text-accent focus-visible:outline-accent',
    className
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  )
}
