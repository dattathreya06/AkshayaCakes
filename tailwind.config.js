/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vanilla': '#F8F4EE',
        'cocoa': '#4A2C2A',
        'gold': '#C28B52',
        'almond': '#E8D8C4',
        'espresso': '#2B1D1B',
        'warm-milk': '#FFFDF9',
        'cocoa-light': '#6B3F3C',
        'gold-light': '#D4A574',
        'gold-dark': '#A07040',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['42px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['24px', { lineHeight: '1.3' }],
        'body': ['17px', { lineHeight: '1.7' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(135deg, #F8F4EE 0%, #FFFDF9 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(44,26,22,0.88), rgba(44,26,22,0.2))',
        'dark-overlay': 'linear-gradient(135deg, rgba(44,26,22,0.92) 0%, rgba(74,44,42,0.85) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C28B52, #D4A574)',
        'warm-gradient': 'linear-gradient(135deg, #4A2C2A, #6B3F3C)',
      },
      boxShadow: {
        'warm': '0 8px 32px rgba(74, 44, 42, 0.15)',
        'warm-lg': '0 16px 48px rgba(74, 44, 42, 0.2)',
        'warm-xl': '0 24px 64px rgba(74, 44, 42, 0.25)',
        'gold': '0 8px 32px rgba(194, 139, 82, 0.3)',
        'gold-lg': '0 16px 48px rgba(194, 139, 82, 0.4)',
        'glass': '0 4px 24px rgba(74, 44, 42, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseWarm: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(194,139,82,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(194,139,82,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
