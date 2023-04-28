import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomButton from "@components/Button";
import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";

import "./SecurityFirst.scss";

const SecurityFirst = () => {
    const colors = ColorTheme();
    const fonts = FontSizeTheme();
    return (
        <Box className="security-section">
            <Container>
                <Grid container spacing={0}>
                    <Grid className="image-column" item lg={7} order={{ lg: 1, xs: 2 }}>
                        <ItemBackground className="icon-layer-shape" imageSrc="public/image/pattern-16.png" />
                        <Box className="image-wrapper">
                            <img className="image-center" src="https://themexriver.com/wp/hostix/wp-content/uploads/2022/12/security-2.png" alt="image" />
                        </Box>
                    </Grid>
                    <Grid className="content-column" item lg={5} order={{ lg: 2, xs: 1 }}>
                        <Box className="inner-column">
                            <HeadingTitle subTitle="SECURITY" colorSubTitle="blueSubtitle">
                                Put your site’s safety
                                and scure first
                            </HeadingTitle>
                            <Typography color={colors.text} fontSize={fonts.fontSize[18]} paragraph={true}>
                                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized bite the finan charms of the pleasure. and demoralized bite the finan charms of the pleasure. and demoralized bite the finan
                            </Typography>
                            <Typography color={colors.text} fontSize={fonts.fontSize[18]} paragraph={true}>
                                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized bite the finan charms of the pleasure. and demoralized bite the finan charms of the pleasure. and demoralized bite the finan
                            </Typography>
                            <CustomButton text="Request A Call back" color="orange" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SecurityFirst;