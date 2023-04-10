import { FontSizeTheme } from "@assets/theme"
import "./Button.scss";

const CustomButton = (color, hover) =>{
    return(
        <button className="btn-theme">
            <span className="btn-wrap">
                <span className="text-one">Get Started</span>
                <span className="text-two">Get Started</span>
            </span>
            <i className="far fa-long-arrow-right"></i>
        </button>
    )
}
export default CustomButton;