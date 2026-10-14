'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Work', href: '#work', number: '01' },
  { label: 'Experience', href: '#experience', number: '02' },
  { label: 'About', href: '#about', number: '03' },
  { label: 'Contact', href: '#contact', number: '04' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollYRef = useRef(0)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const openButtonRef = useRef<HTMLButtonElement | null>(null)

  // Track scroll direction for smart auto-hide and background solid state
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          const lastY = lastScrollYRef.current
          const diff = currentY - lastY

          if (currentY <= 30) {
            // At the top: fully visible, transparent background, no border
            setIsVisible(true)
            setIsScrolled(false)
          } else {
            setIsScrolled(true)
            if (diff > 8) {
              // Scrolling down: hide navigation
              setIsVisible(false)
            } else if (diff < -8) {
              // Scrolling up: reveal navigation with solid bg & hairline border
              setIsVisible(true)
            }
          }

          lastScrollYRef.current = currentY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      // Focus the close button when opened
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
      openButtonRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Handle Escape key to close mobile menu & trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }

      if (e.key === 'Tab' && menuOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-editorial select-none',
          isVisible ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-bg hairline-b' : 'bg-transparent border-transparent'
        )}
      >
        <Container className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left: Monogram / Name in Serif */}
          <Link
            href="/"
            className="group flex items-baseline gap-2 text-ink focus-visible:outline-accent"
            aria-label="Mubeen Ahmad - Home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-tight font-normal text-ink group-hover:text-accent transition-colors duration-200">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Nav: Center/Right Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-mono-xs uppercase tracking-widest text-muted"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="editorial-link py-1 hover:text-ink focus-visible:outline-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle & Download CV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-mono-xs uppercase tracking-wider">
            <ThemeToggle />
            <span className="h-3 w-[1px] bg-hairline" aria-hidden="true" />
            <a
              href="/mubeen-ahmad-cv.pdf"
              download="Mubeen_Ahmad_CV.pdf"
              className="editorial-link font-mono text-mono-xs text-ink uppercase tracking-wider py-1 hover:text-accent focus-visible:outline-accent transition-colors duration-200"
            >
              Download CV <span className="ml-0.5 text-[0.8em]">↓</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              ref={openButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open Navigation Menu"
              className="font-mono text-mono-xs uppercase tracking-widest text-ink border border-hairline bg-surface px-3.5 py-2 min-h-[44px] flex items-center justify-center hover:border-ink focus-visible:outline-accent active:bg-ink active:text-bg transition-colors"
            >
              Menu
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={cn(
          'fixed inset-0 z-50 flex flex-col justify-between bg-bg p-6 sm:p-10 pt-safe pb-safe transition-opacity duration-300 md:hidden overflow-y-auto',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Top bar inside mobile overlay */}
        <div className="flex items-center justify-between hairline-b pb-4">
          <span className="font-serif text-xl tracking-tight text-ink">
            {profile.name}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="font-mono text-mono-xs uppercase tracking-widest text-ink border border-hairline bg-surface px-4 py-2 min-h-[44px] flex items-center justify-center hover:border-ink focus-visible:outline-accent active:bg-ink active:text-bg transition-colors"
          >
            Close
          </button>
        </div>

        {/* Large Serif Links with staggered numbers */}
        <nav
          aria-label="Mobile Navigation Links"
          className="my-auto flex flex-col gap-5 py-6 sm:py-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="group flex items-baseline gap-4 text-ink focus-visible:outline-accent min-h-[48px] py-1"
            >
              <span className="font-mono text-mono-xs text-muted">
                ({link.number})
              </span>
              <span className="font-serif text-[clamp(2rem,8vw,3.25rem)] tracking-tight group-hover:text-accent transition-colors duration-200">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom Bar: Theme toggle and Download CV */}
        <div className="flex flex-col gap-4 hairline-t pt-6 font-mono text-mono-xs uppercase tracking-wider">
          <div className="flex items-center justify-between">
            <span className="text-muted">Display Preference</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-muted">Curriculum Vitae</span>
            <a
              href="/mubeen-ahmad-cv.pdf"
              download="Mubeen_Ahmad_CV.pdf"
              className="editorial-link text-ink hover:text-accent"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
