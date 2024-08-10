import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './manipulate.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Manipulate = ({ children }) =>{

  return(
    <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[330px]"
      >
        { children }
      </Swiper>
  )
}

export default Manipulate