import { createContext } from "react"

// color design tokens export
export const tokens = () => ({
  primary: "rgb(8, 2, 48)",
  fontSize: {
    10: "10px",
    20: "20px",
    30: "30px",
    40: "40px",
    50: "50px",
  },
  red: "red",
  yellow: "yellow",
  green: "green",
})

// mui theme settings
export const themeSettings = {
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 40,
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
