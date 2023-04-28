import { Box, Container } from "@mui/material";

import { HomePartnerList } from "@utils/constant";
import CustomSlider from "@components/Slider";
import { Link } from "react-router-dom";

import "./HomePartner.scss";

const HomePartner = () => {

    let settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 899,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


    let HomePartnerComponent = HomePartnerList.map((item, index) => {
        return (
            <Box className="home-partner-item" key={index}>
                <Link>
                    <img src={item.imageSrc} alt="slider-item" />
                </Link>
            </Box>
        )
    })


    return (
        <Box className="home-partner">
            <Container>
                <CustomSlider data={HomePartnerComponent} settingSlider={settings}/>
            </Container>
        </Box>
    )
}

export default HomePartner;