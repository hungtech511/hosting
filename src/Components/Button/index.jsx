import "./Button.scss"

const CustomButton = ({ card = false, text, color, border }) => {
  return card ? (
    <button className="grid__block--btn">
      Read More
      <i className="far fa-long-arrow-right"></i>
    </button>
  ) : (
    <button className={`btn-theme  ${color || ""} ${border && "btn-border"}`}>
      <span className="btn-wrap">
        <span className="text-one">{text}</span>
        <span className="text-two">{text}</span>
      </span>
      <i className="far fa-long-arrow-right"></i>
    </button>
  )
}
export default CustomButton
