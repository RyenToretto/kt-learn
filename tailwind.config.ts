import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        hero: ['Cinzel', 'serif']
      },
      colors: {
        // Light Theme
        light: {
          bg: '#fafafa',
          'bg-secondary': '#f4f4f5',
          'bg-tertiary': '#e4e4e7',
          text: '#18181b',
          'text-secondary': '#52525b',
          'text-muted': '#a1a1aa',
          border: '#e4e4e7',
          accent: '#2563eb',
          'accent-hover': '#1d4ed8'
        },
        // Dark Theme  
        dark: {
          bg: '#0a0a0b',
          'bg-secondary': '#18181b',
          'bg-tertiary': '#27272a',
          text: '#fafafa',
          'text-secondary': '#d4d4d8',
          'text-muted': '#71717a',
          border: '#3f3f46',
          accent: '#3b82f6',
          'accent-hover': '#60a5fa'
        },
        // Hero Theme (英雄联盟风格 - 金色/青铜/暗蓝)
        hero: {
          bg: '#010a13',
          'bg-secondary': '#0a1428',
          'bg-tertiary': '#1e2328',
          text: '#f0e6d2',
          'text-secondary': '#c8aa6e',
          'text-muted': '#785a28',
          border: '#463714',
          accent: '#c89b3c',
          'accent-hover': '#f0e6d2',
          gold: '#c89b3c',
          'gold-light': '#f0e6d2',
          'gold-dark': '#785a28',
          bronze: '#cd7f32',
          blue: '#0397ab',
          'blue-dark': '#005a82',
          magic: '#0ac8b9',
          'magic-glow': '#0ff0d7'
        }
      },
      backgroundImage: {
        // Hero theme gradients
        'hero-gradient': 'linear-gradient(135deg, #010a13 0%, #0a1428 50%, #1e2328 100%)',
        'hero-gold': 'linear-gradient(135deg, #785a28 0%, #c89b3c 50%, #f0e6d2 100%)',
        'hero-border': 'linear-gradient(135deg, #463714 0%, #c89b3c 50%, #463714 100%)',
        'hero-card': 'linear-gradient(180deg, rgba(10, 20, 40, 0.95) 0%, rgba(1, 10, 19, 0.98) 100%)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(200, 155, 60, 0.3) 0%, transparent 70%)',
        'hero-magic': 'linear-gradient(135deg, #005a82 0%, #0ac8b9 50%, #0ff0d7 100%)'
      },
      boxShadow: {
        'hero-gold': '0 0 20px rgba(200, 155, 60, 0.5), 0 0 40px rgba(200, 155, 60, 0.2)',
        'hero-magic': '0 0 20px rgba(10, 200, 185, 0.5), 0 0 40px rgba(10, 200, 185, 0.2)',
        'hero-card': '0 4px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(200, 155, 60, 0.1)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.4)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'border-flow': 'borderFlow 3s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }
    }
  },
  plugins: []
} satisfies Config
