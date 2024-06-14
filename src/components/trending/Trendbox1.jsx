import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import image8 from './photo7.jpg';
const Trendbox1 = () => {
  return (
    <div className='trendbox-1'>
         <img src={image8} alt="" />
         <div className="overlay"><div className="underlay">
        <h3>One line heading of the blog</h3><br />
        <p>Short description of the blog about 10-15 lines</p></div>
        <div className="arrow-icon"><a href="/"><GoArrowUpRight /></a></div>
        </div>

      
    </div>
  )
}

export default Trendbox1
