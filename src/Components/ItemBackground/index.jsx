import { Box } from "@mui/material";

const ItemBackground = ({ imageSrc, className }) => {
    return (
        <Box
            className={className}
            sx={{
                backgroundImage: `url(${imageSrc})`
            }}
        ></Box>
    )
}
export default ItemBackground;