/* eslint-disable @next/next/no-img-element */
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonial.module.css'
import { useState } from 'react';

const Testimonial = () => {

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();

    }
  };

  const goPrev = () => {
    if (swiper !== null) {

      swiper.slidePrev();
    }
  };

  return (
    <div className="w-full flex">
      <div onClick={goPrev} className=" hidden sm:flex items-center px-5">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" fill="#FEF3E6" />
          <path d="M30 20.5L22.5 28L30 35.5" stroke="black" stroke-width="2" />
        </svg>

      </div>



      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        // slidesPerView={3}
        // navigation
        onSwiper={setSwiper}
        onSlideChange={() => console.log('slide change')}
        breakpoints={
          {
            600: {
              slidesPerView: 1
            }
            ,
            980: {
              slidesPerView: 2
            }
            ,
            1279: {
              slidesPerView: 3
            }

          }

        }
      >
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className='  rounded-t-md ' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >The service was absolutely impeccible. I see myself and my family visiting here much more frequently.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  John Doe</h2>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className=' rounded-t-md ' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >The service was absolutely impeccible. I see myself and my family visiting here much more frequently.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  John Doe</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className=' rounded-t-md' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >The service was absolutely impeccible. I see myself and my family visiting here much more frequently.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  John Doe</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className='rounded-t-md ' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >The service was absolutely impeccible. I see myself and my family visiting here much more frequently.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  John Doe</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className='rounded-t-md ' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >The service was absolutely impeccible. I see myself and my family visiting here much more frequently.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  John Doe</h2>
          </div>
        </div></SwiperSlide>
      </Swiper>
      <div onClick={goNext} className="hidden sm:flex items-center px-5">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" transform="matrix(-1 0 0 1 56 0)" fill="#FEF3E6" />
          <path d="M26 20.5L33.5 28L26 35.5" stroke="black" stroke-width="2" />
        </svg>

      </div>

    </div>
  );
};

export default Testimonial;