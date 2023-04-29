import { Box } from "@mui/material";
import ImageWithContent from "@layouts/ImageWithContent";
import AnimationImage from "@components/AnimationImage";

import HeadingTitle from "@components/HeadingTitle";
import "./AboutUsSection.scss";


const AboutUsSectionContent = () => {


    return (
        <Box className="inner-column">
            <HeadingTitle highlight="Service" subTitle="Service" subTitleTop>
                Hostix Provide Best Service
            </HeadingTitle>
            <Box className="text">
                We prepared the best web hosting plan for you to start. You will be able to <br />
                plans as you go - our custom-built algorithm will provide suggestions
            </Box>
            <ul className="features-list">
                <li>
                    Get unlimited <span>SSL</span> security certificates to encrypt your websites’ traffic.
                </li>
                <li>
                    Protect your website from DDoS attacks with Cloudflare protected nameservers.
                </li>
                <li>
                    Secure your files with automatic backups.
                </li>
                <li>Ensure your website is online with our 99.9% uptime guarantee.</li>
            </ul>
            <a href="#" className="price">Starting at <span>$2.75/mo*</span></a>
        </Box>
    )
}

const AboutUsSection = () => {
    return (
        <Box className="about-us-section">
            <ImageWithContent className="container-special" image={<AnimationImage />} content={<AboutUsSectionContent />} />
        </Box>
    )
}
export default AboutUsSection;