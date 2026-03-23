/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: '#e05c1a',
        ink: '#0f0e0d',
        paper: '#f7f3ec',
        muted: '#7a746d',
        card: '#fffdf9',
        bdr: '#e5dfd6',
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(224,92,26,0.5)' },
          '70%': { boxShadow: '0 0 0 9px rgba(224,92,26,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(224,92,26,0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
