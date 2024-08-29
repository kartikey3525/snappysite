import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function Promo() {
   const serviceSlider= {
    loop: true,
    speed: 1000,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
  }
    return(
         <div className="container text-center" style={{marginTop: '0px'}}>
          <Swiper
     {...serviceSlider}
    >
      <SwiperSlide>
     
          <img src="../assets/images/mep.png" alt="" className='img-responsive'/>
       
      </SwiperSlide>
      <SwiperSlide>
       
          <img src="../assets/images/ht.png" alt="" className='img-responsive' />
       
      </SwiperSlide>
      <SwiperSlide>
       
          <img src="../assets/images/electrical.png" alt="" className='img-responsive'/>
        
      </SwiperSlide>
      
     
    </Swiper>
        
        
        
      </div>
    );
}
export default Promo;