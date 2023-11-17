/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      padding: {
        18: '18px',
        '150px': '150px',
        '210px': '210px',
      },
      margin: {
        60: '60px',
      },
      borderRadius: {
        32: '32px',
        48: '48px',
        64: '64px',
        96: '96px',
        'personal-card':
          'var(--1rem, 16px) var(--3rem, 48px) var(--0rem, 0px) var(--1rem, 16px)',
        'personal-card':
          'var(--1rem, 16px) var(--3rem, 48px) var(--0rem, 0px) var(--1rem, 16px)',
      },
      transitionDuration: {
        400: '400ms',
      },
      fontFamily: {
        switzer: ['var(--switzer-font)'],
        'source-sans-3': ['var(--source-sans-3-font)'],
      },
      fontSize: {
        160: '160px',
        64: '64px',
      },
      backgroundImage: {
        'logo-opacity':
          'linear-gradient(180deg, rgba(226, 232, 240, 0) 0%, #E2E8F0 51.92%)',
        'image-opacity':
          'linear-gradient(0deg, rgba(226, 232, 240, 0.92), rgba(226, 232, 240, 0.92)), url(/photos/photo-layer.png)',
        'career-bg':
          'linear-gradient(0deg, rgba(226, 232, 240, 0.92), rgba(226, 232, 240, 0.92)), url(/photos/2.jpg)',
        'trucks-bg': 'url(/photos/trucks-bg.png)',
      },
      lineHeight: {
        '150%': '150%',
        '130%': '130%',
        '120%': '120%',
      },
      boxShadow: {
        footer: '0px 2px 10px rgba(37, 33, 88, 0.25)',
        navigation: ' 0px 4px 4px rgba(128, 128, 128, 0.08)',

        soft: '0px 4px 8px rgba(37, 33, 88, 0.25)',
        light: '0px 4px 4px rgba(37, 33, 88, 0.05)',

        'border-bottom': '0px -1px 0px 0px #CBD5E1 inset',
        // "border-right": "-1px 0px 0px 0px #CBD5E1 inset",
      },
      screens: {
        s: '320px',
        m: '375px',
        l: '425px',
        tablet: '768px',
      },
      colors: {
        'sawers-blue': 'hsl(var(--sawers-blue))',
        'sawers-sun': 'hsl(var(--sawers-sun))',

        'dark-foreground': {
          62: 'hsla(var(--dark-foreground-62))',
          35: 'hsla(var(--dark-foreground-35))',
        },

        'white-foreground': {
          DEFAULT: 'hsl(var(--white-foreground))',
          76: 'hsla(var(--white-foreground-76))',
          54: 'hsla(var(--white-foreground-54))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          press: 'hsl(var(--primary-press))',
        },

        secondary: {
          DEFAULT: 'hsla(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        accent: 'hsl(var(--accent))',
        'background-photo': 'hsla(var(--background-photo))',
        shadow: 'hsla(var(--shadow))',
        error: 'hsl(var(--error))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
