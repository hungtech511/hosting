import { Typography } from "@mui/material"
import { FontSizeTheme } from "@assets/theme"

const escapeRegExp = (str = "") => str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
const Highlighted = ({ search = "", children = "" }) => {
  const patt = new RegExp(`(${escapeRegExp(search)})`, "i")
  const parts = String(children).split(patt)
  const { fontSize } = FontSizeTheme()

  if (search) {
    return (
      <Typography variant="h2" fontSize={fontSize[42]} fontWeight={600}>
        {parts.map((part, index) =>
          patt.test(part) ? (
            <Typography variant="span" className="highlighted" key={index}>
              {part}
            </Typography>
          ) : (
            part
          ),
        )}
      </Typography>
    )
  }
  return <Typography variant="h2">{children}</Typography>
}

export default Highlighted
