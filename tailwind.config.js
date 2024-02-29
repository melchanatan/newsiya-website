/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", 'sans-serif'],
        maehongson: ["var(--font-maehongson)", 'sans-serif']
      },
      colors: {
        "accent-darken": "#333B44",
        "primary": "#FFFAF3",
        "primary-darken": "#C3AC93"
      },
      fontSize: {
        "hero-clamp": "clamp(2rem, 4vw, 4rem)",
        "title-clamp": "clamp(2rem, 4vw, 3rem)",

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
