import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/bundle';
import { EffectFade } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);
function Slider() {
   const serviceSlider= {
    loop: true,
    speed: 1000,
   
    pagination:{ clickable: true },
    autoplay:{
      delay: 4500,
      disableOnInteraction: false,
    },

    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        }
    }
  }
    return(
        
          <Swiper  modules={[EffectFade, Pagination, Navigation]} effect="fade"
     {...serviceSlider}
    >
      <SwiperSlide>
     
          <img src="../assets/images/project-1.jpg" alt="" className='img-responsive'/>
       
      </SwiperSlide>
      <SwiperSlide>
       
          <img src="../assets/images/banner-5.png" alt="" className='img-responsive' />
       
      </SwiperSlide>
      <SwiperSlide>
       
          <img src="../assets/images/banner-3.png" alt="" className='img-responsive'/>
        
      </SwiperSlide>
      <SwiperSlide>
       
          <img src="../assets/images/banner-4.png" alt="" className='img-responsive' />
        
      </SwiperSlide>
      
    </Swiper>
        
        
        
      
    );
}
export default Slider;