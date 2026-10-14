'use client'

import React, { useState, useTransition } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { submitContactForm, ContactActionResult } from '@/app/actions/contact'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface ContactProps {
  className?: string
}

type CvRole = 'fullstack' | 'it-officer' | 'systems-analyst'

const CV_OPTIONS: { id: CvRole; label: string; file: string }[] = [
  {
    id: 'fullstack',
    label: 'Full-Stack Developer',
    file: '/cv/mubeen-ahmad-fullstack.pdf',
  },
  {
    id: 'it-officer',
    label: 'IT Officer',
    file: '/cv/mubeen-ahmad-it-officer.pdf',
  },
  {
    id: 'systems-analyst',
    label: 'Systems Analyst',
    file: '/cv/mubeen-ahmad-systems-analyst.pdf',
  },
]

export function Contact({ className }: ContactProps) {
  const [copied, setCopied] = useState(false)
  const [selectedCv, setSelectedCv] = useState<CvRole>('fullstack')
  const [isPending, startTransition] = useTransition()
  const [actionResult, setActionResult] = useState<ContactActionResult | null>(null)

  // Local form state for instant client-side validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot
  })

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      // Fallback
      setCopied(false)
    }
  }

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {}
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please write at least 10 characters.'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    const submissionData = new FormData()
    submissionData.append('name', formData.name)
    submissionData.append('email', formData.email)
    submissionData.append('message', formData.message)
    submissionData.append('website', formData.website)

    startTransition(async () => {
      const result = await submitContactForm(null, submissionData)
      setActionResult(result)
      if (result.success) {
        setFormData({ name: '', email: '', message: '', website: '' })
        setFieldErrors({})
      }
    })
  }

  const activeCvOption =
    CV_OPTIONS.find((opt) => opt.id === selectedCv) || CV_OPTIONS[0]

  return (
    <section
      id="contact"
      aria-label="Contact Mubeen Ahmad"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20 bg-surface/30', className)}
    >
      <Container>
        {/* ─── SECTION LABEL ─────────────────────────────────────────── */}
        <div className="mb-14 sm:mb-20">
          <SectionLabel number="08" label="Contact" />
        </div>

        {/* ─── GIANT SERIF STATEMENT ─────────────────────────────────── */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h2 className="font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal">
            Let&apos;s build something people will{' '}
            <em className="font-normal italic text-accent">actually use.</em>
          </h2>
          <p className="mt-6 text-body-lg text-muted font-sans leading-relaxed max-w-2xl">
            Currently available for remote full-stack engineering roles, systems architecture, and select institutional software builds.
          </p>
        </div>

        {/* ─── TWO-COLUMN CONTACT STRUCTURE ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── LEFT COLUMN: DIRECT CHANNELS & CV SELECTOR ─────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            {/* Large Email Link with Copy-to-Clipboard */}
            <div>
              <span className="font-mono text-mono-xs text-muted uppercase tracking-widest block mb-2">
                Direct Email
              </span>
              <div className="flex flex-wrap items-baseline gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-normal tracking-[-0.02em] editorial-link hover:text-accent transition-colors"
                >
                  {profile.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-mono-xs uppercase tracking-wider px-2.5 py-1 border border-hairline hover:border-ink/40 text-muted hover:text-ink transition-colors duration-150 select-none cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <span className="text-accent font-medium">Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Messaging & Social Links */}
            <div className="pt-8 border-t border-hairline">
              <span className="font-mono text-mono-xs text-muted uppercase tracking-widest block mb-4">
                Connected Profiles & Messaging
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-mono-xs">
                {profile.socials.whatsapp && (
                  <a
                    href={profile.socials.whatsapp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-accent transition-colors py-1 flex items-center justify-between border-b border-hairline/60"
                  >
                    <span>WhatsApp</span>
                    <span>&nearr;</span>
                  </a>
                )}
                <a
                  href={profile.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent transition-colors py-1 flex items-center justify-between border-b border-hairline/60"
                >
                  <span>LinkedIn</span>
                  <span>&nearr;</span>
                </a>
                <a
                  href={profile.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent transition-colors py-1 flex items-center justify-between border-b border-hairline/60"
                >
                  <span>GitHub</span>
                  <span>&nearr;</span>
                </a>
              </div>
            </div>

            {/* Download CV with Role Selector */}
            <div className="pt-8 border-t border-hairline">
              <span className="font-mono text-mono-xs text-muted uppercase tracking-widest block mb-3">
                Download Curriculum Vitae
              </span>
              <p className="text-body-sm text-muted font-sans mb-4">
                Select your focus area to obtain a tailored resume highlighting relevant systems and achievements:
              </p>

              {/* Segmented Role Selector */}
              <div className="flex flex-wrap gap-2 mb-4">
                {CV_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedCv(opt.id)}
                    className={cn(
                      'font-mono text-mono-xs uppercase tracking-wider px-3.5 py-2 min-h-[38px] border transition-colors duration-150 cursor-pointer flex items-center justify-center',
                      selectedCv === opt.id
                        ? 'border-accent text-accent bg-accent/5'
                        : 'border-hairline text-muted hover:text-ink hover:border-ink/30'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Download Action Link */}
              <a
                href={activeCvOption.file}
                download
                className="inline-flex items-center gap-2 font-mono text-mono-xs uppercase tracking-wider text-ink hover:text-accent border border-hairline hover:border-ink/40 bg-surface px-4 py-3 min-h-[44px] transition-colors duration-250 w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Download {activeCvOption.label} CV (PDF)</span>
                <span>&darr;</span>
              </a>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: MINIMAL CONTACT FORM ─────────────────────── */}
          <div className="lg:col-span-6 border border-hairline bg-surface p-5 sm:p-8 lg:p-10">
            <span className="font-mono text-mono-xs text-muted uppercase tracking-widest block mb-6">
              Direct Transmission Form
            </span>

            {/* Plain Text Success Banner */}
            {actionResult?.success ? (
              <div className="p-6 border border-accent/40 bg-accent/5 flex flex-col gap-3">
                <span className="font-mono text-mono-xs text-accent uppercase tracking-wider">
                  Transmission Sent
                </span>
                <p className="text-body-md text-ink font-sans leading-relaxed">
                  {actionResult.message}
                </p>
                <button
                  type="button"
                  onClick={() => setActionResult(null)}
                  className="font-mono text-mono-xs text-muted hover:text-ink underline self-start mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field (hidden from human visitors) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Plain Text Error Summary if API failed */}
                {actionResult && !actionResult.success && (
                  <div className="p-4 border border-hairline bg-surface text-body-sm text-accent font-sans">
                    {actionResult.message}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-mono-xs text-muted uppercase tracking-wider block mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined })
                    }}
                    placeholder="e.g. Tariq Mehmood"
                    className={cn(
                      'w-full bg-bg border px-4 py-3 text-ink font-sans text-body-md transition-colors placeholder:text-muted/40 focus:outline-none',
                      fieldErrors.name ? 'border-accent' : 'border-hairline focus:border-ink/60'
                    )}
                  />
                  {fieldErrors.name && (
                    <span className="font-mono text-mono-xs text-accent block mt-1.5">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-mono-xs text-muted uppercase tracking-wider block mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined })
                    }}
                    placeholder="name@organization.com"
                    className={cn(
                      'w-full bg-bg border px-4 py-3 text-ink font-sans text-body-md transition-colors placeholder:text-muted/40 focus:outline-none',
                      fieldErrors.email ? 'border-accent' : 'border-hairline focus:border-ink/60'
                    )}
                  />
                  {fieldErrors.email && (
                    <span className="font-mono text-mono-xs text-accent block mt-1.5">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-mono-xs text-muted uppercase tracking-wider block mb-2"
                  >
                    Project Scope / Role Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined })
                    }}
                    placeholder="Brief description of the system, team role, or timeline..."
                    className={cn(
                      'w-full bg-bg border px-4 py-3 text-ink font-sans text-body-md transition-colors placeholder:text-muted/40 focus:outline-none resize-y',
                      fieldErrors.message ? 'border-accent' : 'border-hairline focus:border-ink/60'
                    )}
                  />
                  {fieldErrors.message && (
                    <span className="font-mono text-mono-xs text-accent block mt-1.5">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full font-mono text-mono-xs uppercase tracking-wider bg-ink text-bg py-3.5 px-6 hover:bg-accent hover:text-white transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {isPending ? 'Transmitting...' : 'Send Transmission →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
