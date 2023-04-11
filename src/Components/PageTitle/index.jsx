import React from "react"
import "./PageTitle.scss"
import { Container } from "@mui/material"

const PageTitle = ({ children, subTitle }) => {
  return (
    <div className="page__title">
      <Container>
        <div className="title">{children}</div>
        <h3>{subTitle}</h3>
      </Container>
    </div>
  )
}

export default PageTitle
