import React from 'react'
import image2 from './photo4.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Trendthree = () => {
  return (
    <div className='module-3'>
        
    <img src={image2} alt="" />
    <div className="overlay">
    <h3>One line heading of the blog</h3>
    <div className="arrow-icon"><a href="/"><GoArrowUpRight /></a></div>
    </div>
    
  
</div>
  )
}

export default Trendthree
