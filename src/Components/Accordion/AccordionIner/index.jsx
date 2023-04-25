import React from "react"
import HeadingTitle from "@components/HeadingTitle"
import CustomizedAccordions from ".."
import { Box, Container, Grid } from "@mui/material"
import { accordionLists } from "@utils/constant"
import "./Accordion.scss"

const AccordionIner = () => {
  return (
    <Container>
      <Box component="div" className="fag-section">
        <HeadingTitle highlight="Service" subTitle="FAQ" center>
          Frequently Asked Questions about hosting
        </HeadingTitle>
        <Grid container columnSpacing={2}>
          <Grid xs={12} md={6}>
            <CustomizedAccordions accordionLists={accordionLists} />
          </Grid>
          <Grid xs={12} md={6}>
            <CustomizedAccordions accordionLists={accordionLists} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default AccordionIner