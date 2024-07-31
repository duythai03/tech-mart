/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#3180ff",
        bgWhite: "#f5f5f5",
        textColor: "#333",
        lineColor: "#e5e5e5",
      },
      spacing: {
        wLap: "1392px",
      },
    },
  },
  plugins: [require("daisyui")],
};
