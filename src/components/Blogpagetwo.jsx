import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination,EffectCoverflow } from 'swiper/modules';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Postbox from './blogepagecomponents/Postbox';
import Onetrend from './whattrending/Onetrend';
import Trendtwo from './whattrending/Trendtwo';
import Trendthree from './whattrending/Trendthree';
import Trendfour from './whattrending/Trendfour';
import Trendfive from './whattrending/Trendfive';
import Trendsix from './whattrending/Trendsix';
import Trend7 from './whattrending/Trend7';
import Trend8 from './whattrending/Trend8';
import Trendbox1 from './trending/Trendbox1';


const Blogpagetwo = () => {
  return (<div className="cen">
    <div className="lastviewed"><h3>last viewed</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
        <SwiperSlide><Postbox></Postbox></SwiperSlide>
      </Swiper>

      <h3>For you</h3>
      <div className="trendcontainer">
      <Onetrend></Onetrend>
      <Trendtwo></Trendtwo>
      <Trendthree></Trendthree>
      <Trendfour></Trendfour>
      <Trendfive></Trendfive>
      <Trendsix></Trendsix>
      <Trend7></Trend7>
      <Trend8></Trend8>
      </div>
      <div className="hotstops">
        <h3>Whats Trending?</h3>
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
          <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
        <SwiperSlide>
        <Trendbox1></Trendbox1>
        </SwiperSlide>
      </Swiper>
        


      </div>

      </div>
      </div>
  )
}

export default Blogpagetwo
