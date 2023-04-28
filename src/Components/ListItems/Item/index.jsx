import Grid from "@mui/material/Unstable_Grid2"
import React from "react"
import CustomButton from "@components/Button"

const CardItem = ({ title, image, description }) => {
  return (
    <Grid item="true" xs={12} sm={6} md={6} lg={4}>
      <div className="grid__block">
        <div className="grid__block--img">
          <img src={image} alt="image" />
        </div>
        <h4>
          <a>{title}</a>
        </h4>
        <div className="grid__block--content">
          <p>{description}</p>
        </div>
        <CustomButton card />
      </div>
    </Grid>
  )
}

export default CardItem
