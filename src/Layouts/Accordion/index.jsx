import * as React from "react"
import { styled } from "@mui/material/styles"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  background: "none",
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props?.expanded === props?.expandeds ? (
        <RemoveIcon sx={{ fontSize: "0.9rem" }} />
      ) : (
        <AddIcon sx={{ fontSize: "0.9rem" }} />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

const CustomizedAccordions = ({ accordionLists }) => {
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return accordionLists?.map((accordion) => (
    <div>
      <Accordion
        key={accordion?.id}
        expanded={expanded === accordion?.expandeds}
        onChange={handleChange(accordion?.expandeds)}>
        <AccordionSummary
          aria-controls={`panel${accordion?.id}d-content`}
          id={`panel${accordion?.id}d-header`}
          expanded={expanded}
          expandeds={accordion?.expandeds}>
          <Typography>{accordion?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{accordion?.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ))
}

export default CustomizedAccordions
