import Grid from "@mui/material/Unstable_Grid2"
import React from "react"
import CardItem from "./Item"
import { listCard } from "@utils/constant"
import "./Grid.scss"

const CustomListItem = () => {
  return (
    <Grid container spacing={2}>
      {listCard?.map((data) => (
        <CardItem key={data.id} {...data} />
      ))}
    </Grid>
  )
}

export default CustomListItem
