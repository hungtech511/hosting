import React from "react"
import CustomizedAccordions from ".."
import { Box, Container, Grid } from "@mui/material"
import ItemBackground from "@components/ItemBackground"
import { accordionLists,accordionBackgroundImageList } from "@utils/constant"
import "./Accordion.scss"

const AccordionIner = ({ heading, noHeadingInside = false }) => {
  return (
    <Box className="accordion-inner">
      {
        noHeadingInside && 
        <>
          {
            accordionBackgroundImageList.map((item,index) =>{
              return (
                <ItemBackground key={item.id} className={item.className} imageSrc={item.imageSrc}/>
              )
            })
          }
        </>
      }
      <Container>
        <Box component="div" className={noHeadingInside ? "" : "fag-section"}>
          {heading}
          <Box className={noHeadingInside && "section"}>
            <Grid container columnSpacing={noHeadingInside ? 10 : 2} rowSpacing={5}>
              <Grid item xs={12} md={6}>
                <CustomizedAccordions accordionLists={accordionLists} />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomizedAccordions accordionLists={accordionLists} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AccordionIner
