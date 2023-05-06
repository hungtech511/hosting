import { Box, Container, Grid, Typography } from "@mui/material";
import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";
import { WhyChooseUsList } from "@utils/constant";

import "./WhyChooseUs.scss";



const WhyChooseUs = () => {
    return (
        <Box className="why-choose-us">
            <HeadingTitle highlight="Choose Us" subTitle="We keep the term simple" subTitleTop center>
                Why Choose Us For business
            </HeadingTitle>
            <Container>
                <Grid className="why-choose-us-wrapper" container spacing={{lg:10, md:3, sm: 3}}>
                    {
                        WhyChooseUsList.map((item,index) =>{
                            return(
                                <Grid key={index} className={item.className} item lg={4} md={12}>
                                    {
                                        item.hasOwnProperty("list") && item["list"].map((item,index) =>{
                                            return(
                                                <Box key={index} className="feature-box">
                                                    <Box className="inner-box">
                                                        <Box className="icon">
                                                            <img src={item.imageSrc} alt="icon" />
                                                        </Box>
                                                        <Typography variant="h5">{item.title}</Typography>
                                                        <Box className="text">
                                                            {item.text}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                    {
                                        item.hasOwnProperty("imageList") && item["imageList"].map((item,index) =>{
                                            return(
                                                <Box key={index} className="image-box">
                                                    <ItemBackground className="pattern-layer" imageSrc={item.layerImage}/>
                                                    <Box className="image">
                                                        <img src={item.imageSrc} alt="image" />
                                                        <Box className="color-one"></Box>
                                                        <Box className="color-two"></Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default WhyChooseUs;