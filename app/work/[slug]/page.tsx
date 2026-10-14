import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Container, SectionLabel, ProjectImage, Hairline, Button } from '@/components/ui'
import { Navigation } from '@/components/sections/Navigation'
import { profile, Project } from '@/content/profile'
import { cn } from '@/lib/utils'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return profile.projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = profile.projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Case Study Not Found' }

  const ogImageUrl = project.coverImage || '/og-image.png'

  return {
    title: `${project.title} — Case Study | Mubeen Ahmad`,
    description: project.oneLiner,
    alternates: {
      canonical: `https://mubeenahmad.tech/work/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://mubeenahmad.tech/work/${project.slug}`,
      title: `${project.title} — Case Study | Mubeen Ahmad`,
      description: project.oneLiner,
      siteName: 'Mubeen Ahmad',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study | Mubeen Ahmad`,
      description: project.oneLiner,
      images: [ogImageUrl],
    },
  }
}

export default function WorkCaseStudyPage({ params }: PageProps) {
  const projectIndex = profile.projects.findIndex((p) => p.slug === params.slug)
  if (projectIndex === -1) notFound()

  const project: Project = profile.projects[projectIndex]
  const nextProject: Project = profile.projects[(projectIndex + 1) % profile.projects.length]

  return (
    <div className="relative min-h-screen bg-bg text-ink transition-colors duration-250">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 outline-none">
        <Container>
          {/* ─── TOP BACK LINK ────────────────────────────────────────── */}
          <div className="mb-10 sm:mb-12">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 font-mono text-mono-xs uppercase tracking-widest text-muted hover:text-ink transition-colors focus-visible:outline-accent"
            >
              <span>&larr;</span>
              <span className="editorial-link">All Selected Work</span>
            </Link>
          </div>

          {/* ─── 1. HEADER: TITLE & 4-COLUMN MONO METADATA ─────────────── */}
          <header className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 font-mono text-mono-xs uppercase tracking-widest text-accent mb-4">
              <span>CASE STUDY</span>
              <span className="text-hairline" aria-hidden="true">&bull;</span>
              <span>{project.category}</span>
            </div>

            <h1 className="font-serif text-display-1 text-ink font-normal mb-8 max-w-5xl">
              {project.title}
            </h1>

            <p className="max-w-3xl text-body-lg sm:text-xl text-ink/80 leading-relaxed font-sans mb-10">
              {project.oneLiner}
            </p>

            {/* 4-Column Mono Metadata Row */}
            <div className="hairline-y py-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-mono-xs uppercase">
              <div>
                <span className="text-muted block text-[10px] tracking-widest">ROLE</span>
                <span className="text-ink font-medium mt-1 block tracking-wider">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="text-muted block text-[10px] tracking-widest">TIMELINE</span>
                <span className="text-ink font-medium mt-1 block tracking-wider">
                  {project.year}
                </span>
              </div>

              <div>
                <span className="text-muted block text-[10px] tracking-widest">STACK</span>
                <span className="text-ink font-medium mt-1 block tracking-wider truncate" title={project.stack.join(', ')}>
                  {project.stack.slice(0, 3).join(', ')}
                </span>
              </div>

              <div>
                <span className="text-muted block text-[10px] tracking-widest">STATUS</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                  <span className="text-ink font-medium tracking-wider">
                    {project.status}
                  </span>
                  {project.liveUrl && project.liveUrl !== 'TODO_REAL_VALUE' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-accent hover:underline text-[10px]"
                    >
                      LIVE ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Visible Privacy Note (if present) */}
            {project.caseStudy.privacyNote && (
              <div className="mt-4 py-2.5 px-3 border border-hairline bg-surface/50 font-mono text-[11px] text-muted leading-relaxed">
                <strong className="text-ink font-medium mr-1 uppercase tracking-wider">Privacy Note:</strong>
                {project.caseStudy.privacyNote}
              </div>
            )}
          </header>

          {/* ─── 2. FULL-WIDTH COVER IMAGE IN PLAIN FRAME ─────────────── */}
          <section className="mb-20 sm:mb-28">
            <ProjectImage
              src={project.coverImage}
              alt={`${project.title} Cover Specimen`}
              title={project.title}
              category={project.category}
              priority
              sizes="100vw"
            />
          </section>

          {/* ─── 3. THE PROBLEM (LEFT LABEL, RIGHT TEXT) ───────────────── */}
          <section className="py-16 sm:py-20 hairline-b">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel number="01" label="The Problem" />
                <span className="font-mono text-mono-xs text-muted block mt-2 uppercase tracking-wider">
                  Context &amp; Operational Friction
                </span>
              </div>

              <div className="lg:col-span-8">
                <p className="text-body-lg sm:text-xl text-ink font-sans leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>
            </div>
          </section>

          {/* ─── 4. WHAT I BUILT (NUMBERED LIST WITH HAIRLINES) ────────── */}
          <section className="py-16 sm:py-20 hairline-b">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel number="02" label="What I Built" />
                <span className="font-mono text-mono-xs text-muted block mt-2 uppercase tracking-wider">
                  Granular Deliverables &bull; {project.caseStudy.whatIDid.length} Milestones
                </span>
              </div>

              <div className="lg:col-span-8">
                <ol className="divide-y divide-hairline border-y border-hairline">
                  {project.caseStudy.whatIDid.map((item, index) => {
                    const numberStr = String(index + 1).padStart(2, '0')
                    return (
                      <li
                        key={index}
                        className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                      >
                        <span className="sm:col-span-2 font-mono text-mono-xs text-accent font-medium tracking-widest select-none">
                          ({numberStr})
                        </span>
                        <span className="sm:col-span-10 text-body-md sm:text-body-lg text-ink font-sans leading-relaxed">
                          {item}
                        </span>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </section>

          {/* ─── 5. DECISIONS THAT MATTERED (SENIOR THINKING) ──────────── */}
          <section className="py-16 sm:py-20 hairline-b">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel number="03" label="Decisions that mattered" />
                <span className="font-mono text-mono-xs text-muted block mt-2 uppercase tracking-wider">
                  Architectural Reasoning &amp; Tradeoffs
                </span>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-8">
                {project.caseStudy.decisions.map((decision, index) => (
                  <div
                    key={index}
                    className="border border-hairline bg-surface p-6 sm:p-8 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2 font-mono text-mono-xs text-muted">
                      <span className="text-accent font-medium tracking-widest">
                        DECISION 0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-sans font-semibold text-lg sm:text-xl text-ink leading-snug">
                      {decision.lead}
                    </h3>

                    <p className="text-body-md text-ink/80 leading-relaxed font-sans border-t border-hairline pt-3 mt-1">
                      {decision.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── 6. SCREENSHOT GALLERY (ALTERNATING FULL & TWO-UP) ─────── */}
          {project.caseStudy.gallery && project.caseStudy.gallery.length > 0 && (
            <section className="py-16 sm:py-20 hairline-b">
              <div className="mb-10 sm:mb-12 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <SectionLabel number="04" label="Screenshot Gallery" />
                  <span className="font-mono text-mono-xs text-muted block mt-1 uppercase tracking-wider">
                    Interface Records &bull; Captured Specimen
                  </span>
                </div>
                <span className="font-mono text-mono-xs text-muted">
                  {project.caseStudy.gallery.length} Exhibits
                </span>
              </div>

              <div className="grid grid-cols-12 gap-8 sm:gap-10">
                {project.caseStudy.gallery.map((exhibit, index) => {
                  const isFull = exhibit.fullWidth ?? false
                  const exhibitNum = String(index + 1).padStart(2, '0')

                  return (
                    <div
                      key={index}
                      className={cn(
                        'flex flex-col gap-3',
                        isFull ? 'col-span-12' : 'col-span-12 md:col-span-6'
                      )}
                    >
                      <ProjectImage
                        src={exhibit.image}
                        alt={`${project.title} - Exhibit ${exhibitNum}`}
                        title={`${project.title} [${exhibitNum}]`}
                        category={project.category}
                        sizes={isFull ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                      />
                      <div className="flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                        <span className="text-accent font-medium">[{exhibitNum}]</span>
                        <span>{exhibit.caption}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* ─── 7. OUTCOME (PLAIN STATEMENTS, NO BUZZWORDS) ───────────── */}
          <section className="py-16 sm:py-20 hairline-b">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel number="05" label="Production Outcome" />
                <span className="font-mono text-mono-xs text-muted block mt-2 uppercase tracking-wider">
                  Verifiable Daily Utility
                </span>
              </div>

              <div className="lg:col-span-8">
                <div className="border border-hairline bg-surface p-8 sm:p-10 flex flex-col gap-5">
                  {project.caseStudy.outcome.map((statement, index) => (
                    <div key={index} className="flex items-baseline gap-3.5">
                      <span
                        className="h-1.5 w-1.5 bg-accent shrink-0 rounded-none mt-2"
                        aria-hidden="true"
                      />
                      <p className="text-body-lg text-ink font-sans leading-relaxed">
                        {statement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── 8. NEXT PROJECT LINK (GIANT SERIF LINK) ───────────────── */}
          <div className="pt-20 sm:pt-28">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-mono-xs uppercase tracking-widest text-muted">
                NEXT CASE STUDY &rarr;
              </span>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group block font-serif text-[clamp(2.75rem,7vw,6.5rem)] text-ink leading-[0.95] tracking-[-0.035em] font-normal hover:text-accent transition-colors duration-200"
                aria-label={`Advance to next project: ${nextProject.title}`}
              >
                <span className="editorial-link">{nextProject.title}</span>
              </Link>
              <div className="flex items-center gap-3 font-mono text-mono-xs uppercase tracking-wider text-muted mt-2">
                <span>{nextProject.category}</span>
                <span>&bull;</span>
                <span>{nextProject.year}</span>
                <span className="ml-auto text-accent">
                  Read Case Study &rarr;
                </span>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="py-12 hairline-t bg-bg">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-mono-xs text-muted">
          <div>
            <span className="text-ink uppercase tracking-wider font-medium">
              {profile.name}
            </span>{' '}
            &bull; {profile.location.display}
          </div>
          <div className="uppercase tracking-widest text-[10px]">
            &copy; 2026 MUBEEN AHMAD &bull; ALL RIGHTS RESERVED
          </div>
        </Container>
      </footer>
    </div>
  )
}
