
import { FaSearch } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Searchbox from "./Searchbox";
import 'swiper/css/grid';


const Searchpage = () => {
  return (<>
    <div className='search-container'>
      <center><div><input type="text" placeholder='Search..' /><button><FaSearch /></button></div></center>
      <div className="recent-search">
        <h3>Recent Search</h3>
        <Swiper
        slidesPerView={2.25}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
        <SwiperSlide><Searchbox></Searchbox></SwiperSlide>
      </Swiper>
        
      </div>
      </div>
      
    </>
  )
}

export default Searchpage
