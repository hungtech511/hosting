import { ColorTheme, FontSizeTheme, FontWeightTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";

import "./Footer.scss";
import CustomButton from "@components/Button";
import { ListIcon } from "@utils/constant";

const Footer = ({ background }) => {
    const colors = ColorTheme();

    const listMenu = () => {
        return (
            <>
                {
                    new Array(6).fill(0).map((item, index) => {
                        return (
                            <li key={index} className="menu-item">
                                <a href="#">Web Hosting</a>
                            </li>
                        )
                    })
                }
            </>
        )
    }
    return (
        <Box
            sx={{
                backgroundColor: colors[background],
            }}
            color={colors["white"]}
            className="footer"
        >
            <Container>
                <Box className="footer-top">
                    <Grid container columnSpacing={{ lg: 2, md: 3, sm: 3 }}>
                        <Grid item lg={7} md={6}>
                            <Grid container columnSpacing={{ lg: 10, md: 3, sm: 3 }}>
                                <Grid className="footer-column" item lg={4} md={6} sm={6} xs={12}>
                                    <Typography color={colors["white"]} variant="h5">Contact Info</Typography>
                                    <ul className="contact-list">
                                        <li>
                                            <span className="fal fa-map-marker-alt"></span>
                                            30 Commercial Road Fratton, Australia
                                        </li>
                                        <li>
                                            <span className="fal fa-server"></span>
                                            g.xber@company.com
                                        </li>
                                        <li>
                                            <span className="far fa-phone-alt"></span>
                                            Whatsapp 1-888-452-1505
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid className="footer-column" item lg={4} md={6} sm={6} xs={12}>
                                    <Typography color={colors["white"]} variant="h5">Hosting Service</Typography>
                                    <ul className="menu-list">
                                        {listMenu()}
                                    </ul>
                                </Grid>
                                <Grid className="footer-column" item lg={4} md={6} sm={6} xs={12}>
                                    <Typography color={colors["white"]} variant="h5">Domains Service</Typography>
                                    <ul className="menu-list">
                                        {listMenu()}
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={5} md={6}>
                            <Grid container columnSpacing={{ lg: 2, md: 3, sm: 3 }}>
                                <Grid className="footer-column" item lg={5} md={12}>
                                    <Typography color={colors["white"]} variant="h5">Support</Typography>
                                    <ul className="menu-list">
                                        {listMenu()}
                                    </ul>
                                </Grid>
                                <Grid className="footer-column" item lg={7} md={12}>
                                    <Typography color={colors["white"]} variant="h5">Subscribe Newsletter</Typography>
                                    <form>
                                        <input type="text" placeholder="Email" />
                                        <CustomButton type="submit" text="Subscribe Now" color="orange" noCircle longButton noArrow />
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="footer-bottom">
                    <Box className="footer-bottom-wrapper">
                        <ul className="social-box">
                            {
                                ListIcon.map((item, __) => {
                                    return (
                                        <li key={item.id}>
                                            <a style={{ color: colors["white"] }} href={item?.path} className={item?.className}></a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Box className="copyright">
                            ©2023 Unicode
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;