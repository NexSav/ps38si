/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00223a',
        secondary: {
          DEFAULT: '#0066cc',
          light: '#3399ff',
        },
        accent: {
          orange: '#ff6b35',
          yellow: '#ffd23f',
          teal: '#06d6a0',
          purple: '#7209b7',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.015em',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionDuration: {
        '250': '250ms',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
