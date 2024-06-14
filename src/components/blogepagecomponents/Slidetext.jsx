
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import React, { useState } from 'react';

const Slidetext = () => {
    const [viewCount, setViewCount] = useState(0);

  const handleViewClick = () => {
    setViewCount(viewCount + 1);
    };

    const [viewHeart, setViewHeart] = useState(0);
    const handleHeartClick = () => {
        setViewHeart(1);

  };
  return (
    
    <div className='slidetext'>
        <span className="number">NO 1</span><br />
        <span className="blogheading">heading of the blog</span><br />
        <span className="des">brief description of the blog in which you are telling Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque accusantium par usually keep it less </span><br />
        <button className="view-btn" onClick={handleViewClick}><a href="/">view more</a></button>
        <button className="hearts" onClick={handleHeartClick}><span className="hearticon"><CiHeart /> </span> {viewHeart}</button>
        <button className="views"><FaEye /> {viewCount}</button>
      
    </div>
  );
}

export default Slidetext
