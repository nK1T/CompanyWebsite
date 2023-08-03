import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import taylor from '../../images/taylor.jpg'
import travis from '../../images/travis.webp'
import './Testimonial.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='heading' id='Testimonial'>
        <span>Our Happy Clients</span>
    </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            300:{
                slidesPerView:1,
            },
            700:{
                slidesPerView:2,
            }
        }}    
      >
        <SwiperSlide>
            <div className='c-msg'>
            <p>"Gulmohar Digitech is doing a good job; talented web designers and developers built great solutions. They designed and developed an excellent eCommerce portal for our company. Kudos to their team; I would recommend this company to all."</p>
            </div>
            <div className="c-data">
            <figure>
                <img src={taylor}></img>
            </figure>
            <div className="c-name">
                <p>Shrey S</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='c-msg'>
            <p>"I have always found Gulmohar Digitech a pleasure to work with. They have been flexible, helpful and efficient. It is a best option for website designing & other marketing activities. They have a great experienced team who is very sincere & responsible."</p>
            </div>
            <div className="c-data">
            <figure>
                <img src={travis}></img>
            </figure>
            <div className="c-name">
                <p>Ajay S</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='c-msg'>
            <p>"Gulmohar DigiTech is one of the finest firms I have ever known. The internal organisational structure is really a boon here. People tend to listen you and support you. They provide professional services with good quality like no one else."</p>
            </div>
            <div className="c-data">
            <figure>
                <img src={taylor}></img>
            </figure>
            <div className="c-name">
                <p>Shashank A</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='c-msg'>
            <p>"Gulmohar Digitech is doing a good job; talented web designers and developers built great solutions. They designed and developed an excellent eCommerce portal for our company. Kudos to their team; I would recommend this company to all."</p>
            </div>
            <div className="c-data">
            <figure>
                <img src={travis}></img>
            </figure>
            <div className="c-name">
                <p>Shrey S</p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
