import { ColorTheme, FontSizeTheme, FontWeightTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomButton from "@components/Button";
import HeadingTitle from "@components/HeadingTitle";

import { pricingPlanList } from "@utils/constant";

import shape from '@assets/image/shape.jpg';

import "./PricingPlan.scss";
const PricingPlan = ({ background }) => {

    const colors = ColorTheme();
    const { fontSize } = FontSizeTheme();
    const { fontWeight } = FontWeightTheme();



    return (
        <Box
            sx={{
                backgroundColor: colors[background],
                backgroundImage: `url(${shape})`
            }}
            className="pricing-plan-section">
            <HeadingTitle subTitle="PRICING PLAN" highlight="Hostix" center>
                Hostix Gives You Best Price <br />
                Choose Your Plan
            </HeadingTitle>
            <Container fixed={true} maxWidth="lg">
                <Grid container spacing={{lg: 4, xs:3}}>
                    {
                        pricingPlanList?.map((item, index) => {
                            return (
                                <Grid className="plan-box" key={index} item lg={4} md={6} sm={6} xs={12} >
                                    <Box className="inner-box">
                                        <Box className="icon-box">
                                            <span className="icon">
                                                <img src={item?.imageSrc} alt="icon" />
                                            </span>
                                        </Box>
                                        <Typography fontWeight={fontWeight[700]} fontSize={fontSize[28]} variant="h3">{item?.title}</Typography>
                                        <Box fontSize={fontSize[18]} color={colors["text"]} className="text" dangerouslySetInnerHTML={{ __html: `${item?.desc}` }}>
                                        </Box>
                                        <Box
                                            color={"#666666"}
                                            fontSize={fontSize[18]}
                                            sx={{
                                                marginTop: "20px"
                                            }}>
                                            Starting At
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: "20px"
                                            }}
                                            fontSize={fontSize[42]}
                                            fontWeight={fontWeight[600]}
                                            color={"#1434a8"}
                                            className="price">
                                            <sup>$</sup>
                                            {item?.sale ? item.sale : item?.price}
                                            <sub>/ Monthly</sub>
                                        </Box>
                                        {
                                            item?.discountPercent && <Box
                                                sx={{
                                                    marginTop: "15px"
                                                }}
                                                color={"#1434a8"}
                                                fontWeight={fontWeight[500]}
                                                className="discount">
                                                {item?.discountPercent}% Discount <span>$169.99</span>
                                            </Box>
                                        }
                                        <Box
                                            sx={{
                                                marginTop: "20px"
                                            }}
                                            className="button-box">
                                            <CustomButton color="blue" text="Get Started" longButton />
                                        </Box>
                                        <Box className="renew">
                                            $ {item?.renew} /mo when you renew
                                        </Box>
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
export default PricingPlan;