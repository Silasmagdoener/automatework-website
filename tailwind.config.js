/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#41d5c1',
          dark: '#37b3a3',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2a2a2a',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #41d5c1 0%, #37b3a3 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f3f4f6',
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            strong: {
              color: '#f3f4f6',
            },
            a: {
              color: '#41d5c1',
              '&:hover': {
                color: '#37b3a3',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};