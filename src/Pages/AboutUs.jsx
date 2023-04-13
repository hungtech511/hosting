import PageTitle from "@components/PageTitle"
import NewsBlockThree from '@components/NewsBlockThree/NewsBlockThree'
import CommentPost from '@components/Comments/CommentPost'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SliderComponent from '@layouts/Slider/SliderComponent'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const data = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.',
      author: 'Alex D. Denz',
      avatar: 'https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg',
      position: 'Founder, Alex Co.'
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.',
      author: 'Alex D. Denz',
      avatar: 'https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg',
      position: 'Founder, Alex Co.'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.',
      author: 'Alex D. Denz',
      avatar: 'https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg',
      position: 'Founder, Alex Co.'
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra.',
      author: 'Alex D. Denz',
      avatar: 'https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg',
      position: 'Founder, Alex Co.'
    }
  ]
  return (
    <>
      <section>
        <PageTitle subTitle="Blog Page">HOSTING WEBSITE MANAGE</PageTitle>
      </section>
      <Container>

        {/* <CommentPost data={data}/> */}
        {/* <hr></hr> */}
        <SliderComponent settings={settings} component={<CommentPost data={data} />}>
          {/* <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div> */}
          {/* <CommentPost data={data} /> */}
        </SliderComponent>

        {/* <Slider {...settings}>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
          <div className='comment-post'>
            <div className='comment-post_img'>
              <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
            </div>
            <div className='comment-post_text'>
              <p>Lorem ipsum dolor sit amt consectetur adipiscing elit, sed teiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice gravida. Risus commodo viverra. </p>
            </div>
            <div className='comment-post_author'>
              <div className='comment-post_author-avatar'>
                <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/author-1.jpg' alt='comment' />
              </div>
              <div className='comment-post_author-info'>
                <h3>Duccccc</h3>
                <p>Leader</p>
              </div>
            </div>
          </div>
        </Slider> */}
      </Container>
    </>
  )
}
export default AboutUs
