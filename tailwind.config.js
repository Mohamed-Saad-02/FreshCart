/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Encode Sans Expanded", "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "#0aad0a",
        "light-color": "#f0f3f2",
        "rating-color": "#ffc908",
      },
      boxShadow: {
        "main-shadow": `rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,
    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,
    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px;`,
      },
    },
  },
  plugins: [],
};
