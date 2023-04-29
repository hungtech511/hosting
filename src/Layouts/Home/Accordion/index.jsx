import AccordionIner from "@components/Accordion/AccordionIner"
import HeadingTitle from "@components/HeadingTitle";

const HomeAccordion = () => {

    const HomeHeadingAccordion = () => {
        return (
            <HeadingTitle colorHeading="white" highlight="Service" subTitle="FAQ" center>
                Frequently Asked Questions <br /> about hosting
            </HeadingTitle>
        )
    }

    return (
        <AccordionIner heading={<HomeHeadingAccordion/>}></AccordionIner>
    )
}

export default HomeAccordion;