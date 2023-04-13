import { Box } from "@mui/material";

const ItemBackground = ({ imageSrc, className, children }) => {
    return (
        <Box
            className={className}
            sx={{
                backgroundImage: `url(${imageSrc})`
            }}
        >
            {children || null}
        </Box>
    )
}
export default ItemBackground;