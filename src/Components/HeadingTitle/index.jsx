import React from "react"
import Highlighted from "./Highlighted"
import "./Title.scss"
import { Box, Typography } from "@mui/material"
import { FontSizeTheme } from "@assets/theme"

const HeadingTitle = ({
  subTitle = "",
  children = "",
  highlight = "",
  center,
}) => {
  const { fontSize } = FontSizeTheme()
  return (
    <Box sx={{ textAlign: center ? "center" : "left" }}>
      <Highlighted search={highlight}>{children}</Highlighted>
      <Typography
        fontSize={fontSize[16]}
        textTransform="uppercase"
        fontWeight="500"
        mt={2}
        className={center ? "text__center--subtitle" : ""}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default HeadingTitle
