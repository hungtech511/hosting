import PageTitle from "@components/PageTitle"
import Header from "@layouts/Header/Header"
import AboutUsSection from "@layouts/AboutUs/AboutUsSection"
import AccordionPage from "@layouts/AccordionPage"
import Footer from "@layouts/Footer"

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageTitle subTitle="Blog Page">HOSTING WEBSITE MANAGE</PageTitle>
      <AboutUsSection/>
      <AccordionPage/>
      <Footer></Footer>
    </>
  )
}
export default AboutUs
