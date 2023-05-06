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
  colorHeading = "",
  subTitleTop = false,
}) => {
  const { fontSize } = FontSizeTheme()
  const colors = ColorTheme()

  return (
    <Box className={subTitleTop ? "heading-title style-2" : "heading-title"} sx={{ textAlign: center ? "center" : "left" }}>
      {
        subTitleTop ?
          <>
            {
              subTitle && <Typography
              fontSize={fontSize[16]}
              textTransform="uppercase"
              fontWeight="500"
              mt={2}
              color={colors[colorSubTitle]}
              className={center ? "text__center--subtitle sub-title" : "sub-title"}>
              {subTitle}
            </Typography>
            }
            <Highlighted colorHeading={colorHeading} search={highlight}>{children}</Highlighted>
          </>
          :
          <>
            <Highlighted colorHeading={colorHeading} search={highlight}>{children}</Highlighted>
            {
              subTitle && <Typography
              fontSize={fontSize[16]}
              textTransform="uppercase"
              fontWeight="500"
              mt={2}
              color={colors[colorSubTitle]}
              className={center ? "text__center--subtitle" : ""}>
              {subTitle}
            </Typography>
            }
          </>
      }
    </Box>
  )
}

export default HeadingTitle
