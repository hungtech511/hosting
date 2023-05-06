import * as React from "react"
import { styled } from "@mui/material/styles"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { ColorTheme, FontSizeTheme, FontWeightTheme } from "@assets/theme"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "none",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  "&:last-child":{
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  },
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props?.expanded === props?.expandeds ? (
        <RemoveIcon  sx={{ fontSize: "0.9rem" }} />
      ) : (
        <AddIcon  sx={{ fontSize: "0.9rem" }} />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  
}))

const CustomizedAccordions = ({ accordionLists }) => {
  const colors = ColorTheme();
  const {fontSize} = FontSizeTheme();
  const {fontWeight} = FontWeightTheme();
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : "false")
  }

  return accordionLists?.map((accordion, __) => (
      <Accordion
        key={accordion?.id}
        expanded={expanded === accordion?.expandeds}
        onChange={handleChange(accordion?.expandeds)}
        className="accordion-item"
        >
        <AccordionSummary
          aria-controls={`panel${accordion?.id}d-content`}
          id={`panel${accordion?.id}d-header`}
          expanded={expanded}
          expandeds={accordion?.expandeds}
          className="accordion-heading"
          >
          <Typography className="accordion-title" fontWeight={fontWeight[600]} fontSize={fontSize[20]}>{accordion?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-content" fontSize={fontSize[18]}>{accordion?.description}</Typography>
        </AccordionDetails>
      </Accordion>
  ))
}

export default CustomizedAccordions
