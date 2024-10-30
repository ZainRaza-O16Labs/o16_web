/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      keyframes: {
        slideDown: {
          "0%": {
            opacity: 0.7,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          "0%": {
            opacity: 0.7,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideRight: {
          "0%": {
            opacity: 0.7,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideTop: {
          "0%": {
            transform: "translatey(20%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        shortSlideDown: {
          "0%": {
            transform: "translateY(-20%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        fade: {
          "0%": {
            opacity: 0.2,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeWithOverlap: {
          "0%": {
            // opacity: 0.2,
            position: "absolute",
          },
          "100%": {
            // opacity: 1,
            position: "relative",
          },
        },
        horizontalSliderAnimation: {
          "0%": {
            opacity: 0.2,
            transform: "translateY(-50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        resistanceUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        resistanceDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        customShadow: "0px 5px 16px 5px #080F340F",
        customShadow2: "0px 0px 25.399999618530273px 0px #BEBEBE40",
        headerShadow: "0px 0px 5px 1px #EDEDED",
        caseStudyShadow: "0px 0px 5px 1px #2B2B2B",
        around: "0px 0px 1px 0px #000000",
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
        slideTop: "slideTop 0.5s ease-in-out",
        shortSlideDown: "shortSlideDown 0.5s ease-in-out",
        fade: "fade 0.5s ease-in-out",
        fadeWithOverlap: "fade 0.5s ease-in-out",
        cardSlideDown: "horizontalSliderAnimation 0.5s ease-in-out",
        resistanceUp: "resistanceUp 0.5s ease-in-out",
        resistanceDown: "resistanceDown 0.5s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradeient": "linear-gradient(135deg, #089DE5 0%, #087DBD 100%)",
      },
      _colors: {
        ...defaultTheme.colors,
        primary: "#089DE5",
        toprimary: "#087DBD",
        c_2B2B2B: "#2B2B2B",
      },
      get colors() {
        return this._colors;
      },
      set colors(value) {
        this._colors = value;
      },
    },
    colors: {
      transparent: "transparent",
      c_A1A1A1: "#A1A1A1",
      c_FFFFFF: "#FFFFFF",
      c_dfe6e9: "#dfe6e9",
      c_FFFFFF80: "#FFFFFF80",
      c_F2F2F2: "#F2F2F2",
      c_089DE5: "#089DE5",
      c_087DBD: "#087DBD",
      c_2B2B2B: "#2B2B2B",
      c_636363: "#636363",
      c_818181: "#818181",
      c_181818: "#181818",
      c_151515: "#151515",
      c_E6E6E6: "#E6E6E6",
      c_000000: "#000000",
      c_D9D9D9: "#D9D9D9",
      c_2A2A2A: "#2A2A2A",
      c_D9DBE9: "#D9DBE9",
      c_737373: "#737373",
      c_4A3AFF: "#4A3AFF",
      c_170F49: "#170F49",
      c_0B0B0B: "#0B0B0B",
      c_364046: "#364046",
      c_F3F4F5: "#F3F4F5",
      c_424242: "#424242",
      c_373737: "#373737",
      c_101010: "#101010",
      c_F3F3F3: "#F3F3F3",
      c_FBFBFB: "#FBFBFB",
      c_747272: "#747272",
      c_DEDEDE: "#DEDEDE",
      c_ABABAB: "#ABABAB",
      c_2D2D2D: "#2D2D2D",
      c_101111: "#101111",
      c_A7A7A7: "#A7A7A7",
      c_F9F9F9: "#F9F9F9",
      c_000101: "#000101",
      c_090909: "#090909",
      c_48B5F3: "#48B5F3",
      c_FAFAFA: "#FAFAFA",
      c_1C1C1C: "#1C1C1C",
      c_F62F2F: "#F62F2F",
      C_00C714: "#00C714",
      c_EDEDED: "#EDEDED",
      c_25D366: "#25D366",
    },
  },
  plugins: [],
};
