import { Container, Typography } from "@mui/material"
import CustomButton from "@components/Button"
import CustomListItem from "@components/ListItems"
import Title from "@components/Title"

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Home nè</Typography>
      <CustomButton />
      <Title highlight="Service" subTitle="Service" center>
        Hostix Provide Best Service For Your Business
      </Title>
      <Title highlight="Service" subTitle="Service">
        Hostix Provide Best Service For Your Business
      </Title>
      <CustomListItem />
    </Container>
  )
}
export default Home
