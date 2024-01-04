import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


function Slider() {




  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}     
       slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mb-5 p-10 place-items-center'
    >
      
        <SwiperSlide >
          <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl text-white '>
            <img className=' ' src="./elements/cheb.svg" alt="" />
            <p className='text-black font-bold'></p>
            <p>heloooooooo love u love u love u</p>
            
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl text-white '>
            <img className=' ' src="./elements/cheb.svg" alt="" />
            <p className='text-black font-bold'></p>
            <p>heloooooooo love u love u love u</p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl text-white '>
            <img className=' ' src="./elements/cheb.svg" alt="" />
            <p className='text-black font-bold'></p>
            <p>heloooooooo love u love u love u</p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl text-white '>
            <img className=' ' src="./elements/cheb.svg" alt="" />
            <p className='text-black font-bold'></p>
            <p>heloooooooo love u love u love u</p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl text-white '>
            <img className=' ' src="./elements/cheb.svg" alt="" />
            <p className='text-black font-bold'></p>
            <p>heloooooooo love u love u love u</p>
            
          </div>
        </SwiperSlide>
      
      
    </Swiper>
  );
}

export default Slider;
