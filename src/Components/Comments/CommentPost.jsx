import React from 'react'
import '@components/Comments/CommentPost.scss'

export default function CommentPost({ data }) {

  return (
    data?.map(({ id, avatar, text, author, position }) => {
      return (
        <div className='comment-post' key={id}>
          <div className='comment-post_img'>
            <img src='https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/quote-icon.png' alt='comment' />
          </div>
          <div className='comment-post_text'>
            <p>{text}</p>
          </div>
          <div className='comment-post_author'>
            <div className='comment-post_author-avatar'>
              <img src={avatar} alt='comment' />
            </div>
            <div className='comment-post_author-info'>
              <h3>{author} {id}</h3>
              <p>{position}</p>
            </div>
          </div>
        </div>
      )
    })
  )
}