/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textGradient: {
        primary: 'linear-gradient(to right, #7e22ce, #db2777, #ef4444)', // purple → pink → red
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-gradient': (value) => ({
            backgroundImage: value,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }),
        },
        { values: theme('textGradient') }
      );
    },
  ],
}
