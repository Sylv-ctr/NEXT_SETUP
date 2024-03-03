/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'king': 'rgba(24,13,129,255)',
        'ble': '#fdc002',
        'beige':'#e8e2da',
        'dark-beige':'#2e2a27',
      },
    },
  },
  plugins: [],
}

