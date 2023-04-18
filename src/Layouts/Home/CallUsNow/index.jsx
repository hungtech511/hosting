import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./CallUsNow.scss";
import CustomButton from "@components/Button";

const CallUsNow = ({background}) => {
    const colors = ColorTheme();
    const fonts = FontSizeTheme();
    return (
        <>
            <Box 
            sx={{
                backgroundColor: colors[background],
                backgroundImage: `url("https://themexriver.com/wp/hostix/wp-content/uploads/2022/12/shape-1.png")`,
                backgroundRepeat: 'no-repeat',
            }}
            className="call-us-now">
                <Box className="banner-section">
                    <Container fixed={true} maxWidth="lg">
                        <Grid container spacing={{lg: 2, md:4, xs: 8}}>
                            <Grid className="content-column" item lg={6}>
                                <Box className="inner-column">
                                    <Typography fontSize={fonts.fontSize[42]} color={colors.white} variant="h2">
                                        Let the experts build you
                                        the site of your dreams.
                                    </Typography>
                                    <Typography color={colors.white} className="call" fontSize={fonts.fontSize[20]} paragraph={true}>
                                        Call us now at <a href="tel:844-303-1728">844-303-1728</a>
                                    </Typography>
                                    <CustomButton text="Request A Call back" color="orange"/>
                                </Box>
                            </Grid>
                            <Grid className="image-column" item lg={6}>
                                <Box className="image-wrapper">
                                    <img src="https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/cta.png" alt="image" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default CallUsNow;