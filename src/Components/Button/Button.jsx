import { useTheme } from "@mui/material";
import "./Button.scss";
import Button from '@mui/material/Button';


const style = {
    color:'red'
};

const anotherStyle = {
    background:'red'
}

export const CustomButton = ({ }) => {
    const theme=useTheme()
    console.log(theme);
    return (
        <Button sx={{...style,...anotherStyle}}>
            Hello World
        </Button>
    )
}