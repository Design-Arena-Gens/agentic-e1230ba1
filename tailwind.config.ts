import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0070f3",
          50: "#f5faff",
          100: "#e6f2ff",
          200: "#cce5ff",
          300: "#99ccff",
          400: "#66b2ff",
          500: "#3399ff",
          600: "#0070f3",
          700: "#0057c2",
          800: "#004799",
          900: "#003166",
        },
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(0, 112, 243, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
