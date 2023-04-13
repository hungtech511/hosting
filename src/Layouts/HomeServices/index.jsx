import { Container } from "@mui/material"
import HeadingTitle from "@components/HeadingTitle"
import CustomListItem from "@components/ListItems"

const HomeServices = () => {
  return (
    <div>
      <Container>
        <HeadingTitle highlight="Service" subTitle="Service" center>
          Hostix Provide Best Service For Your Business
        </HeadingTitle>
        <CustomListItem />
      </Container>
    </div>
  )
}

export default HomeServices
