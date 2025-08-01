/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E13',
        primary: '#F96902',
        accent: '#F96902',
        surface: '#181C23',
        glass: {
          light: 'rgba(255,255,255,0.08)',
          dark: 'rgba(11,14,19,0.7)',
          border: 'rgba(255,255,255,0.12)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(11,14,19,0.25)',
        orange: '0 0 16px #F96902',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [
  require('@tailwindcss/line-clamp'),
], }