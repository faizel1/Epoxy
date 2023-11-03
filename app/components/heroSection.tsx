import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div >
      <div className=" top-0 left-0">

        <Navbar />
      </div>
      <div className="hero hero.align-items-left min-h-[calc(100vh-105px)] " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[40rem]">
            <h1 className="mb-5 text-6xl text-left font-bold">Prosper with our bespoke solutions Custom Epoxy Floors</h1>
            <p className="mb-5 text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
            <div className="my-10 flex items-center justify-start gap-10 ">

              <button className="btn border-none text-white text-[14px] normal-case  bg-[#F58A07] rounded-full">See Our Services</button>
              <p>See Our Portfolio</p>
            </div>
            <p className='mb-10 text-left text-[#FFFFFF80]' >Worked with 100+ Companies</p>

            <div className="flex items-start justify-start">
              <div className="flex mr-3 gap-1">

              <Image src="/img/logo-icon-1.png" className='w-[24px] h-[24px]' width={34} height={34} alt="Logo" />
              <p>logoipsum</p>
              </div>
              <div className="flex mr-3 gap-1">

              <Image src="/img/logo-icon-2.png" className='w-[24px] h-[24px]' width={34} height={34} alt="Logo" />
              <p>logoipsum</p>

              </div>
              <div className="flex mr-3 gap-1">

              <Image src="/img/logo-icon-3.png" className='w-[24px] h-[24px]' width={34} height={34} alt="Logo" />
              <p>logoipsum</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
