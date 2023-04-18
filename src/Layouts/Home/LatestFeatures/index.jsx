import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";

import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";
import { listLatestFeatures } from "@utils/constant";

import './LatestFeatures.scss';

const LatestFeatures = ({ background }) => {

    const colors = ColorTheme();
    const { fontSize } = FontSizeTheme();
    return (
        <Box
            sx={{ backgroundColor: colors[background] }}
            className="latest-features-section">
            <HeadingTitle colorHeading="white" subTitle="FEATURES" colorSubTitle="blueSubtitle" center>
                Latest Features of Our Domain <br />
                Hosting Services
            </HeadingTitle>
            <Container fixed={true} maxWidth="lg">
                <Grid container spacing={3}>
                    {
                        listLatestFeatures?.map((item, index) => {
                            return (
                                <Grid key={item?.id} item lg={3} md={6}>
                                    <Box align="center" className="features-item">
                                        <ItemBackground className="icon-box" imageSrc="https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/vector-10.png">
                                            <span className="icon">
                                                <img src={item?.imageSrc} alt="icon" />
                                            </span>
                                        </ItemBackground>
                                        <Typography fontSize={fontSize[24]} variant="h4">{item?.title}</Typography>
                                        <Typography color={colors.text} fontSize={fontSize[18]} paragraph>
                                            {item?.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default LatestFeatures;