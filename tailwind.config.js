module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1440px',
        '4xl': '2560px',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        'kode-mono': ['"Kode Mono"', 'ui-monospace', 'monospace'],
        sans: ['Raleway', 'sans-serif'],
        anta: [
          'Anta',
          'var(--font-inter)',
          'ui-sans-serif',
          'sans-serif',
        ],
      },
      colors: {
        primary: "#9F7551",
        background: "#212121",
      },
    },
  },
  plugins: [],
};
