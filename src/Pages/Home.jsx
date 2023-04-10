import { Container, Typography } from "@mui/material"
import CustomButton from "@components/Button"
import CustomListItem from "@components/ListItems"
import HeadingTitle from "@components/HeadingTitle"

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Home nè</Typography>
      <CustomButton />
      <HeadingTitle highlight="Service" subTitle="Service" center>
        Hostix Provide Best Service For Your Business
      </HeadingTitle>
      <HeadingTitle highlight="Service" subTitle="Service">
        Hostix Provide Best Service For Your Business
      </HeadingTitle>
      <CustomListItem />
    </Container>
  )
}
export default Home
