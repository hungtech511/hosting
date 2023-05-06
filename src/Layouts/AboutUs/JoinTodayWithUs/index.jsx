import { Box, Container } from "@mui/material";
import TitleBox from "@components/TitleBox";

import './JoinTodayWithUs.scss';
import HeadingTitle from "@components/HeadingTitle";
import CustomButton from "@components/Button";
import { ColorTheme } from "@assets/theme";

const JoinTodayWithUs = ({background}) => {
    const colors = ColorTheme();
    return (
        <Box
        sx={{
            backgroundColor: colors[background],
        }}
        className="join-with-us">
            <Container>
                <TitleBox title="Join With Us Today" backgroundColor="lightWhite" hasIcon>
                    <Box className="join-with-us-wrapper">
                        <ul className="options">
                            <li>30-Day Money-Back Guarantee</li>
                            <li>Secure your files with automatic backups.</li>
                        </ul>
                        <Box>
                            <HeadingTitle highlight="1,278,620" subTitleTop center>
                            Join 1,278,620 Website Owners
                            </HeadingTitle>
                            <CustomButton text="Get Started Today" color="black" noArrow/>
                        </Box>
                        <Box className="image">
                            <img src="public/image/owner.png" alt="user" />
                        </Box>
                    </Box>
                </TitleBox>
            </Container>
        </Box>
    )
}
export default JoinTodayWithUs;