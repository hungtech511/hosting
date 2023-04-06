import { tokens } from "../Assets/theme"

export const anotherStyle = (background, color) => ({
  background: background,
  color: color,
  borderRadius: "50%",
  textAlign: "center",
})

export const style = (background, color) => {
  const colors = tokens()
  return {
    color: "red",
    fontSize: colors.fontSize[50],
  }
}

export const flexcenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
