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
  const [progress, setProgress] = useState(0);

  const updateProgress = (increment) => {
    setProgress(prev => prev + increment);
  }

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      const increment = 100 / 5;

      updateProgress(increment);
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      const increment = 100 / 5;

      updateProgress(-increment);
      swiper.slidePrev();
    }
  };

  return (
    <>
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
            <p className='max-w-[20rem] text-center px-8 py-5' >I was blown away by the amazing work done by Nobel Nebil&apos;s team! The epoxy flooring they installed in my garage not only looks fantastic, but it&apos;s also incredibly durable and easy to clean. I couldn &apos;t be happier with the result, and I would highly recommend their services to anyone looking for top-quality flooring.</p>
            <h2 className='text-xl font-bold' >  Yafet Worku</h2>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className=' rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >I was a bit hesitant to try epoxy flooring at first, but Nobel Nebil&apos;s team made the process incredibly easy and stress-free. They were professional, courteous, and efficient, and the end result was absolutely stunning! My floors are now the envy of all my neighbors, and I couldn&apos;t be happier with the service I received.</p>
            <h2 className='text-xl font-bold' > Fitsum Tsegaye</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial3.png" alt="" className=' rounded-t-md' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >Nobel Nebil&apos;s team exceeded all my expectations with their epoxy flooring services. From the initial consultation to the final walkthrough, they were attentive to my needs and preferences, and worked tirelessly to ensure that everything was done to my satisfaction. I would highly recommend them to anyone looking for high-quality, affordable flooring solutions.</p>
            <h2 className='text-xl font-bold' > Nahom Haileselasse</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial1.png" alt="" className='rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >I was impressed by the level of expertise and attention to detail that Nobel Nebil&apos;s team brought to my epoxy flooring project. They took the time to explain the process to me and answer all my questions, and the end result was truly stunning. I would definitely use their services again and recommend them to anyone looking for top-quality flooring solutions.</p>
            <h2 className='text-xl font-bold' >  Woldemariam Tesfaye</h2>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col max-w-[391px] sm:max-w-[491px] lg:max-w-[391px] lg:mx-auto">
          {/* <div className="w-[90%] sm:w-full imgHeight">

            <img src="/img/testimonial2.png" alt="" className='rounded-t-md ' />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <p className='max-w-[20rem] text-center px-8 py-5' >Nobel Nebil&apos;s team not only provided exceptional epoxy flooring services, but also went above and beyond to ensure that I was completely satisfied with the end result. They were friendly, professional, and responsive throughout the entire process, and I couldn&apos;t be happier with the finished product. I would definitely recommend them to anyone looking for high-quality, durable flooring solutions.</p>
            <h2 className='text-xl font-bold' >Kidus Masresha</h2>
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
        <div className=" sm:hidden flex gap-5 py-5  items-center justify-end md:justify-start">
        <button onClick={goPrev}>
          <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.679199" width="57" height="53.9171" rx="25" fill="url(#paint0_linear_7_4438)" />
            <g clipPath="url(#clip0_7_4438)">
              <path d="M21.2349 28.7768L25.4217 32.7359L25.4218 32.7359C25.6457 32.9478 25.776 33.24 25.776 33.5497C25.776 33.8594 25.6457 34.1517 25.4218 34.3635C25.1985 34.5746 24.9003 34.6896 24.5938 34.6896C24.2872 34.6896 23.989 34.5746 23.7657 34.3635L17.5161 28.4519L21.2349 28.7768ZM21.2349 28.7768H38.6562C38.9626 28.7768 39.2605 28.6618 39.4836 28.4509C39.7073 28.2392 39.8375 27.9472 39.8375 27.6378C39.8375 27.3283 39.7073 27.0363 39.4836 26.8246C39.2605 26.6137 38.9626 26.4988 38.6562 26.4988H21.2349M21.2349 28.7768V26.4988M21.2349 26.4988L25.4217 22.5396L25.4218 22.5396C25.6457 22.3278 25.776 22.0355 25.776 21.7258C25.776 21.4161 25.6457 21.1238 25.4218 20.912C25.1985 20.7009 24.9003 20.5859 24.5938 20.5859C24.2872 20.5859 23.989 20.7009 23.7657 20.912L17.5161 26.8236L21.2349 26.4988ZM17.2545 27.1938C17.3158 27.0541 17.405 26.9286 17.5157 26.824V28.4516C17.405 28.3469 17.3158 28.2214 17.2545 28.0817C17.193 27.9417 17.1611 27.7908 17.1611 27.6378C17.1611 27.4847 17.193 27.3338 17.2545 27.1938Z" fill="white" stroke="white" strokeWidth="0.8" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_7_4438" x1="54.6093" y1="2.88892" x2="171.662" y2="26.0121" gradientUnits="userSpaceOnUse">
                <stop stopColor="#474747" />
                <stop offset="0.417966" stopColor="#222222" />
              </linearGradient>
              <clipPath id="clip0_7_4438">
                <rect width="23.6478" height="25" rx="11.8239" transform="matrix(0 -1 -1 0 41 39.4617)" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </button>
        <button onClick={goNext}>
          <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.679199" width="57" height="53.9171" rx="25" fill="#F58A07" />
            <g clipPath="url(#clip0_7_4433)">
              <path d="M35.7651 29.7226L31.5783 33.6818L31.5782 33.6818C31.3543 33.8937 31.224 34.1859 31.224 34.4956C31.224 34.8053 31.3543 35.0976 31.5782 35.3094C31.8015 35.5205 32.0997 35.6355 32.4062 35.6355C32.7128 35.6355 33.011 35.5205 33.2343 35.3094L39.4839 29.3978L35.7651 29.7226ZM35.7651 29.7226H18.3438C18.0374 29.7226 17.7395 29.6077 17.5164 29.3968C17.2927 29.1851 17.1625 28.8931 17.1625 28.5836C17.1625 28.2742 17.2927 27.9822 17.5164 27.7705C17.7395 27.5596 18.0374 27.4447 18.3438 27.4447H35.7651M35.7651 29.7226V27.4447M35.7651 27.4447L31.5783 23.4855L31.5782 23.4855C31.3543 23.2736 31.224 22.9814 31.224 22.6717C31.224 22.362 31.3543 22.0697 31.5782 21.8579C31.8015 21.6468 32.0997 21.5318 32.4062 21.5318C32.7128 21.5318 33.011 21.6468 33.2343 21.8579L39.4839 27.7695L35.7651 27.4447ZM39.7455 28.1397C39.6842 28 39.595 27.8745 39.4843 27.7698V29.3974C39.595 29.2928 39.6842 29.1673 39.7455 29.0276C39.807 28.8876 39.8389 28.7367 39.8389 28.5836C39.8389 28.4306 39.807 28.2797 39.7455 28.1397Z" fill="white" stroke="white" strokeWidth="0.8" />
            </g>
            <defs>
              <clipPath id="clip0_7_4433">
                <rect x="16" y="40.4076" width="23.6478" height="25" rx="11.8239" transform="rotate(-90 16 40.4076)" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </button>
        <div className="progress hidden sm:block " style={{ width: `${progress}%` }}></div>

      </div>
      </>
  );
};

export default Testimonial;