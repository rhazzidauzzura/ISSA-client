/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway"],
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
