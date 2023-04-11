import { Typography } from "@mui/material"
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

const Highlighted = ({ search = "", children = "" }) => {
  const patt = new RegExp(`(${escapeRegExp(search)})`, "i")
  const parts = (child) => String(child).split(patt)
  return (
    <Typography variant="h2">
      {React.Children.map(children, (child) => {
        if (typeof child !== "string") {
          return <br />
        }
        return <Highlight parts={parts} child={child} patt={patt} />
      })}
    </Typography>
  )
}

export default Highlighted
//
