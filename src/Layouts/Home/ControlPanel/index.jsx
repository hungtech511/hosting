import { ColorTheme, FontSizeTheme } from "@assets/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomButton from "@components/Button";
import HeadingTitle from "@components/HeadingTitle";
import ItemBackground from "@components/ItemBackground";

import "./ControlPanel.scss";
import { listControlPanel } from "@utils/constant";

const ControlPanel = () => {
    const colors = ColorTheme();
    const { fontSize } = FontSizeTheme();
    return (
        <Box className="control-panel-section">
            <HeadingTitle subTitle="SECURITY" colorSubTitle="blueSubtitle" center>
                Control Panel & APIs <br/>
                Deploy and scale
            </HeadingTitle>
            <Container fixed={true} maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid className="content-column" item lg={5}>
                        {
                            listControlPanel?.map((item, index) => {
                                return (
                                    <Grid key={item?.id} item xs={12}>
                                        <Box sx={{ display: 'flex', marginBottom: '30px' }} >
                                            <Box sx={{ flexShrink: 0 }} className="icon">
                                                <img src={item?.imageSrc} alt="icon" />
                                            </Box>
                                            <Box sx={{ marginLeft: '20px' }}>
                                                <Typography marginBottom={'10px'} fontSize={fontSize[18]} variant="h4">{item?.title}</Typography>
                                                <Typography color={colors.text} fontSize={fontSize[18]} paragraph>
                                                    {item?.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                        <CustomButton color='orange' text='Get Started' />
                    </Grid>
                    <Grid className="image-column" item lg={7}>
                        <ItemBackground className="icon-layer-shape" imageSrc="public/image/pattern-16.png" />
                        <Box className="image-wrapper">
                            <img className="image-center" src="https://themexriver.com/wp/hostix/wp-content/uploads/2022/12/security-3.png" alt="image" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ControlPanel;