import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const GrabCursor = ({children})=> {
  return (
      <Swiper
        slidesPerView={7}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mr-40 w-full h-[180px]"
      >
        {children}
      </Swiper>
  );
}

export default GrabCursor 