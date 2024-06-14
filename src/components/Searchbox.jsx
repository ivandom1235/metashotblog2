
import image7 from './photo3.jpg';
import { FaEye } from "react-icons/fa";
import React, { useState } from 'react';

const Searchbox = () => {
    const [viewCount1, setViewCount1] = useState(0);

    const handleViewClick = () => {
      setViewCount1(viewCount1 + 1);
    };
  return (
    <div className='post-box'>
      <img src={image7} alt=":(" />
      <div className="info">
        <span className="date">foos travel-date</span><br />
        <span className="post-box-heading">lorem ipsum svsgudvisudvsfvfsv</span><br />
        
        <center><button className="view-btn" onClick={handleViewClick}><a href="/search">Read more</a></button></center>
        <span className="view-count"> <FaEye />  {viewCount1}</span>
      </div>
    </div>
  );
}

export default Searchbox
