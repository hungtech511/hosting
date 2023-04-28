import { FontSizeTheme, FontWeightTheme } from "@assets/theme";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../Button";

import "./BlogItem.scss";

const BlogItem = ({...item}) => {
    const { fontSize } = FontSizeTheme();
    const { fontWeight } = FontWeightTheme();

    return (
        <Box className="inner-box blog-item">
            <Box className="image">
                <Link to="/">
                    <img src={item.imageSrc} alt="blog image" />
                </Link>
            </Box>
            <Box className="content">
                <ul className="blog-meta">
                    <li>
                        <span className="fal fa-alarm-clock"></span>
                        {item.date}
                    </li>
                    <li>
                        <span className="fal fa-server"></span>
                        {item.category}
                    </li>
                </ul>
                <Typography fontWeight={fontWeight[700]} fontSize={fontSize[22]} variant="h5">
                    <Link to="/">{item.title}</Link>
                </Typography>
                <Box className="lower-box">
                    <Box className="box-wrapper">
                        <CustomButton path="/hello" card />
                        <span className="blog-author">{item.author}</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default BlogItem;