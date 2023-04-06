import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { themeSettings } from "../Assets/theme"

export default function Provider({ children }) {
  const theme = createTheme(themeSettings)

  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  )
}
