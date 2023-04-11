import { ColorTheme, FontSizeTheme } from "@assets/theme"
import logo from "@assets/image/logo-4.svg"
import { AppBar, Box, Container, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./Header.scss";

const Header = () => {

  const fonts = FontSizeTheme()

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
    <header className="main-header">
      <Box className="header-top">
        <Container className="auto-container" maxWidth="lg">
          <Box className="inner-container">
            <Box className="top-nav" sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <ul className="contact-list">
                <li>
                  <a href="mailto:hoangan@unicode.vn">
                    <i className="fal fa-envelope"></i>
                    hoangan@unicode.vn
                  </a>
                </li>
                <li>
                  <a href="mailto:hoangan@unicode.vn">
                    <i className="fal fa-envelope"></i>
                    hoangan@unicode.vn
                  </a>
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>

      <AppBar
        sx={{
          background: "transparent",
          boxShadow: "none"
        }}
        position={`${fixed ? "fixed" : "relative"}`}>
        <Box
          fontSize={fonts.fontSize[20]}
        >
          <Container fixed={true} maxWidth="lg">
            <Box className="nav" sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/domain">Domain</Link>
                </li>
                <li>
                  <Link to="/hosting">Hosting</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
              <Box className="outer-box">
                <Box className="search-box-btn">
                  <i className="far fa-search"></i>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </AppBar>
    </header>
  )
}
export default Header
