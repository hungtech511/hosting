import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "@assets/image/logo-4.svg";
import './CanvasRight.scss';

const CanvasRight = () => {

    const ListIcon = [
        {
            id: 1,
            className:"fab fa-facebook-f",
            path: "facebook.com"
        },
        {
            id: 2,
            className:"fab fa-twitter",
            path: "facebook.com"
        },
        {
            id: 3,
            className:"fab fa-instagram",
            path: "facebook.com"
        },
        {
            id: 4,
            className:"fab fa-youtube",
            path: "facebook.com"
        }
    ]

    return (
        <Box className="offcanvas__right">
            <Box className="offcanvas__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </Box>
            <Box className="offcanvas__contact">
                <ul className="info-list">
                    <li>
                        <span className="icon fas fa-location-arrow"></span>
                        <span className="title">Locations</span>
                        <a href="#">999999 Bosan Road, <br /> New York, USA</a>
                    </li>
                    <li>
                        <span className="icon fas fa-location-arrow"></span>
                        <span className="title">Call Us</span>
                        <a href="#">+(00) 999 - 000 - 999</a>
                    </li>
                    <li>
                        <span className="icon fas fa-location-arrow"></span>
                        <span className="title">Email Us</span>
                        <a href="#">help@example.com</a>
                    </li>
                </ul>
                <ul className="social-list">
                    {
                      ListIcon.map((item,_)=>{
                        return(
                            <li key={item.id}>
                                <Link to={item.path} className={item.className}></Link>
                            </li>
                        )
                      })  
                    }
                </ul>
            </Box>
        </Box>
    )
}
export default CanvasRight;