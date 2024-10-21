// tailwind.config.js
export default {
  // mode: 'jit', // Enable JIT mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // For headers
        sans: ['Poppins', 'sans-serif'], // For body and nav links
      },
    },
  },
  plugins: [],
};
