/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A14',
        accent: '#7B61FF',
        background: '#0A0A14',
        textLight: '#F0EFF4',
        textDark: '#18181B'
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        dramatic: ['Instrument Serif', 'serif'],
        data: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
