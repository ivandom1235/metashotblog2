import React from 'react'
import image5 from './photo3.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Trendfive = () => {
  return (
    <div className='module-5'>
        
        <img src={image5} alt="" />
        <div className="overlay">
        <h3>One line heading of the blog</h3>
        <div className="arrow-icon"><a href="/"><GoArrowUpRight /></a></div>
        </div>
        
      
    </div>
  )
}

export default Trendfive
