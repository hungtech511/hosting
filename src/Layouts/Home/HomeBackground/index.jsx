import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { ColorTheme, FontSizeTheme } from "@assets/theme";

import { listBackgroundHomeImage, listBackgroundAnimation } from "@utils/constant";

import ItemBackground from "@components/ItemBackground";
import CustomButton from "@components/Button";
import "./HomeBackground.scss";


const renderBackground = () => {
	return (
		<>
			{
				listBackgroundHomeImage.map((item, index) => {
					return (
						<ItemBackground key={item?.id} className={`icon-layer ${item?.className}`} imageSrc={`${item.imageSrc}`} />
					)
				})
			}
		</>
	)
}

const renderBackgroundAnimation = () => {
	return (
		<>
			{
				listBackgroundAnimation.map((item, index) => {
					return (
						<ItemBackground key={item?.id} className={item?.className} imageSrc={item?.imageSrc} />
					)
				})
			}
		</>
	)
}

const HomeBackground = ({background}) => {
    const fonts = FontSizeTheme();
	const colors = ColorTheme();

    return (
        <Box
         sx={{
            backgroundColor: colors[background],
        }}
         className="home-background">
                <Box className="circle-layer"></Box>
                    {
                        renderBackground()
                    }
                <Container fixed={true} maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid className="content-column" item lg={6}>
                            <Box className="inner-column">
                                <Typography color={colors.white} variant="h1">
                                    Reliable & Ultrafast
                                    Websites Hosting
                                    & Stores.
                                </Typography>
                                <Typography color={colors.white} className="banner-text" fontSize={fonts.fontSize[20]} paragraph={true}>
                                    Powerful platform recommended by WordPress.org and trusted
                                    <br />
                                    by the owners of over <span>2,800,000</span> domains.
                                </Typography>
                                <Box className="buttons-box">
                                    <CustomButton text="Get Started" color="orange" />
                                    <CustomButton text="Read More" border />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid className="image-column-home" item lg={6}>
                            <Box className="image-wrapper">
                                {
                                    renderBackgroundAnimation()
                                }
                                <img src="https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/main.png" alt="image" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
        </Box>
    )
}

export default HomeBackground;