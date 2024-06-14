import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Catogories from "./Catogories";
import 'swiper/css/grid';
import 'swiper/css/effect-flip';

const Searchpage2 = () => {
  return (
    <div className="cat">
      <h3>Categories</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,  // Set slideShadows to false to remove shadows
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
        <SwiperSlide>
          <Catogories></Catogories>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Searchpage2
