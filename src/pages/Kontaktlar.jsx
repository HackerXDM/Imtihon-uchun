import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles.css';
import { styles } from "../styles"

// import required modules
import { Navigation } from 'swiper/modules';


const Kontaktlar = () => {
  return (
    <>
    <div className={`${styles.container}`}>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 text-center py-3">
        <SwiperSlide>
      <h1 className='text-4xl font-serif'>Biz brendlarni sotib olamiz</h1>
      <p className='py-5 w-[700px] font-serif text-lg ml-[20%]'>Rolex Aerowatch A.Lange & Sohne  Alpina Apple Watch Armand Nicolet  Armin Strom Arnold & Son Artya Audemars Piguet Ball Baume Mercier Bell Ross Blancpain</p>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Kontaktlar