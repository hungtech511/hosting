import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Children } from 'react';


export default function SliderComponent({ children, settings, component }) {
  // const settings = {
  //   // dots: true,
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  // console.log(children)
  // const data = children.props.data
  return (
    <>
      <Slider {...settings}>
        {component}
      </Slider>
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
    </>
  )
}

// export default SliderComponent(CommentPost)
