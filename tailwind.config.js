/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a2e',
      },
      spacing: {
        '4': '24px',
      },
      keyframes: {
        glowBackground: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        background: 'glowBackground 15s ease infinite',
      },
      boxShadow: {
        glow: '0 0 15px 3px rgba(0, 173, 255, 0.6)',
        'glow-hover': '0 0 30px 8px rgba(0, 173, 255, 1)',
      },
    },
  },
  plugins: [],
  extend: {
    dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ]
    },
    animation: {
      'gradient-x': 'gradient-x 10s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    }
  }
}

