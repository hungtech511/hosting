import Header from "@layouts/Header/Header"
import PageTitle from "@components/PageTitle"
import AboutUsSection from "@layouts/AboutUs/AboutUsSection"
import WhyChooseUs from "@layouts/WhyChooseUs"
import AccordionPage from "@layouts/AccordionPage"
import Footer from "@layouts/Footer"
import JoinTodayWithUs from "@layouts/AboutUs/JoinTodayWithUs"
import Testimonial from "@layouts/Testimonial"

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageTitle subTitle="Blog Page">HOSTING WEBSITE MANAGE</PageTitle>
      <AboutUsSection/>
      <WhyChooseUs/>
      <JoinTodayWithUs background="lightBlue2"/>
      <Testimonial/>
      <AccordionPage/>
      <Footer></Footer>
    </>
  )
}
export default AboutUs
