import Header from "@layouts/Header/Header"
import HomeBackground from "@layouts/Home/HomeBackground"
import HomeServices from "@layouts/Home/HomeServices"
import CallUsNow from "@layouts/Home/CallUsNow"
import SecurityFirst from "@layouts/Home/SecurityFirst"
import LatestFeatures from "@layouts/Home/LatestFeatures"
import ControlPanel from "@layouts/Home/ControlPanel"
import PricingPlan from "@layouts/Home/PricingPlan"
import Testimonial from "@layouts/Home/Testimonial"
import AccordionIner from "@components/Accordion/AccordionIner"
import BlogList from "@layouts/Home/BlogList"
import HomePartner from "@layouts/Home/HomePartner"
import Footer from "@layouts/Footer"

import "./Home.scss"

const Home = () => {
  return (
    <>
      <Header/>
      <HomeBackground background="backgroundHome" />
      <HomeServices />
      <PricingPlan background="lightBlue"/>
      <CallUsNow background="backgroundHome" />
      <SecurityFirst />
      <LatestFeatures background="backgroundHome" />
      <ControlPanel />
      <Testimonial background="lightBlue"/>
      <AccordionIner />
      <BlogList/>
      <HomePartner/>
      <Footer background="backgroundHome"/>
    </>
  )
}
export default Home
