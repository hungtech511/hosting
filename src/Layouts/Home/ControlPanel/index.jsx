import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomButton from "@components/Button";
import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";

import "./ControlPanel.scss";

const ControlPanel = () => {
    const colors = ColorTheme();
    const fonts = FontSizeTheme();
    return (
        <Box className="control-panel-section">
            <HeadingTitle subTitle="SECURITY" colorSubTitle="blueSubtitle" center>
                Put your site’s safety
                and scure first
            </HeadingTitle>
            <Container fixed={true} maxWidth="lg">
                <Grid container spacing={10}>
                <Grid className="content-column" item xs={5}>
                        <Box className="inner-column">
                            <Typography color={colors.text} fontSize={fonts.fontSize[18]} paragraph={true}>
                                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized bite the finan charms of the pleasure. and demoralized bite the finan charms of the pleasure. and demoralized bite the finan
                            </Typography>
                            <Typography color={colors.text} fontSize={fonts.fontSize[18]} paragraph={true}>
                                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized bite the finan charms of the pleasure. and demoralized bite the finan charms of the pleasure. and demoralized bite the finan
                            </Typography>
                            <CustomButton text="Request A Call back" color="orange" />
                        </Box>
                    </Grid>
                    <Grid className="image-column" item xs={7}>
                        <ItemBackground className="icon-layer" imageSrc="https://themexriver.com/wp/hostix/wp-content/uploads/2022/12/pattern-16.png" />
                        <Box className="image-wrapper">
                            <img src="https://themexriver.com/wp/hostix/wp-content/uploads/2022/12/security-3.png" alt="image" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ControlPanel;