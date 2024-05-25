/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          950: '#030712',
        },
        'secondary': {
          600: '#4F46E5',
        },
        'error': '#FF2525',
      },
      backgroundColor: {
        'primary': 'rgb(30 41 59)',
        'secondary': '#4F46E5',
        'input': '#E5E7EB',
        'button-hover': '#6366F1',
      },
      fontSize: {
        sm: ['12px', '18px'],
        regular: ['16px', '24px'],
        base: ['18px', '26px'],
        lg: ['20px', '30px'],
        xl: ['24px', '32px'],
        '2xl': ['40px', '44px'],
      },
      width: {
        '560': '560px',
        '640': '640px',
      },
      height: {
        '650': '650px',
      },
      flexShrink: {
        2: '2'
      },
      borderRadius: {
        DEFAULT: '20px',
        'md': '24px',
        'xl': '32px',
      },
    },
  },
  plugins: [],
}

