import React from 'react'
import '@components/Sponsor/Sponsor.scss'

export default function Sponsor({ data }) {
  return (
    <>
      <div className='sponsor'>
        <a href={data.link}>
          <img src={data.image} />
        </a>
      </div>
    </>
  )
}
