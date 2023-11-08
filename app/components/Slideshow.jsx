/* eslint-disable @next/next/no-img-element */
"use client"
// import React, { useState } from 'react';

// const Slideshow = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     if (currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div className="slideshow">
//       <button onClick={prevImage} disabled={currentImageIndex === 0}>
//         Previous
//       </button>
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={index === currentImageIndex ? 'active' : ''}
//           />
//         ))}
//       </div>
//       <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Slideshow;

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';

SwiperCore.use([Navigation]);

function Slideshow() {
  const images = [
    '/img/slide1.png',
    '/img/slide2.png',
    '/img/slide3.png',
    '/img/slide1.png',
    '/img/slide2.png',
    '/img/slide3.png',
    '/img/slide1.png',
    '/img/slide2.png',

  ];

  const [swiper, setSwiper] = useState(null);

  const [progress, setProgress] = useState(0);

  const updateProgress = (increment) => {
    setProgress(prev => prev + increment);
  }

  const slidesPerViewRef = useRef(3);

  // Set slides per view
  const setSlides = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      slidesPerViewRef.current = 3;
    } else if (width >= 768) {
      slidesPerViewRef.current = 2;
    } else {
      slidesPerViewRef.current = 1;
    }
  }
  const totalSlides = images.length - slidesPerViewRef.current;

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      const increment = 100 / totalSlides;

      updateProgress(increment);
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      const increment = 100 / totalSlides;

      updateProgress(-increment);
      swiper.slidePrev();
    }
  };

  // Call on mount and resize
  useEffect(() => {
    setSlides();

    window.addEventListener('resize', setSlides);

    return () => window.removeEventListener('resize', setSlides);
  }, []);

  return (
    <div className='relative'>

      <Swiper

        effect='fade'
        fadeEffect={{
          crossFade: true
        }}
        onSwiper={setSwiper}
        spaceBetween={50}

        // slidesPerView={slidesPerViewRef.current}
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
        // navigation
        pagination={{ clickable: true }}
      >

        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className='imgClass'
            // className={index === currentImageIndex ? 'active' : ''}
            />
          </SwiperSlide>
        ))}


      </Swiper>

      <div className="flex gap-5 py-5  items-center">
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
        <div className="progress" style={{ width: `${progress}%` }}></div>

      </div>
    </div>
  );
}

export default Slideshow;
