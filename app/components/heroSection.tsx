"use client"
import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VideoModal from '../components/VideoModal';


const HeroSection = () => {
  return (
    <div >
      {/* <div className=" top-0 left-0">

      <div className="blackOut">
  <div className="popupAlignCenter">
  </div>
</div>

<div className="videoPopup">
  <a href="javascript:void(0)" onclick="videoPopupItem.launchPopUp();">
    <img src="http://www.gap.com/Asset_Archive/GPWeb/content/0012/937/638/assets/desktop/021417_HP_US_EC_IconShop_DESK_6_2x.jpg" alt="watch video">
  </a>
</div>
      </div> */}

<div>
    </div>
      <div className="hero hero.align-items-left min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-115px)] " style={{ backgroundImage: 'url(/img/heroEp.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mt-20">
          <div className="w-full md:max-w-[40rem]">
            <h1 className="mb-5 text-4xl sm:text-6xl text-left font-bold">
              <TypeAnimation
                sequence={[
                  "Leading epoxy flooring contractor in Ethiopia ",
                  1000,
              
                ]}
                speed={30}
                repeat={10}
              />
                     
            </h1>
            <p className="mb-5 text-left ">If you&apos;re in search of a reliable and experienced epoxy flooring contractor in Ethiopia, look no further! Our team of experts are dedicated to providing top-notch service and quality workmanship. We use only the best materials and techniques to ensure your flooring is durable, long-lasting, and aesthetically pleasing. </p>
            <div className="my-10 flex items-center justify-center md:justify-start gap-10 ">
            <Link href="/contact-us">
              <motion.div  animate={{ rotate: 360 }}
                transition={{
                    type: "spring",
                    damping: 50,
                    mass: 0.75,
                    stiffness: 100,
                }} className="btn border-none text-white text-[14px] normal-case  bg-[#F58A07] hover:bg-white hover:text-[#F58A07]  rounded-full min-w-[12rem] "> Contact Us </motion.div></Link>
              <p className='cursor-pointer hover:text-[#F58A07]' >Watch Video</p>
            </div>
            <p className='mb-10 text-left text-[#FFFFFF80]' >Worked with 100+ Companies</p>

            {/* <div className="flex items-start justify-start">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

