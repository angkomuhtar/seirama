/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        appPrimary: {
          50: "#fcffe5",
          100: "#f6ffc6",
          200: "#ebff95",
          300: "#daff57",
          400: "#c5f625",
          500: "#a0d405",
          600: "#81b100",
          700: "#618605",
          800: "#4e690b",
          900: "#41590e",
          950: "#213201",
        },
        appSecondary: {
          100: "#D5F9CB",
          200: "#A5F399",
          300: "#66DC62",
          400: "#39BA41",
          500: "#0B8C1F",
          600: "#087823",
          700: "#056426",
          800: "#035125",
          900: "#024324",
        },
        appNetral: {
          50: "#FFFFFF",
          100: "#F3F3F3",
          200: "#E8E8E8",
          300: "#BCBCBC",
          400: "#7A7A7A",
          500: "#222222",
          600: "#1D1819",
          700: "#181112",
          800: "#130A0D",
          900: "#100609",
        },
        font: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#f4f4f4",
          800: "#454545",
          900: "#333333",
          950: "#262626",
        },
        primary: {
          50: "#F6F8FF",
          100: "#EDF0FF",
          200: "#D1DAFE",
          300: "#B4C2FD",
          400: "#8092FF",
          500: "#4669fa",
          600: "#3F5EDF",
          700: "#2A3F96",
          800: "#203071",
          900: "#151F49",
        },
        secondary: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#A0AEC0",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        danger: {
          50: "#FFF7F7",
          100: "#FEEFEF",
          200: "#FCD6D7",
          300: "#FABBBD",
          400: "#F68B8D",
          500: "#F1595C",
          600: "#D75052",
          700: "#913638",
          800: "#6D292A",
          900: "#461A1B",
        },
        black: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#111112",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        warning: {
          50: "#FFFAF8",
          100: "#FFF4F1",
          200: "#FEE4DA",
          300: "#FDD2C3",
          400: "#FCB298",
          500: "#FA916B",
          600: "#DF8260",
          700: "#965741",
          800: "#714231",
          900: "#492B20",
        },
        info: {
          50: "#F3FEFF",
          100: "#E7FEFF",
          200: "#C5FDFF",
          300: "#A3FCFF",
          400: "#5FF9FF",
          500: "#0CE7FA",
          600: "#00B8D4",
          700: "#007A8D",
          800: "#005E67",
          900: "#003F42",
        },
        success: {
          50: "#F3FEF8",
          100: "#E7FDF1",
          200: "#C5FBE3",
          300: "#A3F9D5",
          400: "#5FF5B1",
          500: "#50C793",
          600: "#3F9A7A",
          700: "#2E6D61",
          800: "#1F4B47",
          900: "#0F2A2E",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#68768A",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mr_dafoe: ["var(--font-mr_dafoe)"],
        open_sans: ["var(--font-open_sans)"],
      },
      boxShadow: {
        base: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        base2:
          "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        base3: "16px 10px 40px rgba(15, 23, 42, 0.22)",
        deep: "-2px 0px 8px rgba(0, 0, 0, 0.16)",
        dropdown: "0px 4px 8px rgba(0, 0, 0, 0.08)",

        testi: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        todo: "rgba(235 233 241, 0.6) 0px 3px 10px 0px",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
          },
          "40%, 60%, 80%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        zoom: "zoom 1s ease-in-out infinite",
        tada: "tada 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};