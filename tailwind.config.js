/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#232635',
          text: '#f6f6f6',
          username: '#00a4fd',
          directory: '#40a02b',
          link: '#dd7878',
          'link-email': '#772ce8',
          'link-linkedin': '#d8a81a',
          'link-github': '#a6d189',
        },
      },
      fontFamily: {
        mono: ['"Courier Prime"', 'Courier', 'monospace'],
      },
      maxWidth: {
        '80ch': '80ch',
      },
    },
  },
  plugins: [],
}
