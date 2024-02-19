module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kode-mono': ['"Kode Mono"', 'monospace'],
      },
      colors: {
        primary: "#9F7551",
        background: "#212121",
      },
    },
  },
  plugins: [],
};
