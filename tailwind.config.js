/* src/tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        'primary-dark': '#1E3A8A',
        secondary: '#F59E0B',
        accent: '#F472B6',
        'bg-section': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Roboto', 'Pretendard', 'sans-serif'],
      },
      boxShadow: {
        fancy: '0 10px 40px 0 rgba(30, 64, 175, 0.10), 0 2px 8px 0 rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};