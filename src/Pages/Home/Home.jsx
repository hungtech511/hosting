
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { ColorTheme, FontSizeTheme } from "@assets/theme";

import CustomButton from "@components/Button";
import HoverImage from "@custom/HoverImage/HoverImage";
import ItemBackground from "@components/ItemBackground";


import { listBackgroundHomeImage } from "@utils/constant";
import HomeServices from "@layouts/HomeServices";
import "./Home.scss";



const renderBackground = () => {
	return (
		<>
			{
				listBackgroundHomeImage.map((item, index) => {
					return (
						<ItemBackground key={item?.id} className={`icon-layer ${item?.className}`} imageSrc={item?.imageSrc} />
					)
				})
			}
		</>
	)
}

const Home = () => {
	const fonts = FontSizeTheme();
	const colors = ColorTheme();


	return (
		<>
			<HoverImage>
				<Box className="home-background">
					<Box className="banner-section">
						<Box className="circle-layer"></Box>
						<>
							{
								renderBackground()
							}
						</>
						<Container fixed={true} maxWidth="lg">
							<Grid container spacing={2}>
								<Grid className="content-column" item xs={6}>
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
											<CustomButton />
											<CustomButton />
										</Box>
									</Box>
								</Grid>
								<Grid className="image-column" item xs={6}>
									<Box className="image-wrapper">
										<Box className="image-pattern-layer image-animation"
											sx={{
												backgroundImage: `url(https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/part_1.png)`
											}}></Box>
										<Box className="image-pattern-layer layer-2 image-animation"
											sx={{
												backgroundImage: `url(https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/part_2.png)`
											}}></Box>
										<img src="https://themexriver.com/wp/hostix/wp-content/uploads/2023/01/main.png" alt="image" />
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Box>
				</Box>
			</HoverImage>
			<HomeServices/>
		</>
	);
};
export default Home;
