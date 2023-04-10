import { createContext } from "react"

// color design tokens export
export const ColorTheme = () => ({
  primary: "rgb(8, 2, 48)",
  white: "white",
  red: "red",
  yellow: "yellow",
  green: "green",
  topHeaderBackground: "17,0,122",
  backgroundHome: "rgb(24,2,157)",
})
export const FontSizeTheme = () => ({
  fontSize: {
    10: "10px",
    16: "16px",
    20: "20px",
    30: "30px",
    40: "40px",
    42: "42px",
    50: "50px",
  },
})

// mui theme settings
export const themeSettings = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 600,
      lg: 1320,
    },
  },
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 60,
      fontWeight: "600",
    },
    h2: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: "600",
    },
    h3: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: "600",
    },
    h4: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: "600",
    },
    h5: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: "600",
    },
    h6: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: "600",
    },
  },
}

// context for color mode
export const ColorModeContext = createContext({})
