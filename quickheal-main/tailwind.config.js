module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          100: '#EDE9FE',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        purple: {
          100: '#F3E8FF',
          500: '#A855F7',
          600: '#9333EA'
        },
        pink: {
          100: '#FCE7F3'
        }
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg-purple-100', 'text-purple-600']
    }
  }
}
