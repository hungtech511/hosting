import { ColorTheme, FontSizeTheme, FontWeightTheme } from "@assets/theme";
import { Box, Container, Typography } from "@mui/material";
import HeadingTitle from "@components/HeadingTitle";
import CustomSlider from "@components/Slider";

import "./Testimonial.scss";
const Testimonial = () => {

    const { fontSize } = FontSizeTheme();

    let settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: 30,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    let TestimonialComponent = new Array(5).fill(0).map((item, index) => {
        return (
            <Box className="testimonial-item" key={index}>
                <Box className="inner-box">
                    <Box className="text">
                        <Typography paragraph fontSize={fontSize[20]}>
                            Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.
                        </Typography>
                    </Box>
                    <Box className="user-box">
                        <Box className="user-inner">
                            <Box className="image">
                                <img src="https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg" alt="user" />
                            </Box>
                            <strong>Alex D. Denz</strong>
                            Founder, Alex Co.
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    })

    return (
        <Box
            className="testimonial-section">
            <Box className="bg-color-layer"></Box>
            <Container>
                <Box className="heading-wrapper">
                    <HeadingTitle subTitle="TESTIMONIALS" subTitleTop highlight="Testimonials">
                        Client’s Testimonials Feedback
                    </HeadingTitle>
                    <Typography paragraph fontSize={fontSize[18]} className="heading-text">
                        Proin in mauris scelerisque risus nisl cras. Non dui nec vitaenunc. Nulla <br />
                        platea urna in. Vitae augue pulvinar vitae, platea risus est. Gra vida
                    </Typography>
                </Box>
                <CustomSlider className="testimonial-home" data={TestimonialComponent} settingSlider={settings} />
            </Container>
        </Box>
    )
}
export default Testimonial;