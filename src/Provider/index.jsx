import { ThemeProvider, useTheme } from "@mui/material"
import theme from "../Assets/theme"

export default function Provider({children}){

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}