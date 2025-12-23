/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        primary: '#020617',
        secondary: '#0F172A',
        accent: '#06B6D4',     // Aqua Blue as primary accent (green removed)
        accentPurple: '#9333EA',
        textPrimary: '#FFFFFF',
        textSecondary: '#A1A1AA',
      },
    },
  },
  plugins: [],
}
