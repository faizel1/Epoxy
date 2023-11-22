'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// https://epoxy-ochre.vercel.app/
const AboutUS = () => {
  return (
    <div className="max-w-[100%] overflow-hidden">
      <div className="hero hero.align-items-left h-[300px] md:h-[400px] flex items-center justify-center " style={{ backgroundImage: 'url(/img/abtMobile.png)' }}>
        <div className="  text-[#292F36] text-center flex items-end justify-center flex-1 h-full">
          <div className="bg-white py-5 px-20 rounded-t-2xl">

            <h1 className='text-2xl lg:text-5xl font-bold' >About Us</h1>
            <h3 className='text-md lg:text-xl font-extralight' >Home / About Us</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 px-7 lg:px-44 py-5 md:py-20">
        <div className="flex flex-col md:flex-row md:pt-10  gap-10 sm:gap-5 lg:gap-20 font-Poppins">
          <div className='w-full md:w-[50%] order-2 md:order-2'>
            {/* <p className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-10'>What We Do</p> */}
            <TypeAnimation
              className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-10'
              sequence={[
                'What We Do',
                1000,


              ]}
              // style={{ fontSize: '2em' }}
              cursor={false}

              repeat={Infinity}
            />
            <p className='py-5 md:py-10 text-lg text-[#5B5B5B]' >Our company specializes in providing top-quality Epoxy flooring services for a variety of industries and applications. From commercial and industrial spaces to residential homes, we offer a wide range of customizable options to meet your specific needs. Our highly skilled team of professionals is dedicated to delivering exceptional results, using only the best materials and techniques available.</p>
            <Link href={"/contact-us"} className="btn border-none max-w-[12rem] lg:max-w-[12rem] text-white text-[14px] normal-case px-10 mx-auto lg:float-left flex bg-[#F58A07] rounded-full">Work With Us</Link>

          </div>
          <div className='w-full md:w-[50%] order-1 md:order-2'>

            <img loading='lazy' src={"/img/abt1.jpeg"} width={300} height={500} className='w-[100%] max-h-[650px]' alt='intro Image' />
          </div>
        </div>


        <div className="flex flex-col md:flex-row md:pb-5 gap-10 sm:gap-5 lg:gap-20 font-Poppins">
          <div className='w-full md:w-[50%]'>

            <img loading='lazy' src={"/img/abt2.jpeg"} width={300} height={500} className='w-[100%] max-h-[650px]' alt='intro Image' />
          </div>
          <div className='w-full md:w-[50%]'>
            <TypeAnimation 
            className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-10'
            sequence={[
              'The End Result',
              1000,

            ]} 
            cursor={false}

            />
            <p className='py-5 md:py-10 text-lg text-[#5B5B5B]' >The end result of our services is a durable, long-lasting, and visually appealing floor that is both easy to clean and maintain. Our epoxy flooring is resistant to stains, chemicals, and abrasions, making it an ideal flooring solution for industrial, commercial, and residential settings.</p>
            <Link href={"/contact-us"} className="btn border-none text-white max-w-[12rem] lg:max-w-[12rem] text-[14px] normal-case px-10 mx-auto lg:float-left flex bg-[#F58A07] rounded-full self-end"  >Work With Us</Link>

          </div>

        </div>
        <div className=" flex flex-col gap-5">

        <h2 className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left md:text-center'>Contact Us</h2>
        <p className='text-left md:text-center text-lg text-[#5B5B5B]' >Contact us today to learn more about our services and how we can help transform your space.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 2xl:gap-14 w-full">
          <div className="map flex w-full lg:w-[50%]">
            {/* <iframe width="100%" height="450" id="gmap_canvas" className='rounded-lg' 
            src="https://maps.google.com/maps?q=addis%20abab%20rang%20building&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
            frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe> */}
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7881.001914277721!2d38.797061269131234!3d9.017981999988724!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnMDQuNyJOIDM4wrA0Nyc0OS40IkU!5e0!3m2!1sen!2set!4v1699451967165!5m2!1sen!2set" 
width="100%" height="450" id="gmap_canvas" className='rounded-lg' allowFullScreen 
 frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>

          </div>
          <div className="flex flex-col w-full lg:w-[50%] gap-4 justify-center items-center">
            <input type="text" placeholder="First Name" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className="  input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <input type="text" placeholder="Last Name" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className=" input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <input type="email" placeholder="Email Address" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className=" input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <textarea placeholder="Type Message" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "10px" }} className="p-3 pt-5 h-40 input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <button className=" btn border-none w-full max-w-[12rem] lg:max-w-[12rem] text-white text-[16px] font-bold normal-case px-10  bg-[#F58A07] rounded-full">Submit</button>

          </div>

        </div>
      </div>

    </div>

  )
}

export default AboutUS