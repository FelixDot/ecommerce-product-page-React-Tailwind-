/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans"],
    },
    extend: {
      colors: {
        primary: "hsl(26, 100%, 55%)",
        secondary: "hsl(25, 100%, 94%)",
        darkBlue: "hsl(220, 13%, 13%)",
        darkGreyBlue: "hsl(219, 9%, 45%)",
        greyBlue: "hsl(220, 14%, 75%)",
        lightGreyBlue: "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
