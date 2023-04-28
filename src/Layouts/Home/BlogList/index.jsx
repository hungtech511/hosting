import { Box, Container, Grid } from "@mui/material";
import HeadingTitle from "@components/HeadingTitle";
import BlogItem from "@components/BlogItem";
import { BlogListHome } from "@utils/constant";

import "./BlogList.scss";

const BlogList = () => {

    return (
        <Box className="blog-list">
            <Container>
                <HeadingTitle subTitle="Blog news" center>
                    Read our latest news <br /> blog artical
                </HeadingTitle>
                <Grid container spacing={{ lg: 5, md: 4, sm: 5 , xs: 3}}>
                    {
                        BlogListHome.map((item, index) => {
                            return (
                                <Grid key={index} item xxs={12} xs={6} sm={6} md={4} lg={4} >
                                    <BlogItem {...item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default BlogList;