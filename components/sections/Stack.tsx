'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface StackProps {
  className?: string
}

export function Stack({ className }: StackProps) {
  const { skills, skillsGrowthNote } = profile

  // Define which technologies receive editorial serif emphasis
  const isFlagshipSerif = (item: string) => {
    const serifKeywords = [
      'Next.js',
      'React',
      'Vue.js',
      'Firebase',
      'Supabase',
      'Node.js',
      'Groq API',
      'Llama 3.3 70B',
      'Git & GitHub',
      'Vercel',
    ]
    return serifKeywords.some((keyword) => item.includes(keyword))
  }

  return (
    <section
      id="stack"
      aria-label="Stack — Typographic Technical Index"
      className={cn('relative py-24 sm:py-32 hairline-b scroll-mt-20', className)}
    >
      <Container>
        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <SectionLabel number="04" label="Stack" />
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ink font-normal mt-4">
            Typographic index of{' '}
            <em className="font-normal italic text-accent">production tools.</em>
          </h2>
          <p className="mt-4 text-body-lg text-muted font-sans leading-relaxed">
            Deliberately indexed by engineering discipline. No percentage skill meters or inflated progress bars—just the tools, runtime systems, and libraries used to ship daily software.
          </p>
        </div>

        {/* ─── TYPOGRAPHIC INDEX ──────────────────────────────────────── */}
        <div className="divide-y divide-hairline border-y border-hairline">
          {skills.map((group) => (
            <div
              key={group.group}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline"
            >
              {/* Left Column: Mono Group Label */}
              <div className="md:col-span-3">
                <span className="font-mono text-mono-xs text-muted uppercase tracking-widest block">
                  {group.group}
                </span>
              </div>

              {/* Right Column: Flowing line of serif/sans names separated by thin slashes */}
              <div className="md:col-span-9 leading-relaxed">
                <div className="flex flex-wrap items-baseline gap-y-3">
                  {group.items.map((item, idx) => {
                    const isSerif = isFlagshipSerif(item)

                    return (
                      <React.Fragment key={item}>
                        <span
                          className={cn(
                            'transition-colors duration-200 hover:text-accent cursor-default select-none',
                            isSerif
                              ? 'font-serif text-2xl sm:text-3xl text-ink font-normal tracking-[-0.015em]'
                              : 'font-sans text-base sm:text-lg text-ink/90 font-medium tracking-tight'
                          )}
                        >
                          {item}
                        </span>

                        {idx < group.items.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="font-sans text-muted/30 font-light mx-2.5 sm:mx-3.5 select-none text-base sm:text-lg"
                          >
                            /
                          </span>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── HONEST GROWTH VECTOR LINE ───────────────────────────────── */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-hairline">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-3">
              <span className="font-mono text-mono-xs text-accent uppercase tracking-widest block">
                Active Growth
              </span>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink font-normal tracking-[-0.015em]">
                &ldquo;{skillsGrowthNote}&rdquo;
              </p>
              <p className="mt-3 text-body-sm sm:text-body-md text-muted font-sans leading-relaxed max-w-2xl">
                While managed backends like Firebase and Supabase power my current production builds, I am actively expanding deeper into raw Node.js runtime mechanics, high-concurrency patterns, and backend architecture.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
