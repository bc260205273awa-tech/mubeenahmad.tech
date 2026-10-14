import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export function Container({
  as: Component = 'div',
  children,
  className,
  noPadding = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-container',
        !noPadding && 'px-4 sm:px-6 md:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
