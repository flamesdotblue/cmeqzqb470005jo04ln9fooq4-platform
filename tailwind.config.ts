import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070612',
          cyan: '#00F5FF',
          magenta: '#FF00C8',
          pink: '#FF4DDE',
          purple: '#6C00FF',
        },
      },
      boxShadow: {
        neon: '0 0 12px rgba(0,245,255,0.75), 0 0 24px rgba(255,0,200,0.45)',
        neonStrong: '0 0 20px rgba(0,245,255,0.95), 0 0 48px rgba(255,0,200,0.6)',
      },
      backgroundImage: {
        'scanlines': 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 4px)',
      },
      animation: {
        flicker: 'flicker 3s infinite both',
        glitch: 'glitch 2.5s infinite',
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        grid: 'grid 18s linear infinite',
        hue: 'hue 12s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px) skew(0.5deg)' },
          '40%': { transform: 'translate(-2px, -1px)' },
          '60%': { transform: 'translate(1px, 1px) skew(-0.5deg)' },
          '80%': { transform: 'translate(2px, -1px)' },
          '100%': { transform: 'translate(0)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.65' },
          '50%': { opacity: '1' }
        },
        grid: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '200px 100px, -200px -100px' }
        },
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' }
        }
      }
    }
  },
  plugins: []
}
export default config
