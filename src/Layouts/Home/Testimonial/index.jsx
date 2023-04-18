import { ColorTheme, FontSizeTheme, FontWeightTheme } from "@assets/theme";
import { Box, Container, Typography } from "@mui/material";
import HeadingTitle from "@components/HeadingTitle";
import CustomSlider from "@components/Slider";
import ItemBackground from "@components/ItemBackground";



import shape from '@assets/image/shape.jpg';
import quote from '@assets/image/quote-icon.png';
import "./Testimonial.scss";
const Testimonial = ({ background }) => {

    const colors = ColorTheme();
    const { fontSize } = FontSizeTheme();
    const { fontWeight } = FontWeightTheme();

    let settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
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

    let test = [1, 2, 3, 4, 5]

    let TestComponent = test?.map((item, index) => {
        return (
            <Box className="testimonial-item" key={index}>
                <Box className="inner-box">
                    <span className="quote">
                        <img src={quote} alt="quote" />
                    </span>
                    <Typography paragraph fontSize={fontSize[20]} className="text">
                        Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.
                    </Typography>
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
            sx={{
                backgroundColor: colors[background],
                backgroundImage: `url(${shape})`
            }}
            className="testimonial-home-section pricing-plan-section">
            <HeadingTitle subTitle="TESTIMONIALS" center>
                What our client review<br />
                about hostix
            </HeadingTitle>
            <Container>
                <CustomSlider className="testimonial-home" data={TestComponent} settingSlider={settings} />
            </Container>
        </Box>
    )
}
export default Testimonial;