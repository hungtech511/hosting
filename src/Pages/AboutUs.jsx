import PageTitle from "@components/PageTitle"
import NewsBlockThree from '@components/NewsBlockThree/NewsBlockThree'
import CommentPost from '@components/Comments/CommentPost'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SliderComponent from '@layouts/Slider/SliderComponent'
import Slider from "react-slick";
import Sponsor from "@components/Sponsor/Sponsor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import '@components/Comments/CommentPost.scss'
import { dataCommentPost, dataNewsBlockThree, dataSponsor } from '@utils/constant'


const AboutUs = () => {
  const settings = {
    speed: 1000,
    slidesToShow: 5,
    loop: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section>
        <PageTitle subTitle="Blog Page">HOSTING WEBSITE MANAGE</PageTitle>
      </section>
      <Container>
        {/* <SliderComponent settings={settings}>
          {dataCommentPost.map((element, index) => <Fragment key={index}><CommentPost data={element} /></Fragment>)}
        </SliderComponent> */}
        {/* <Grid container spacing={5}>
          {dataNewsBlockThree.map((item, index) => (
            <Fragment key={index}>
              <Grid item md={6} lg={4} style={{ width: "100%" }}>
                <NewsBlockThree data={item} />
              </Grid>
            </Fragment>
          ))}
        </Grid> */}
        <SliderComponent settings={settings}>
          {dataSponsor.map((element, index) => <Fragment key={index}>
            <Sponsor data={element} />
          </Fragment>)}
             <Sponsor data={dataSponsor[3]} />
        </SliderComponent>
      </Container>
    </>
  )
}
export default AboutUs
