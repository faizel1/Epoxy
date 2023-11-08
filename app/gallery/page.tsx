/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slideshow from '../components/Slideshow'
import Testimonial from '../components/Testimonial';

const images = [
  '/img/slide1.png',
  '/img/slide2.png',
  '/img/slide1.png',
  '/img/slide2.png',
  '/img/slide1.png',
  '/img/slide2.png',
  '/img/slide1.png',
  '/img/slide2.png',
];

const data = [
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    "title": "Avatar: The Way of Water",
    "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "interval": 1500
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "title": "Black Adam",
    "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "interval": 500
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  }
];

const Gallery = () => {
  return (

    <div className="">


      <div className="hero hero.align-items-left h-[300px] md:h-[400px] flex items-center justify-center " style={{ backgroundImage: 'url(/img/abtHero.png)' }}>
        <div className="  text-[#292F36] text-center flex items-end justify-center flex-1 h-full">
          <div className="bg-white py-5 px-20 rounded-t-2xl">

            <h1 className='text-2xl lg:text-5xl font-bold' >Gallery Us</h1>
            <h3 className='text-md lg:text-xl font-extralight' >Home / Gallery</h3>
          </div>
        </div>
      </div>

      <div className="masonary-container px-5 md:px-10 lg:px-44 py-5 md:py-20 ">


        <div className="image-container">
          <div className="">

            <img src="/gallery/flooring/01.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>
          </div>
          <div className="">

            <img src="/gallery/flooring/04.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>
          <div className="">

            <img src="/gallery/flooring/08.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>
          <div className="">

            <img src="/gallery/flooring/06.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>
          <div className="">

            <img src="/gallery/flooring/02.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>

          <div className="">

            <img src="/gallery/flooring/03.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>
          <div className="">

            <img src="/gallery/flooring/07.png" alt="" />
            <p className="mb-3">Epoxy Flooring</p>

          </div>
          <div className="">

            <img src="/gallery/flooring/05.png" alt="" />
            <p className="mb-0">Minimal Bedroom table</p>

          </div>

        </div>

      </div>

    </div>


  )
}

export default Gallery