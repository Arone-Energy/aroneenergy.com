/** @type {import('tailwindcss').Config} */
// Theme mirrors apps/landing/tailwind.config.js (aronetech.com) so both
// sites share one brand system. Add tokens there first, then copy here.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    screens: {
      xss: '200px',
      xs: '400px',
      sm: '600px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        arone: {
          blue: '#002A47',
          blueMid: '#003a63',
          black: '#000000',
          dgray: '#5B6369',
          lgray: '#E6E7E8',
          white: '#FFFFFF',
        },
      },

      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },

      maxWidth: {
        '8xl': '90rem',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        vscan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        hvscan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },

      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        vscan: 'vscan 4s ease-in-out infinite',
        hvscan: 'hvscan 3s ease-in-out infinite',
      },

      boxShadow: {
        nav: '0 2px 20px rgba(0,42,71,0.08)',
      },

      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },

  plugins: [],
}
