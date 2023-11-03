
import Image from 'next/image'
import FooterSection from './components/footerSection'
import HeroSection from './components/heroSection'
import ServiceCard from './components/serviceCard'

export default function Home() {
  return (
    <main>


      <HeroSection />
      <div className="flex flex-col gap-20 px-44 py-20">
        {/* intro section */}

        <div className="flex py-20 pb-20 gap-20 ">
          <div className='w-[50%]'>
            <p className='text-7xl font-semibold py-10'>Lorem ipsum dolor sit amet consectetur. Nunc libero amet sem blandit. Laoreet.</p>
            <p className='py-10 text-lg text-[#5B5B5B]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Aliquam leo odio, sagittis quis ornare quis.</p>
            <button className="btn border-none text-white text-[14px] normal-case px-10  bg-[#F58A07] rounded-full">Work With Us</button>

          </div>
          <Image src={"/img/homeIntroImage.png"} width={300} height={500} className='w-[50%]' alt='intro Image' />
        </div>

        {/* intro section end */}


        {/* check out section */}

        <div className="flex justify-start ">

          <p className='w-[50%] text-3xl font-bold text-[#0D1317]' >Check out<br />
            Our services</p>
          <p className='w-[40%] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        </div>

        {/* check out section end */}
        {/* card section */}
        <div className="bg-[#FEF3E6] grid grid-cols-3 w-full py-12 gap-8 px-44">
          <ServiceCard
            image='/img/ServiceCardIcon1.png'
            title={`Basements floors & 
            retention walls`}
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ' />
          <ServiceCard
            image='/img/ServiceCardIcon2.png'
            title='Roof top and terrace area work with Seloflex(sika Raintite)'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ' />
          <ServiceCard
            image='/img/ServiceCardIcon3.png'
            title='Basements floors &retention walls'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ' />
   

        {/* card section end */}

      </div>
      <FooterSection />
    </main>
  )
}
