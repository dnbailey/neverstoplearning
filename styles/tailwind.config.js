module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8E6B2F",
          50: "#E8D7BA",
          100: "#E2CCA7",
          200: "#D5B681",
          300: "#C9A05A",
          400: "#B4883C",
          500: "#8E6B2F",
          600: "#684E22",
          700: "#413116",
          800: "#1B1409",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#595959",
          50: "#CCCCCC",
          100: "#BFBFBF",
          200: "#A6A6A6",
          300: "#8C8C8C",
          400: "#727272",
          500: "#595959",
          600: "#3F3F3F",
          700: "#262626",
          800: "#0C0C0C",
          900: "#000000",
        },
        light: {
          DEFAULT: "#FEFEFE",
          600: "#EFEFEF",
          700: "#DFDFDF",
          800: "#D0D0D0",
          900: "#C1C1C1",
        },
        dark: {
          DEFAULT: "#373D3F",
          50: "#A8B1B3",
          100: "#9BA4A7",
          200: "#7F8C90",
          300: "#677275",
          400: "#4F575A",
          500: "#373D3F",
          600: "#1F2324",
          700: "#070809",
          800: "#000000",
          900: "#000000",
        },
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
