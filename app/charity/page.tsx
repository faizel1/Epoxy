'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// https://epoxy-ochre.vercel.app/
import { Reveal, Tween } from 'react-gsap';
const FadeInLeft = ({ children }: any) => {
  return (
    <Tween from={{ x: '-500', opacity: 0 }} to={{ x: '0', opacity: 1 }}>
      {children}
    </Tween>
  )
}

const FadeInRight = ({ children }: any) => {
  return (
    <Tween from={{ x: '500', opacity: 0 }} to={{ x: '0', opacity: 1 }}>
      {children}
    </Tween>
  )
}


const Charity = () => {
  return (
    <div className="max-w-[100%] min-h-screen overflow-hidden">
      <div className="hero hero.align-items-left h-[300px] md:h-[400px] flex items-center justify-center " style={{ backgroundImage: 'url(/img/abtMobile.png)' }}>
        <div className="  text-[#292F36] text-center flex items-end justify-center flex-1 h-full">
          <div className="bg-white py-5 px-20 rounded-t-2xl">

            <h1 className='text-2xl lg:text-5xl font-bold' >Charity</h1>
            <h3 className='text-md lg:text-xl font-extralight' >Home / Charity</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-20 px-7 lg:px-44 py-5 md:py-20">
        <div className="flex flex-col md:flex-row md:pt-10  gap-10 sm:gap-5 lg:gap-20 font-Poppins">
          <div className='w-full md:w-[50%] order-2 md:order-2'>
            {/* <p className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-10'>What We Do</p> */}
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
     
            {/* <p className='py-5 md:py-10 text-lg text-[#5B5B5B]' >Our company specializes in providing top-quality Epoxy flooring services for a variety of industries and applications. From commercial and industrial spaces to residential homes, we offer a wide range of customizable options to meet your specific needs. Our highly skilled team of professionals is dedicated to delivering exceptional results, using only the best materials and techniques available.</p> */}
           
            <p className='py-5 md:py-10 text-lg text-[#5B5B5B]' >
            Our company recently made a contribution to the Fasil Timhertbet school, which is situated near the Semien hotel. We donated a total of 47 shoes to provide for underprivileged students.
We believe that access to basic necessities such as shoes should not be a barrier to education. We are committed to supporting the education of children in underprivileged communities and believe that small acts of kindness can go a long way in making a difference in their lives.
            </p>
            </FadeInLeft>
            </Reveal>
          </div>
          <div className='w-full md:w-[50%] order-1 md:order-2'>
          <Reveal repeat trigger={<div />}>
              <FadeInRight>
            <img loading='lazy' src={"/img/charityOne.webp"} width={300} height={500} className='w-[100%] max-h-[650px]' alt='intro Image' />
       
            </FadeInRight>
            </Reveal>
          </div>
        </div>


        <div className="flex flex-col md:flex-row md:pb-5 gap-4 sm:gap-5 lg:gap-20 font-Poppins">
          <div className='w-full md:w-[50%]'>
          <Reveal repeat trigger={<div />}>
              <FadeInLeft>
            <img loading='lazy' src={"/img/charityTwo.webp"} width={300} height={500} className='w-[100%] max-h-[650px]' alt='intro Image' />
            </FadeInLeft>
            </Reveal>
          </div>
          <div className='w-full md:w-[50%]'>
          <Reveal repeat trigger={<div />}>
              <FadeInRight>

            <p className='py-5 md:py-10 text-lg text-[#5B5B5B]' >We hope that our contribution of shoes will not only provide the students with the necessary resources to attend school but also inspire them to achieve their full potential. We are proud to have made a positive impact in the lives of these students and look forward to continuing our efforts in supporting education for all.</p>
            </FadeInRight>
            </Reveal>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Charity