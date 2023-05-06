import { Box } from "@mui/material";

import "./TitleBox.scss";

const TitleBox = ({title,backgroundColor,hasIcon, children, className = false}) =>{
    return(
        <Box className={backgroundColor ? `box-container ${backgroundColor} ${className || ""}` : `${className || ""} box-container`}>
            <Box className="title-box">
                <Box className={hasIcon ? "title has-icon" : "title"}>
                    {title}
                </Box>
            </Box>
            {children}
        </Box>
    )
}
export default TitleBox;