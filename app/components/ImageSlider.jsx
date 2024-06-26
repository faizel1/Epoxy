"use client"
const data={
    "resources": [
      {
        "title": "Find me on Twitter",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Welcome to Ark Labs",
        "link": "https://ark-labs.co.uk",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Some sort of third title",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "A personal site perhaps?",
        "link": "https://robkendal.co.uk",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Super item number five",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Super item number six",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Super item number seven",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Super item number eight",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      },
      {
        "title": "Super item number the last",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://unsplash.it/640/425?image=30"
      }
    ]
  }
  import React, { useState, useRef, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < data.resources.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isDisabled = (direction) => {
    return (direction === 'prev' && currentIndex === 0) ||
      (direction === 'next' && currentIndex === data.resources.length - 1);
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="carousel my-12 mx-auto max-w-screen-2xl px-44">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            {/* Previous button */}
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            {/* Next button */}
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => (
            <div key={index} className="carousel-item text-center relative w-64 h-64 snap-start">
              <a
                href={resource.link}
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
              >
                <img
                  src={resource.imageUrl || ''}
                  alt={resource.title}
                  className="w-full aspect-square hidden"
                />
              </a>
              <a
                href={resource.link}
                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
              >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                  {resource.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
