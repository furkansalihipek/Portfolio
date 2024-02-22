module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'kode-mono': ['"Kode Mono"', 'monospace'],
        'sans': ['Raleway', 'sans-serif'],
        'anta': ['Anta', 'sans-serif'],
      },
      colors: {
        primary: "#9F7551",
        background: "#212121",
      },
    },
  },
  plugins: [],
};
