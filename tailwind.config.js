/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F5F2EA',  // Cream white from mandala
          100: '#E8EAE8',
          200: '#D1D8D1',
          300: '#B8C4B8',  // Main sage background
          400: '#9FB09F',
          500: '#A2A999',  // New primary green
          600: '#6B876B',
          700: '#526952',
          800: '#1C3A34',  // Deep forest green
          900: '#162D29',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mandala-pattern': "url('/logo.svg')",
      },
    },
  },
  plugins: [],
};