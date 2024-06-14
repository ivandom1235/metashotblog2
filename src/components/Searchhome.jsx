import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const Searchhome = () => {
  return (
    <div className='searchhome'>
        <a href="/" ><span className="home"><IoHomeOutline /></span></a>
        <a href="/search"><span className="home"><FaSearch /></span></a>
        
        

      
    </div>
  )
}

export default Searchhome
