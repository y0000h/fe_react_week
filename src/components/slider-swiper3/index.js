import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
  const imgData = [
      {
          id : 0, 
          img_path : "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
          img_alert: "간단한 설명"
      },
      {
          id : 1, 
          img_path : "https://images.unsplash.com/photo-1711636418389-1ee93ebd56fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
          img_alert: "간단한 설명"
      },
      {
          id : 2, 
          img_path : "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
          img_alert: "간단한 설명"
      }
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <>
      <Swiper navigation={true} 
              // pagination={true} 
              // pagination={pagination}
              pagination={{
                type: 'progressbar',
              }}
              modules={[Navigation, Pagination]} 
              className="mySwiper"
      >
        {
          imgData.length && imgData.map((item)=>
              <SwiperSlide>
                <img src={item.img_path} alt={item.img_alert} />
              </SwiperSlide>
          )
        } 
      </Swiper>
    </>
  );
}
