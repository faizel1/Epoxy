'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
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
const Contact = () => {

  const handlePhoneClick = () => {
    window.location.href = `tel:+251930632722`;
};

  return (
    <div className="max-w-[100%] overflow-hidden">
      <div className="hero hero.align-items-left h-[300px] md:h-[400px] flex items-center justify-center " style={{ backgroundImage: 'url(/img/abtMobile.png)' }}>
        <div className="  text-[#292F36] text-center flex items-end justify-center flex-1 h-full">
          <div className="bg-white py-5 px-20 rounded-t-2xl">

            <h1 className='text-2xl lg:text-5xl font-bold' >
            Contact Us
              
              </h1>
            <h3 className='text-md lg:text-xl font-extralight' >
            Home / Contact Us
              </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 px-5 md:px-10 lg:px-44 py-5 md:py-20">





        <div className="flex flex-col lg:flex-row gap-10 2xl:gap-14 w-full ">

          <div className="order-2 lg:order-1 flex flex-col w-full lg:w-[50%] gap-4 justify-start items-start">
            <div className="flex flex-col gap-5 max-w-[100%] lg:pb-10 mx-auto  w-full">
              <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-left' >
              <TypeAnimation
                sequence={[
                  "Fill out the form below and a member of our team will get back to you as soon as possible.",
                  1000,
                  
              
                ]}
                speed={30}
                repeat={10}
              />                </h2>
              {/* <p className='text-[#5B5B5B] hidden lg:flex text-left' >Fill out the form below and a member of our team will get back to you as soon as possible</p> */}
            </div>
<div className="flex flex-col justify-center items-center w-full">

            <input type="text" placeholder="First Name" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className="  input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <input type="text" placeholder="Last Name" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className=" input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <input type="text" placeholder="Email Address" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "27px" }} className=" input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <textarea placeholder="Type Message" style={{ background: " rgba(210.28, 217.75, 236.94, 0.17)", borderRadius: "10px" }} className="p-3 pt-5 h-40 input w-full md rounded-full max-w-[25rem]  lg:max-w-[100%] mb-2" />
            <button className=" btn border-none w-full max-w-[25rem] lg:max-w-[15rem] text-white text-[16px] font-bold normal-case px-10  bg-[#F58A07] rounded-full">Submit</button>
</div>

          </div>
          <div className="order-1 lg:order-2  map flex flex-col w-full lg:w-[50%]">
            <div className="flex justify-between gap-5  sm:gap-20 pb-10 lg:pb-20 sm:mx-auto lg:ml-0 lg:mr-auto">
              
              <Reveal repeat trigger={<div className="flex flex-col gap-1"/>}>
              <FadeInRight>
                <h2 className='text-lg md:text-2xl font-bold mb-2' >Location</h2>
                <p className='text-[#5B5B5B] text-sm md:text-xl '>Addis Ababa,</p>
                <p className='text-[#5B5B5B] text-sm md:text-xl'>Ethiopia</p>
                </FadeInRight>
                </Reveal>
              
              {/* <div className="flex flex-col gap-1"> */}

              <Reveal repeat trigger={<div className="flex flex-col gap-1"/>}>
              <FadeInRight>
                <h2 className='text-lg md:text-2xl font-bold mb-2' >Contact Us</h2>
                <p className='text-[#5B5B5B] text-sm md:text-xl'>+2511911120323</p>
                <p className='text-[#5B5B5B] text-sm md:text-xl'>nobel.nebil.khuri@gmail.com</p>
                </FadeInRight>
                </Reveal>
              {/* </div> */}
            </div>
            {/* <p className='text-[#5B5B5B] flex mx-auto pb-5 lg:hidden' >Fill out the form below and a member of our team will get back to you as soon as possible</p> */}

            {/* <iframe width="100%" height="370" id="gmap_canvas" className='rounded-lg h-[300px] lg:h-[370px] lg:mt-0' src="https://maps.google.com/maps?q=addis%20abab%20rang%20building&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe> */}
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7881.001914277721!2d38.797061269131234!3d9.017981999988724!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnMDQuNyJOIDM4wrA0Nyc0OS40IkU!5e0!3m2!1sen!2set!4v1699451967165!5m2!1sen!2set" 
width="100%" height="370" id="gmap_canvas" className='rounded-lg h-[300px] lg:h-[370px] lg:mt-0' allowFullScreen loading="lazy" 
 frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact