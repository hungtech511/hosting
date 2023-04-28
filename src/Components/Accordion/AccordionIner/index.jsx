import React from "react"
import HeadingTitle from "@components/HeadingTitle"
import CustomizedAccordions from ".."
import { Box, Container, Grid } from "@mui/material"
import { accordionLists } from "@utils/constant"
import "./Accordion.scss"

const AccordionIner = () => {
  return (
    <Box className="accordion-inner">
      <Container>
        <Box component="div" className="fag-section">
          <HeadingTitle colorHeading="white" highlight="Service" subTitle="FAQ" center>
            Frequently Asked Questions <br /> about hosting
          </HeadingTitle>
          <Grid container columnSpacing={2} rowSpacing={
            {
              sm:5
            }
          }>
            <Grid item xs={12} md={6}>
              <CustomizedAccordions accordionLists={accordionLists} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomizedAccordions accordionLists={accordionLists} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default AccordionIner
