import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import image8 from './photo7.jpg';
const Trend8 = () => {
  return (
    <div className='module-8'>
         <img src={image8} alt="" />
         <div className="overlay">
        <h3>One line heading of the blog</h3>
        <div className="arrow-icon"><a href="/"><GoArrowUpRight /></a></div>
        </div>
      
    </div>
  )
}

export default Trend8
