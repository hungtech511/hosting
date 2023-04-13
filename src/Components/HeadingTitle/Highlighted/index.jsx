import { Typography } from "@mui/material"
import { FontSizeTheme, ColorTheme } from "@assets/theme"
import React from "react"

const escapeRegExp = (str = "") => str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")

const Highlight = ({ parts, child, patt }) => {
  return parts(child)?.map((part, index) =>
    patt.test(part) ? (
      <span className="highlighted" key={index}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}

const Highlighted = ({ search = "", children = "", colorHeading }) => {
  const patt = new RegExp(`(${escapeRegExp(search)})`, "i")
  const parts = (child) => String(child).split(patt)

  const { fontSize } = FontSizeTheme()
  const colors = ColorTheme()
  return (
    <Typography fontSize={fontSize[42]} color={colors[colorHeading]} variant="h2">
      {search && React.Children.map(children, (child) => {
        if (typeof child !== "string") {
          return <br />
        }
        return <Highlight parts={parts} child={child} patt={patt} />

      })}
      {!search && React.Children.map(children, (child) => {
        if (typeof child !== "string") {
          return <br />
        }
        return <>{child}</>

      })}
    </Typography>
  )

}

export default Highlighted
