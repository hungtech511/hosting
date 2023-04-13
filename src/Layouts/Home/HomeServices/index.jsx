import { Container } from "@mui/material";
import HeadingTitle from "@components/HeadingTitle";
import CustomListItem from "@components/ListItems";

import "./HomeServices.scss";

const HomeServices = () => {
    return (
        <div className="home-services">
            <Container>
                <HeadingTitle highlight="Service" subTitle="Service" center>
                    Hostix Provide Best Service For Your Business
                </HeadingTitle>
                <CustomListItem />
            </Container>
        </div>
    )
}

export default HomeServices;