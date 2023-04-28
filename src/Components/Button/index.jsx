import { Link } from "react-router-dom"
import "./Button.scss"

const CustomButton = ({ card = false, text, color, border, longButton, path, noArrow, noCircle, type= false }) => {
  return card ? (
    <Link to={path} className="grid__block--btn">
      Read More
      <i className="far fa-long-arrow-right"></i>
    </Link>
  ) : (
    <button type={type || undefined} className={`btn-theme ${color || ""}${border ? "btn-border" : ""} ${longButton ? "btn-long" : ""} ${noCircle ? "btn-remove-radius" : ""}`}>
      <span className="btn-wrap">
        <span className="text-one">{text}</span>
        <span className="text-two">{text}</span>
      </span>
      {noArrow ? "" : <i className="far fa-long-arrow-right"></i>}
    </button>
  )
}
export default CustomButton
