import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hairline: 'var(--hairline)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Fluid type scale with clamp(); hero headline up to ~9vw
        'display-hero': ['clamp(3.5rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-1': ['clamp(2.75rem, 6vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(2.125rem, 4.2vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-3': ['clamp(1.625rem, 2.8vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'editorial-sub': ['clamp(1.125rem, 1.8vw, 1.5rem)', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'mono-label': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        'mono-xs': ['0.6875rem', { lineHeight: '0.875rem', letterSpacing: '0.09em' }],
      },
      maxWidth: {
        'container': '1360px',
      },
      spacing: {
        'section': 'clamp(96px, 14vw, 200px)',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
        full: '4px', // Enforce 0-4px maximum radius limit
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        'editorial': '900ms',
      },
    },
  },
  plugins: [],
}

export default config
