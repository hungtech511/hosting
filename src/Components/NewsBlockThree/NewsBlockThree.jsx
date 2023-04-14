import React from 'react'
import '@components/NewsBlockThree/NewsBlockThree.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function NewsBlockThree({ data }) {
  return (
    <div className='news-block-three'>
      <div className='news-block-three_image'>
        <a href="#">
          <img src={data?.image} alt='image' />
        </a>
      </div>
      <div className='news-block-three_info'>
        <div className='news-block-three_info_post-meta'>
          <div className='news-block-three_info_post-meta_content'>
            <span><FontAwesomeIcon icon={faGauge} /></span>
            <p>{data?.date}</p>
          </div>
          <div className='news-block-three_info_post-meta_content'>
            <span><FontAwesomeIcon icon={faServer} /></span>
            <p>{data?.server}</p>
          </div>
        </div>
        <div className='news-block-three_info_title'>
          <h3><a href='#'>{data?.title}</a></h3>
        </div>
        <div className='news-block-three_info_options'>
          <div className='news-block-three_info_options-btn'>
            <p>Read More</p>
            <span><FontAwesomeIcon icon={faArrowRightLong} /></span>
          </div>
          <div className='news-block-three_info_options-btn'>
            <p>Ritarx Dimay</p>
          </div>
        </div>
      </div>
    </div>
  )
}
