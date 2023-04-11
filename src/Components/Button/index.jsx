import "./Button.scss"

const CustomButton = ({ card = false }) => {
  return card ? (
    <button className="grid__block--btn">
      Read More
      <i className="far fa-long-arrow-right"></i>
    </button>
  ) : (
    <button className="btn-theme">
      <span className="btn-wrap">
        <span className="text-one">Get Started</span>
        <span className="text-two">Get Started</span>
      </span>
      <i className="far fa-long-arrow-right"></i>
    </button>
  )
}
export default CustomButton
