import { ColorTheme } from "@assets/theme";
import { Box } from "@mui/material";

const ItemBackground = ({ imageSrc, className, children }) => {
    const colors = ColorTheme();
    return (
        <Box
            className={className}
            sx={{
                backgroundImage: `url(${imageSrc})`,
            }}
        >
            {children || null}
        </Box>
    )
}
export default ItemBackground;