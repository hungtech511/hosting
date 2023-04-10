import Grid from "@mui/material/Unstable_Grid2"
import React from "react"
import CustomButton from "@components/Button"

const CardItem = ({ title, image, description }) => {
  return (
    <Grid xs={12} md={4}>
      <div className="grid__block">
        <div className="grid__block--img">
          <img src={image} alt="" />
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
