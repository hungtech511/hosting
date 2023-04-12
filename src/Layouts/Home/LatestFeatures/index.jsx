import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomButton from "@components/Button";
import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";

import './LatestFeatures.scss';

const LatestFeatures = ({background}) => {
    const colors = ColorTheme();
    const fonts = FontSizeTheme();
    return (
        <Box
            sx={{ backgroundColor: colors[background] }}
            className="latest-features-section">
            <HeadingTitle colorHeading="white" subTitle="FEATURES" colorSubTitle="blueSubtitle" center>
                Latest Features of Our Domain
                Hosting Services
            </HeadingTitle>
            <Container fixed={true} maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid className="content-column" item xs={3}>
                        hi
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default LatestFeatures;