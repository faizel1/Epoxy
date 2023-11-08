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
      <div onClick={goPrev} className=" hidden sm:flex items-center px-5 cursor-pointer">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" fill="#FEF3E6" />
          <path d="M30 20.5L22.5 28L30 35.5" stroke="black" strokeWidth="2" />
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
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial1.png" alt="" className='  rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >I was blown away by the amazing work done by Nobel Nebil's team! The epoxy flooring they installed in my garage not only looks fantastic, but it's also incredibly durable and easy to clean. I couldn &apos;t be happier with the result, and I would highly recommend their services to anyone looking for top-quality flooring.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  Yafet Worku</h2>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className=' rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >I was a bit hesitant to try epoxy flooring at first, but Nobel Nebil's team made the process incredibly easy and stress-free. They were professional, courteous, and efficient, and the end result was absolutely stunning! My floors are now the envy of all my neighbors, and I couldn't be happier with the service I received.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span> Fitsum Tsegaye</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial3.png" alt="" className=' rounded-t-md' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >Nobel Nebil's team exceeded all my expectations with their epoxy flooring services. From the initial consultation to the final walkthrough, they were attentive to my needs and preferences, and worked tirelessly to ensure that everything was done to my satisfaction. I would highly recommend them to anyone looking for high-quality, affordable flooring solutions.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span> Nahom Haileselasse</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial1.png" alt="" className='rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >I was impressed by the level of expertise and attention to detail that Nobel Nebil's team brought to my epoxy flooring project. They took the time to explain the process to me and answer all my questions, and the end result was truly stunning. I would definitely use their services again and recommend them to anyone looking for top-quality flooring solutions.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>  Woldemariam Tesfaye</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className='rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >Nobel Nebil's team not only provided exceptional epoxy flooring services, but also went above and beyond to ensure that I was completely satisfied with the end result. They were friendly, professional, and responsive throughout the entire process, and I couldn't be happier with the finished product. I would definitely recommend them to anyone looking for high-quality, durable flooring solutions.</p>
            <h2 className='text-xl font-bold' ><span className='mt-20'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px]'>-</span><span className='ml-[-2px] mr-1'>-</span>Kidus Masresha</h2>
          </div>
        </div></SwiperSlide>
      </Swiper>
      <div onClick={goNext} className="hidden sm:flex items-center px-5 cursor-pointer ">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" transform="matrix(-1 0 0 1 56 0)" fill="#FEF3E6" />
          <path d="M26 20.5L33.5 28L26 35.5" stroke="black" strokeWidth="2" />
        </svg>

      </div>

    </div>
  );
};

export default Testimonial;