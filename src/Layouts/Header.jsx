import { ColorTheme, FontSizeTheme } from "@assets/theme"
import logo from "@assets/image/logo-4.svg"
import { AppBar, Box, Container, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

  const fonts = FontSizeTheme()
  const colors = ColorTheme();

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
    <>
      {/* <Container>
        <Box className="top-nav" sx={{ 
          backgroundColor: `rgba(${colors.topHeaderBackground}, 0.5)`,
          borderRadius: "0px 0px 15px 15px"}}>
          hihi
        </Box>
      </Container>
      <AppBar position={`${fixed ? "fixed" : "relative"}`}>
        <Box
          fontSize={fonts.fontSize[20]}
        >
          <Container fixed={true} maxWidth="lg">
            <Box className="nav">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Box className="nav-list">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </AppBar> */}
    </>
  )
}
export default Header
