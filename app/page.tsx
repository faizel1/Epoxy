
'use client'
import Image from 'next/image'
import FooterSection from './components/footerSection'
import HeroSection from './components/heroSection'
import ServiceCard from './components/serviceCard'
import ImageSlider from './components/ImageSlider'
import Slideshow from './components/Slideshow'
import Testimonial from './components/Testimonial'
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

export default function Home() {
  const handlePhoneClick = () => {
    window.location.href = `tel:+251116593154`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:nobel.nebil.khuri@gmail.com`;
  };
  //   useEffect(() => {      
  //     gsap.fromTo('.ball',{opacity:0 }, {opacity: 1 , x: 200 , duration: 3 });
  //   gsap.fromTo('.square', {opacity:0, x:200}, { opacity:1, x: 1 , duration: 1 });
  // }, []);

  return (
    <main className='max-w-[100vw] overflow-hidden 2xl:max-w-[1920px] mx-auto' >


      <HeroSection />

      <div className="flex flex-col gap-10 md:gap-10 px-7 lg:px-44 py-5 md:py-20">
        {/* intro section */}

        <div className="flex flex-col md:flex-row md:py-20 gap-10 sm:gap-5 lg:gap-20 font-Poppins">


          <div className='w-full md:w-[50%]'>
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
                <p className='text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold md:py-5'>Cost-effective design, supply & installation.</p>
                <p className='py-5 md:pb-10 text-lg text-[#5B5B5B]' >When it comes to designing, supplying, and installing epoxy flooring, it&apos;s essential to consider the cost-effectiveness of the whole process.That&apos;s where our expertise comes in. With over 14 years of experience in the industry, we are the best at what we do. Our team of professionals is dedicated to providing exceptional services to our clients, both in Germany and Addis Ababa, Ethiopia. <br /><br /> 
                  Our cost-effective approach to epoxy flooring design, supply, and installation ensures that our clients get the best value for their money. We use only high-quality materials and the latest techniques in the industry to create durable and long-lasting floors that can withstand heavy traffic and harsh conditions. Our team is committed to providing a hassle-free experience, from the initial consultation to the final walkthrough.
                  <br /><br />
                  Contact us on <span  className='cursor-pointer hover:text-[#F58A07]' onClick={handlePhoneClick}>+251116593154</span> to speak with our team and discuss your requirements.
                </p>
                <button className="btn border-none text-white text-[14px] normal-case px-10  bg-[#F58A07] rounded-full flex mx-auto md:ml-0">Work With Us</button>

              </FadeInLeft>
            </Reveal>
          </div>
          <div className='w-full md:w-[50%]'>
            <Reveal repeat trigger={<div />}>
              <FadeInRight>
                <Image loading='lazy' src={"/img/homeIntroImage.png"} width={300} height={500} className='w-[100%]' alt='intro Image' />
              </FadeInRight>
            </Reveal>
          </div>
        </div>

        {/* intro section end */}


        {/* check out section */}

        <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-0 xl:gap-20">
     
        <Reveal repeat trigger={<div className='w-full md:w-[50%] text-3xl font-bold text-[#0D1317]' />}>
            <FadeInRight>
              <p>What we do?</p>
            </FadeInRight>
          </Reveal>
          <Reveal repeat trigger={<div className='w-full md:w-[50%] text-left text-md' />}>
            <FadeInLeft>
              <p >Our company specializes in providing top-quality Epoxy flooring services for a variety of industries and applications. From commercial and industrial spaces to residential homes, we offer a wide range of customizable options to meet your specific needs.</p>
            </FadeInLeft>
          </Reveal>
        </div>
      </div>

      {/* check out section end */}
      {/* card section */}
      <div className="bg-[#FEF3E6] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full py-12 gap-8 px-7 xl:px-44 2xl:44">

        <ServiceCard
          image='/img/ServiceCardIcon1.png'
          title={`Industry chemicals`}
          desc='Our company specializes in importing high-quality industry chemicals from abroad to Ethiopia. As a result, we are able to provide a wide range of chemical products to meet the needs of various industries. Whether you are in need of chemicals for manufacturing, construction, or agriculture, we have you covered.' />

        <ServiceCard
          image='/img/ServiceCardIcon2.png'
          title='Membrane'
          desc='Our company is dedicated to importing high-quality membrane products from abroad to Ethiopia. We understand the importance of having access to reliable and efficient membrane technology, which is why we strive to provide our customers with the best products available on the market. With our commitment to excellence, you can trust us to deliver top-notch membrane solutions for all your needs.' />

        <ServiceCard
          image='/img/ServiceCardIcon3.png'
          title='Stainless Steel'
          desc={`Stainless steel has become an essential material in today's world due to its durability and resistance to corrosion. It is used in various industries, such as construction, automotive, and healthcare. Our company specializes in importing stainless steel products from abroad to meet the increasing demand for this versatile material.`} />
          <ServiceCard
          image='/img/ServiceCardIcon1.png'
          title={`Aluminum`}
          desc='Our company specializes in importing high-quality aluminum products from various countries. Our products are carefully selected to meet the needs and requirements of our clients. We take pride in providing durable and reliable aluminum products for various industries.' />

        <ServiceCard
          image='/img/ServiceCardIcon2.png'
          title='Goat meat'
          desc='Goat meat, also known as mutton, is a popular meat consumed in many countries worldwide. Our company specializes in exporting high-quality goat meat to various international markets. From tender and juicy cuts to flavorful and aromatic meat, we take pride in delivering the best goat meat to our customers.' />

      


        {/* card section end */}


      </div>
      {/* <ImageSlider /> */}
      <div className=" py-10 px-7 xl:px-44 2xl:44">
        <h2 className='text-center text-4xl pb-5 font-bold' >Gallery</h2>

        <Slideshow />
      </div>
      <div className="md:pb-10 px-7 xl:px-[6.5rem] ">
        <h2 className='text-center text-4xl pb-5 font-bold' >Testimonials</h2>
        <Testimonial />

      </div>

      <div className="flex flex-col md:flex-row bg-[#F58A07]">
        <div className="w-[100%] lg:w-[50%]">

          <img loading='lazy' src={"/img/HomeFooterImage.png"} width={300} height={500} className='w-[100%] h-[100%]' alt='intro Image' />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col px-7 pt-10 lg:pl-20 mb-10 lg:mb-0 lg:pt-20 max-w-md xl:max-w-2xl gap-5 lg:gap-20 ">
          <h2 className='text-2xl md:text:4xl xl:text-4xl text-white font-bold font-Poppins ' >Contact us today to learn more about our services and how we can help transform your space.</h2>
          <button className="btn border-none bg-white text-[14px] w-fit normal-case px-10  text-[#F58A07] rounded-full cursor-pointer flex mx-auto md:ml-0 " onClick={handlePhoneClick}>Call +251116593154</button>

        </div>
      </div>

    </main>
  )
}
