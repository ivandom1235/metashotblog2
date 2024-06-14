
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slide from './blogepagecomponents/Slide';
import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Spotlight2 from './blogepagecomponents/Spotlight2';



const Blogpage = () => {
  return (
  <>
    <div className='blogpage'>
      <span className="heading">Blog.</span>
      <div className="spotlight">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide></Slide>
          
        </SwiperSlide>
        <SwiperSlide>
        <Spotlight2></Spotlight2>
        </SwiperSlide>
        <SwiperSlide>
        <Spotlight2></Spotlight2>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
      </Swiper>
  
      </div></div>
      
      
    </>
  )
}

export default Blogpage
