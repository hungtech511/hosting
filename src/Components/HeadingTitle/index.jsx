import React from "react"
import Highlighted from "./Highlighted"
import "./Title.scss"
import { Box, Typography } from "@mui/material"
import { FontSizeTheme, ColorTheme } from "@assets/theme"

const HeadingTitle = ({
  subTitle = "",
  children = "",
  highlight = "",
  center,
  colorSubTitle = "",
  colorHeading = ""
}) => {
  const { fontSize } = FontSizeTheme()
  const colors = ColorTheme()

  return (
    <Box className="heading-title" sx={{ textAlign: center ? "center" : "left" }}>
      <Highlighted colorHeading={colorHeading} search={highlight}>{children}</Highlighted>
      <Typography
        fontSize={fontSize[16]}
        textTransform="uppercase"
        fontWeight="500"
        mt={2}
        color={colors[colorSubTitle]}
        className={center ? "text__center--subtitle" : ""}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default HeadingTitle
