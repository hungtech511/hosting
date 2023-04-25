import { useState } from "react"
import { Box } from "@mui/material"
import Collapse from "@mui/material/Collapse";
import { listMenu } from "@utils/constant"
import { Link } from "react-router-dom";

import "./CanvasLeft.scss";


const ToggleMenu = ({item}) => {
    const [activeIndex, setActiveIndex] = useState(false);

    return (
        <>
            {
                item.hasOwnProperty("subMenu")
                &&
                <>
                    <Collapse in={activeIndex}>
                        <ul className="sub-menu">
                            {
                                item?.subMenu.map((item, index) => {
                                    return (
                                        <li key={item?.id}>
                                            <Link to={item?.path}>{item?.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Collapse>
                    <a className="expand-list" href="#" onClick={(e) => {
                        e.preventDefault();
                        setActiveIndex(
                            !activeIndex
                        )
                    }}>{activeIndex ? "-" : "+"}</a>
                </>
            }
        </>
    )
}


const CanvasLeft = () => {

    return (
        <>
            <Box className="offcanvas__left">
                <Box className="menu-bar">
                    <ul className="menu-list">
                        {
                            listMenu.map((item, _) => {
                                return (
                                    <li key={item?.id}>
                                        <Link to={item?.path}>{item?.title}</Link>
                                        <ToggleMenu item={item}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default CanvasLeft;