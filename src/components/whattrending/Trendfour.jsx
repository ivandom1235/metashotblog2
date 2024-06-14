import React from 'react'
import image3 from './hori1.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Trendfour = () => {
  return (
    <div className='module-4'>
    <img src={image3} alt="" />
    <div className="overlay">
   <h3>One line heading of the blog</h3>
   <div className="arrow-icon"><a href="/"><GoArrowUpRight /></a></div>
   </div>
 
</div>
  )
}

export default Trendfour
