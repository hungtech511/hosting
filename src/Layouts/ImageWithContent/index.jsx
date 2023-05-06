import { Box, Container, Grid } from "@mui/material";

import './ImageWithContent.scss';

const ImageWithContent = ({ image, content, className }) => {
    return (
        <Container className={className || ""}>
            <Grid container spacing={{ lg: 5, md: 3, sm: 3 }}>
                <Grid className="plan-box" item xs={12} sm={6} md={6} lg={5} order={{ lg: 1, xs: 2 }}>
                    {image}
                </Grid>
                <Grid className="plan-box" item xs={12} sm={6} md={6} lg={7} order={{ lg: 2, xs: 1 }}>
                    {content}
                </Grid>
            </Grid>
        </Container>
    )
}
export default ImageWithContent;