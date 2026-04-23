'use client'

import { useState, useEffect } from 'react'

// ─── CONFIG — UPDATE THESE ────────────────────────────────
const LAUNCH_DATE = new Date('2026-06-20T00:00:00')

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mubeen-ahmad1123',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MubeenAhmad1123', // TODO: update your GitHub username
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mubeenahmad533/', // TODO: update your Instagram handle
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:MubeenAhma1123@gmail.com', // TODO: update your email
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923218492868', // TODO: update your WhatsApp number
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]
// ──────────────────────────────────────────────────────────

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function pad(n: number) { return String(n).padStart(2, '0') }

export default function Page() {
  const { d, h, m, s } = useCountdown(LAUNCH_DATE)
  const units = [
    { v: d, label: 'Days' },
    { v: h, label: 'Hours' },
    { v: m, label: 'Mins' },
    { v: s, label: 'Secs' },
  ]

  return (
    <main className="page">
      {/* Atmospheric orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Decorative spinning rings */}
      <div className="ring" />
      <div className="ring ring-2" />

      {/* Top bar */}
      <header className="topbar">
        <div className="monogram fade-up d1">
          <span className="monogram-dot" />
          MA
        </div>
        <div className="badge fade-up d1">
          <span className="badge-dot" />
          Available for Projects
        </div>
      </header>

      {/* Hero content */}
      <div className="content">

        {/* Eyebrow */}
        <div className="eyebrow fade-up d2">
          <span className="eyebrow-line" />
          Portfolio
          <span className="eyebrow-line r" />
        </div>

        {/* The central image with flip animation */}
        <div className="hero-image-container fade-up d3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.webp" alt="Mubeen Ahmad" className="hero-image image-flip" />
        </div>

        {/* The name — the star of the show */}
        <h1 className="hero-name-brush fade-up d4">
          Mubeen Ahmad
        </h1>

        {/* Specialty */}
        <p className="specialty fade-up d4">Fullstack Web Developer</p>
        <div className="niche-row fade-up d4">
          <span className="niche-item">Healthcare Tech</span>
          <span className="niche-sep" />
          <span className="niche-item">AI Applications</span>
          <span className="niche-sep" />
          <span className="niche-item">Digital Experiences</span>
        </div>

        {/* Divider */}
        <div className="divider fade-up d5" />

        {/* Tagline */}
        <p className="tagline fade-up d5">
          Something extraordinary is being crafted.
        </p>

        {/* Countdown */}
        <div className="countdown fade-up d6">
          {units.map(({ v, label }, i) => (
            <>
              <div key={label} className="cd-unit">
                <span className="cd-value">{pad(v)}</span>
                <span className="cd-label">{label}</span>
              </div>
              {i < units.length - 1 && (
                <span key={`sep-${i}`} className="cd-sep">:</span>
              )}
            </>
          ))}
        </div>

        {/* Social links */}
        <div className="socials fade-up d7">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="social-link"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-text">mubeenahmad.tech</span>
        <div className="footer-location footer-text">
          <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10" style={{ opacity: 0.5 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Pakistan · © 2026
        </div>
      </footer>
    </main>
  )
}
