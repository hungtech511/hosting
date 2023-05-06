import HeadingTitle from "@components/HeadingTitle";
import AccordionIner from "@components/Accordion/AccordionIner";

const AccordionPage = () => {
    const HeadingAccordion = () => {
        return (
            <HeadingTitle highlight="Choose Us" subTitle="We keep the term simple" subTitleTop center>
                Why Choose Us For business
            </HeadingTitle>
        )
    }
    return (
            <AccordionIner heading={<HeadingAccordion/>} noHeadingInside></AccordionIner>
    )
}

export default AccordionPage;