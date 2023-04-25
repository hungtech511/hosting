import { ColorTheme, FontSizeTheme } from "@assets/theme"
import logoFixedNav from "@assets/image/logo-4.svg";
import logoWhite from "@assets/image/logo-white.svg";
import { Box, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CanvasLeft from "@components/CanvasMenu/CanvasLeft"
import CanvasRight from "@components/CanvasMenu/CanvasRight";

import { listMenu } from "@utils/constant"

import "./Header.scss";

const Header = () => {

  const fonts = FontSizeTheme()

  const [fixed, setFixed] = useState(false)
  const [canvasOpen, setCanvasOpen] = useState(false)

  const isFixed = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY
    const fixClass = !!Boolean(scrollTop >= 100)
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

        <Box
          sx={{
            background: "transparent",
            boxShadow: "none"
          }}
          className={`${fixed ? "navbar fixed-nav" : "navbar"}`}
          fontSize={fonts.fontSize[20]}
        >
          <Container fixed={true} maxWidth="lg">
            <Box className="nav" sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Link to="/">
                <img src={fixed ? logoFixedNav : logoWhite} alt="logo" />
              </Link>
              <ul className="nav-list">
                {
                  listMenu.map((item, index) => {
                    return (
                      <li key={item?.id}>
                        <Link to={item?.path}>{item?.title}</Link>
                        {
                          item.hasOwnProperty("subMenu")
                          &&
                          <ul className="sub-menu">
                            {
                              item?.subMenu.map((item, index) => {
                                return (
                                  <li key={item?.id}>
                                    <Link to={item?.path}>{item?.title}</Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        }
                      </li>
                    )
                  })
                }
              </ul>
              <Box className="outer-box">
                <Box className="search-box-btn">
                  <i className="far fa-search"></i>
                </Box>
                <Box className="open-canvas" onClick={() => setCanvasOpen(true)}>
                  <Box className="bars-outer">
                    {
                      Array(9).fill(0).map((item, index) => {
                        return (
                          <span key={index}></span>
                        )
                      })
                    }
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </header>
      <Box className={canvasOpen ? "offcanvas__area open" : "offcanvas__area"}>
        <Box className="close__offcanvas" onClick={() => setCanvasOpen(false)}></Box>
        <Box className="offcanvas__inner">
          <CanvasLeft />
          <CanvasRight/>
        </Box>
      </Box>
    </>
  )
}
export default Header
