import React from 'react'
import image1 from './hori1.jpg'
import Slidetext from './Slidetext'

const Slide = () => {
  return (
    <div className='content'>
      <img src={image1} alt="no" />
      <span><Slidetext></Slidetext></span>
    </div>
  )
}

export default Slide
