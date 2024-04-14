import React from 'react'
import './section.css'
import SliderSwiper from '../components/slider-swiper3';

const bannerStyle = {
   width: '100%',
   height: '400px'
}

const Home = () => {
  return (
    <section>
      <div className='banner' style={bannerStyle}>
        <SliderSwiper />
      </div>
    </section>
  )
}

export default Home
