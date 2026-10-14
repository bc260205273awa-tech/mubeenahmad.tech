'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProjectImageProps {
  src: string
  alt: string
  title: string
  category?: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function ProjectImage({
  src,
  alt,
  title,
  category,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={cn(
        'relative aspect-[16/10] w-full overflow-hidden border border-hairline bg-surface select-none group/img',
        className
      )}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setHasError(true)}
          className="object-cover object-top filter contrast-[1.02] group-hover/img:contrast-105 transition-[filter,opacity] duration-500 ease-editorial"
        />
      ) : (
        /* ─── FRAMED EDITORIAL PLACEHOLDER ─────────────────────────── */
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-surface">
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-mono-xs uppercase tracking-widest text-muted">
            <span>SPECIMEN ARCHIVE</span>
            <span className="text-accent">&bull; PENDING CAPTURE</span>
          </div>

          {/* Center Title Wordmark */}
          <div className="my-auto text-center py-4">
            <span className="font-serif text-2xl sm:text-3xl text-ink/80 block font-normal tracking-tight">
              {title}
            </span>
            {category && (
              <span className="font-mono text-mono-xs text-muted block mt-1.5 uppercase tracking-wider">
                {category}
              </span>
            )}
          </div>

          {/* Bottom hairline frame info */}
          <div className="pt-3 hairline-t flex items-center justify-between font-mono text-[10px] text-muted/70 uppercase tracking-widest">
            <span>/public/work/[slug]/cover.webp</span>
            <span>RATIO 16:10</span>
          </div>
        </div>
      )}
    </div>
  )
}
