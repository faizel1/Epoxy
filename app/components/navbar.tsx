'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {

    const handlePhoneClick = () => {
        window.location.href = `tel:+251116593154`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:nobel.nebil.khuri@gmail.com`;
    };

    const menuVariants = {
        closed: { 
          x: '-100%',
          opacity: 0
        },
        open: { 
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.61, 1, 0.88, 1]
          }
        }
      }

    const [menuOpen, setMenuOpen] = useState(false);
    const currentRoute = usePathname();

    return (

        <header className={`max-w-[100%] 2xl:max-w-[1920px] overflow-hidden mx-auto mb-[-104px] md:mb-[-146px] ${menuOpen&&"mb-[0px]"}`} >
            <motion.nav
               initial="closed"
               animate={ "open"}
               variants={menuVariants}
            >

                <div className={`${menuOpen ? "pl-10 pr-4" : "px-4"} flex justify-between items-center py-4 sm:px-10 md:px-10 lg:pr-20 xl:pl-32 2xl:pl-40  mx-auto 2`}>

                    <Link href={"/"}>
                        <Image src="/img/LogoNew.png" className='w-24 md:w-36 h-auto' width={100} height={50} alt="Logo" />    
                   

                    </Link>


                    <div className={`${menuOpen && "hidden"} md:hidden items-center mr-4 space-x-4 ml-4  sm:mr-0 sm:ml-8 lg:ml-12`}>
                   

                    </div>

                    <div className="flex items-center">

                        <ul className="lg:flex space-x-4 md:space-x-14 hidden items-center">
                        <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/' ? 'text-[#F58A07]' : 'text-[#fff]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/"}>Home </Link>

                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/about-us' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/about-us"}>About Us </Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/gallery' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/gallery"}>Gallery</Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/charity' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/charity"}>Charity</Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/contact-us' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/contact-us"}>Contact Us</Link>
                        </ul>


                        <div className="hover:cursor-pointer lg:hidden" onClick={() => setMenuOpen(!menuOpen)}
                        >

                            <Image src={`${menuOpen ? "/img/close.png" : "/img/open1.png"}`} width={30} height={30} alt='menu' />
                        </div>
                    </div>


                    <div className="hidden xl:flex items-center md:ml-0 space-x-4 sm:mr-0 sm:ml-8 lg:ml-0 lg:mr-0 xl:mr-12 2xl:mr-40 ">
                        <p className="text-text-gray-600  py-3 px-8 hover:cursor-pointer font-bold rounded-full   text-[18px]  sm-[16px] bg-[#F58A07] text-[#FFF]" 
                                                    onClick={handlePhoneClick}

                        >Call +251116593154</p>

                    </div>
                </div>
            </motion.nav>
            <motion.nav
                className={`${menuOpen ? 'flex flex-col min-h-[100vh] pl-10 pr-5 ' : 'hidden'} md:hidden h-[calc(100vh-0px)] ease-in-out transition-transform`}
                // className={`${menuOpen ? 'flex' : 'hidden'} md:hidden`}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <div className="flex flex-col h-2/3 justify-center  gap-3 mb-[20px]  ">

                    <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/' ? 'text-[#F58A07]' : 'text-[#394149]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/"}>Home </Link>

                    <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/about-us' ? 'text-[#F58A07]' : 'text-[#394149]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/about-us"}>About Us </Link>
                    <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/gallery' ? 'text-[#F58A07]' : 'text-[#394149]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/gallery"}>Gallery</Link>
                    <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/charity' ? 'text-[#F58A07]' : 'text-[#394149]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/charity"}>Charity</Link>
                    <Link className={`hover:text-[#F58A07] text-[32px] md:text-xl font-bold ${currentRoute === '/contact-us' ? 'text-[#F58A07]' : 'text-[#394149]'} `}  onClick={() => setMenuOpen(!menuOpen)} href={"/contact-us"}>Contact Us</Link>

                </div>
                <div className="flex h-1/3 gap-2 md:gap-10">
                    <div className="flex flex-col">
                        <h2 className='font-bold text-xl mb-2'>Location</h2>
                        <h2>Addis Ababa,
                            Ethiopia</h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='font-bold text-xl mb-2'>Contact Us</h2>

                        <h2 onClick={handlePhoneClick} className='cursor-pointer' >+251116593154</h2>
                        <h2 onClick={handleEmailClick} className='cursor-pointer'>nobel.nebil.khuri@gmail.com</h2>
                    </div>
                </div>
            </motion.nav>
        </header>
    )
}
export default Navbar;

