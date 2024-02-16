/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/src/assets/sky.jpg')",
      },
    },
    colors: {
      "green-20": "#8baa36",
      // "gray-100": "#22252A",
      "gray-10": "#868c97",
      // "gray-20": "#3E4462",
      "gray-90": "#3E4462",
      "gray-99": "#22252a",
      green: "#ebf3d4",
      "green-90": "#3a4a0b",
      "gray-20": "#F8F4EB",
      "gray-50": "#EFE6E6",
      "gray-100": "#DFCCCC",
      "gray-500": "#5E0000",
      "primary-100": "#d5e0ef",
      "primary-300": "#55acee",
      "primary-500": "#325a97",
      // "secondary-400": "#FFCD58",
      // "secondary-500": "#FFC132",
      white: "#ffffff",
    },
    skew: {
      20: "-20deg",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",

      md: "0.375rem",
      lg: "70px",
      full: "9999px",
      large: "12px",
    },

    screens: {
      xs: "320px",
      sm: "768px",
      md: "1060px",
    },
  },
  jit: true,
  additionalVariants: ["hover"],
  plugins: [],
};
