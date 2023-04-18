import Slider from "react-slick";
const CustomSlider = ({settingSlider, data }) => {
    return (
        <Slider {...settingSlider}>
            {data}
        </Slider>
    )
}
export default CustomSlider;
