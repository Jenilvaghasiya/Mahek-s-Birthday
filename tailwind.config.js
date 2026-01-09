/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC143C',
          dark: '#B01030',
          light: '#FF1744',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'romantic-float': 'romanticFloat 8s ease-in-out infinite',
        'text-reveal': 'textReveal 2s ease-out forwards',
        'gentle-glow': 'gentleGlow 4s ease-in-out infinite',
        'heart-float': 'heartFloat 12s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 2s ease-out',
        'slideUp': 'slideUp 1.5s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        romanticFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
          },
          '50%': { 
            transform: 'translateY(-8px) scale(1.01)',
          },
        },
        textReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
            letterSpacing: '0.2em',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            letterSpacing: 'normal',
          },
        },
        gentleGlow: {
          '0%, 100%': { 
            textShadow: '0 0 20px rgba(255, 182, 193, 0.4), 0 0 40px rgba(220, 20, 60, 0.3), 0 0 60px rgba(255, 182, 193, 0.2)',
          },
          '50%': { 
            textShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(220, 20, 60, 0.4), 0 0 90px rgba(255, 182, 193, 0.3)',
          },
        },
        heartFloat: {
          '0%': {
            transform: 'translateY(100vh) translateX(0) rotate(0deg) scale(0.8)',
            opacity: '0',
          },
          '10%': {
            opacity: '0.6',
          },
          '50%': {
            opacity: '0.8',
            transform: 'translateY(50vh) translateX(20px) rotate(5deg) scale(1)',
          },
          '90%': {
            opacity: '0.4',
          },
          '100%': {
            transform: 'translateY(-20vh) translateX(40px) rotate(10deg) scale(0.6)',
            opacity: '0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
