import { tokens } from "@assets/theme"
import { AppBar, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const colors = tokens()
  const [fixed, setFixed] = useState(false)
  const isFixed = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY
    const fixClass = !!Boolean(scrollTop >= 50)
    setFixed(fixClass)
  }
  useEffect(() => {
    window.addEventListener("scroll", isFixed)
    return () => {
      window.removeEventListener("scroll", isFixed)
    }
  }, [])
  return (
    <AppBar position={`${fixed ? "fixed" : "relative"}`}>
      <Box
        display="flex"
        gap={3}
        fontSize={colors.fontSize[20]}
        sx={{ backgroundColor: colors.yellow }}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </Box>
    </AppBar>
  )
}
export default Header
