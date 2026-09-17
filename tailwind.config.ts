import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Surfaces (deep indigo-navy) ──
        void: '#080B1C',
        panel: '#121630',
        lifted: '#1B2143',
        abyss: '#04060F',

        // ── Electric indigo-violet accent ──
        accent: '#5A3AD8',
        'accent-strong': '#7A5AF0',
        'accent-deep': '#0B0B26',
        'accent-tint': 'rgba(90,58,216,0.14)',
        'accent-border': 'rgba(90,58,216,0.34)',
        'accent-border-soft': 'rgba(90,58,216,0.18)',
        'accent-glow': 'rgba(90,58,216,0.45)',

        // ── Gold spark (aiman · #F4C75A) ──
        'teal-primary': '#F4C75A',
        'teal-mid': '#E3B84C',

        // ── Electric azure (tooba) ──
        azure: '#4C8CFF',
        'azure-soft': 'rgba(76,140,255,0.18)',
        'azure-glow': 'rgba(76,140,255,0.4)',

        // ── Text hierarchy ──
        bright: '#F5F5FA',
        muted: '#A6ABBF',
        soft: '#CDD1E6',
        ghost: '#6C7189',

        // ── Borders ──
        'border-strong': '#2A3060',
        'border-soft': '#1E2345',

        // ── Signature gradient: deep blue → electric indigo ──
        'navy-0': '#050A20',
        'navy-1': '#0A1440',
        'navy-2': '#2A2180',
        'navy-3': '#5A3AD8',

        // ══ Legacy aliases ══
        'black-base': '#080B1C',
        'black-2': '#0B0E20',
        'black-3': '#04060F',
        'green-primary': '#5A3AD8',
        'green-hover': '#7A5AF0',
        'green-dark': '#0B0B26',
        'green-mid': '#24175C',
        'green-tinted': '#151033',
        'sage-dark': '#3A2F78',
        'sage-mid': '#A6ABBF',
        'sage-light': '#CDD1E6',
        'frost-white': '#F5F5FA',
        'frost-mint': '#E9E6FF',
        'surface-dark': '#121630',
        'border-dark': '#1E2345',
        'red-danger': '#D44B5A',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)'],
        body: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['24px', { lineHeight: '1.3' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'sm': ['14px', { lineHeight: '1.6' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section-xl': '120px',
        'section-lg': '100px',
        'section-md': '80px',
        'section-sm': '60px',
        'container-px-mobile': '24px',
        'container-px-tablet': '40px',
        'container-px-desktop': '80px',
      },
      borderRadius: {
        'card': '14px',
        'btn-hero': '8px',
        'btn-nav': '6px',
        'btn-form': '10px',
        'badge': '999px',
        'pill': '999px',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
        'color': '150ms',
        'transform': '200ms',
      },
      boxShadow: {
        'focus': '0 0 0 2px #5A3AD8',
        'glow': '0 0 24px rgba(90,58,216,0.45)',
        'glow-soft': '0 0 40px rgba(90,58,216,0.18)',
        'card': '0 1px 0 rgba(245,245,250,0.04) inset, 0 8px 32px rgba(2,3,10,0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config