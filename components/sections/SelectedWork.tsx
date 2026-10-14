'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { profile, Project } from '@/content/profile'
import { cn } from '@/lib/utils'

interface SelectedWorkProps {
  className?: string
}

export function SelectedWork({ className }: SelectedWorkProps) {
  const featuredProjects = profile.projects.filter((p) => p.featured)
  const moreProjects = profile.projects.filter((p) => !p.featured)

  return (
    <section
      id="work"
      aria-label="Selected Work & Case Studies"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20', className)}
    >
      <Container>
        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="mb-16 sm:mb-20 lg:mb-24 flex flex-col gap-4">
          <SectionLabel number="02" label="Selected Work" />
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal max-w-4xl">
            Systems and sites that people use{' '}
            <em className="font-normal italic text-accent">every day.</em>
          </h2>
          <p className="max-w-2xl text-body-lg text-muted font-sans mt-2">
            Selected production platforms, centralized ERP architecture, and specialized web software.
            Engineered with strict TypeScript, managed backends, and zero unnecessary dependencies.
          </p>
        </div>

        {/* ─── FEATURED PROJECTS (LARGE EDITORIAL ROWS) ───────────────── */}
        <div className="divide-y divide-hairline border-y border-hairline">
          {featuredProjects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0
            const projectNumber = String(index + 1).padStart(2, '0')

            return (
              <article key={project.slug} className="group">
                <Link
                  href={`/work/${project.slug}`}
                  className="block py-16 sm:py-20 lg:py-24 focus-visible:outline-accent"
                  aria-label={`View ${project.title} case study`}
                >
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                    {/* Text Column (Alternating Order) */}
                    <div
                      className={cn(
                        'lg:col-span-5 flex flex-col justify-between',
                        isEven ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'
                      )}
                    >
                      {/* Meta header: Number + Category + Status */}
                      <div className="flex items-center justify-between font-mono text-mono-xs uppercase tracking-wider mb-4">
                        <span className="text-accent font-medium tracking-widest">
                          ({projectNumber}) &bull; {project.category}
                        </span>
                        <span className="border border-hairline bg-surface px-2 py-0.5 text-[10px] text-muted group-hover:text-ink transition-colors">
                          {project.status}
                        </span>
                      </div>

                      {/* Year & Role */}
                      <div className="flex items-center gap-3 font-mono text-mono-xs text-muted uppercase tracking-wider mb-3">
                        <span>{project.year}</span>
                        <span>&bull;</span>
                        <span>{project.role}</span>
                      </div>

                      {/* Title in Serif */}
                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-display-2 text-ink font-normal tracking-tight mb-4">
                        <span className="editorial-link">{project.title}</span>
                      </h3>

                      {/* One-liner */}
                      <p className="text-body-md text-ink/80 leading-relaxed font-sans mb-6">
                        {project.oneLiner}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] text-muted uppercase border border-hairline px-2.5 py-1 bg-surface/40 group-hover:border-ink/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Slide-in Action Label */}
                      <div className="inline-flex items-center gap-2 font-mono text-mono-xs uppercase tracking-widest text-accent transition-colors duration-200">
                        <span>View case study</span>
                        <span aria-hidden="true">&rarr;</span>
                      </div>
                    </div>

                    {/* Image Column (Alternating Order) */}
                    <div
                      className={cn(
                        'lg:col-span-7',
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      )}
                    >
                      <ProjectImage
                        src={project.coverImage}
                        alt={`${project.title} interface preview`}
                        title={project.title}
                        category={project.category}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>

        {/* ─── "MORE BUILDS" CLEAN TABLE LIST ─────────────────────────── */}
        {moreProjects.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-mono text-mono-xs uppercase tracking-widest text-muted block mb-1">
                  ARCHIVE CATALOG
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                  More builds &amp; explorations
                </h3>
              </div>
              <span className="font-mono text-mono-xs text-muted uppercase tracking-wider">
                Showing {moreProjects.length} projects
              </span>
            </div>

            {/* Editorial Table */}
            <div className="border-t border-hairline">
              {moreProjects.map((item: Project) => (
                <div
                  key={item.slug}
                  className="group grid grid-cols-1 gap-2.5 sm:grid-cols-12 sm:items-center py-5 sm:py-6 border-b border-hairline transition-colors duration-200 hover:bg-surface/40 px-2 sm:px-4"
                >
                  {/* Title & Category */}
                  <div className="sm:col-span-5">
                    <Link
                      href={`/work/${item.slug}`}
                      className="font-serif text-xl sm:text-2xl text-ink font-normal editorial-link inline-block focus-visible:outline-accent"
                    >
                      {item.title}
                    </Link>
                    <span className="block font-mono text-[11px] text-muted uppercase mt-0.5">
                      {item.category}
                    </span>
                  </div>

                  {/* Stack */}
                  <div className="sm:col-span-4 font-mono text-[11px] text-muted leading-relaxed">
                    {item.stack.join(' · ')}
                  </div>

                  {/* Mobile flex grouping for Year & Action */}
                  <div className="flex items-center justify-between sm:contents pt-1 sm:pt-0">
                    <div className="sm:col-span-1 font-mono text-mono-xs text-muted">
                      {item.year}
                    </div>

                    <div className="sm:col-span-2 sm:text-right">
                      <Link
                        href={`/work/${item.slug}`}
                        className="font-mono text-mono-xs text-ink uppercase tracking-wider editorial-link hover:text-accent focus-visible:outline-accent py-1 inline-block"
                      >
                        Case study &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
