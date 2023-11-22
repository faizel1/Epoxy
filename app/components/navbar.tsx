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

        <header className={`max-w-[100%] 2xl:max-w-[1920px] overflow-hidden mx-auto ${menuOpen?'':"mb-[-104px] md:mb-[-146px]"}`} >
            <motion.nav
               initial="closed"
               animate={ "open"}
               variants={menuVariants}
            >

                <div className={`${menuOpen ? "pl-10 pr-4" : "px-4"} flex justify-between items-center py-4 sm:px-10 md:px-10 lg:pl-40 2xl:pl-40  mx-auto 2`}>

                    <Link href={"/"}>
                        <Image src="/img/Logo.jpg" className='w-24 md:w-36 h-auto' width={100} height={50} alt="Logo" />    
                        {/* <svg width="143" height="33" viewBox="0 0 143 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 10.0091H44.6088V24.7483H41V10.0091ZM46.0478 19.2041C46.0478 15.5533 48.2963 13.3651 51.669 13.3651C55.0417 13.3651 57.2901 15.5533 57.2901 19.2041C57.2901 22.8549 55.1203 25.0658 51.669 25.0658C48.2176 25.0658 46.0478 22.9342 46.0478 19.2041ZM53.7151 19.2041C53.7151 17.1973 52.9393 16.0181 51.7027 16.0181C50.466 16.0181 49.7016 17.1519 49.7016 19.2041C49.7016 21.2562 50.466 22.3787 51.7027 22.3787C52.9393 22.3787 53.7375 21.2562 53.7375 19.2154L53.7151 19.2041ZM58.7291 25.5079H62.2142C62.3729 25.8863 62.65 26.202 63.0032 26.4067C63.3564 26.6114 63.7663 26.694 64.1704 26.6417C65.5532 26.6417 66.2727 25.8934 66.2727 24.7823V22.7415H66.284C65.9862 23.377 65.5046 23.9066 64.9026 24.2608C64.3006 24.6149 63.6063 24.777 62.9113 24.7256C60.2693 24.7256 58.5155 22.6961 58.5155 19.2041C58.5155 15.712 60.1906 13.5351 63.0124 13.5351C63.7253 13.4967 64.4325 13.6821 65.0366 14.0659C65.6406 14.4497 66.1118 15.0129 66.3851 15.678H66.284V13.6259H69.859V24.6689C69.859 27.3333 67.5206 29 64.0805 29C60.9551 28.9887 58.954 27.5488 58.7516 25.5193L58.7291 25.5079ZM66.284 19.2041C66.284 17.424 65.4745 16.3016 64.1929 16.3016C62.9113 16.3016 62.1243 17.4354 62.1243 19.2041C62.1243 20.9728 62.9 22.0159 64.1929 22.0159C65.4858 22.0159 66.284 21.0522 66.284 19.2041ZM71.2868 19.2041C71.2868 15.5533 73.5353 13.3651 76.9079 13.3651C80.2806 13.3651 82.5291 15.5533 82.5291 19.2041C82.5291 22.8549 80.3481 25.0658 76.9079 25.0658C73.4678 25.0658 71.3093 22.9342 71.3093 19.2041H71.2868ZM78.954 19.2041C78.954 17.1973 78.1671 16.0181 76.9417 16.0181C75.7163 16.0181 74.9405 17.1519 74.9405 19.2041C74.9405 21.2562 75.705 22.3787 76.9417 22.3787C78.1783 22.3787 78.9765 21.2562 78.9765 19.2154L78.954 19.2041ZM83.9906 10.9388C83.9749 10.568 84.0695 10.2011 84.2624 9.88503C84.4552 9.56899 84.7373 9.31836 85.0725 9.16538C85.4078 9.01239 85.7807 8.96406 86.1434 9.02659C86.506 9.08912 86.8419 9.25966 87.1077 9.51626C87.3734 9.77286 87.557 10.1038 87.6348 10.4665C87.7125 10.8292 87.6809 11.207 87.544 11.5514C87.407 11.8958 87.1711 12.191 86.8664 12.3991C86.5617 12.6071 86.2023 12.7185 85.8343 12.7188C85.5992 12.7248 85.3652 12.6837 85.146 12.5978C84.9267 12.5119 84.7266 12.3829 84.5571 12.2184C84.3877 12.0538 84.2524 11.857 84.159 11.6393C84.0656 11.4216 84.016 11.1873 84.0131 10.9501L83.9906 10.9388ZM83.9906 13.6145H87.6444V24.7937H84.0468L83.9906 13.6145ZM100.787 19.2041C100.787 22.8435 99.1677 24.9524 96.4134 24.9524C95.7082 24.9962 95.0067 24.8208 94.4035 24.4498C93.8004 24.0787 93.3247 23.5299 93.0407 22.8776H92.9732V28.3878H89.3644V13.6485H92.9507V15.644H93.0182C93.2925 14.9788 93.7635 14.415 94.3671 14.0295C94.9706 13.644 95.6773 13.4556 96.3909 13.4898C99.2239 13.4671 100.854 15.5646 100.854 19.2154L100.787 19.2041ZM97.1104 19.2041C97.1104 17.4354 96.2897 16.2902 95.0193 16.2902C93.7489 16.2902 92.9507 17.424 92.9395 19.2041C92.9282 20.9841 93.7489 22.1066 95.0193 22.1066C96.2897 22.1066 97.1778 21.0522 97.1778 19.2154L97.1104 19.2041ZM106.947 13.3537C109.972 13.3537 111.849 14.7937 111.872 17.1066H108.578C108.578 16.3016 107.914 15.8027 106.925 15.8027C105.936 15.8027 105.463 16.1882 105.463 16.7664C105.463 17.3447 105.879 17.5261 106.711 17.6961L109.027 18.1723C111.276 18.6485 112.175 19.5556 112.175 21.2449C112.175 23.5125 110.095 25.0544 107.004 25.0544C103.912 25.0544 101.9 23.5578 101.753 21.2789H105.25C105.351 22.1066 106.003 22.5941 107.06 22.5941C108.117 22.5941 108.611 22.254 108.611 21.6531C108.611 21.0522 108.274 20.9501 107.408 20.7687L105.317 20.3265C103.148 19.8617 102.012 18.7166 102.012 17.0045C102.079 14.7823 103.968 13.3651 107.015 13.3651L106.947 13.3537ZM124.261 24.7823H120.764V22.6848H120.697C120.501 23.3844 120.075 23.9959 119.488 24.4184C118.902 24.8409 118.19 25.0493 117.47 25.0091C116.927 25.0269 116.386 24.9287 115.883 24.7208C115.38 24.5129 114.926 24.2001 114.551 23.8029C114.176 23.4057 113.889 22.9331 113.708 22.416C113.527 21.8989 113.457 21.3492 113.502 20.8027V13.6259H117.11V20.0204C117.11 21.3356 117.796 22.0499 118.92 22.0499C119.184 22.0479 119.444 21.9888 119.684 21.8767C119.923 21.7646 120.135 21.602 120.307 21.4C120.479 21.198 120.605 20.9611 120.678 20.7055C120.751 20.4499 120.769 20.1815 120.73 19.9184V13.6259H124.328L124.261 24.7823ZM126.003 13.6145H129.511V15.7687H129.589C129.783 15.0786 130.198 14.4728 130.77 14.0461C131.342 13.6194 132.037 13.3958 132.749 13.4104C133.462 13.3478 134.174 13.556 134.743 13.9942C135.313 14.4325 135.7 15.0692 135.829 15.78H135.986C136.211 15.0654 136.663 14.4457 137.273 14.0172C137.883 13.5887 138.616 13.3754 139.359 13.4104C139.853 13.3915 140.344 13.4779 140.803 13.6639C141.261 13.8499 141.675 14.1314 142.017 14.49C142.36 14.8485 142.624 15.276 142.792 15.7445C142.959 16.213 143.027 16.7119 142.99 17.2086V24.7937H139.359V18.1383C139.359 17.0045 138.831 16.3696 137.808 16.3696C137.581 16.3659 137.356 16.4116 137.148 16.5038C136.94 16.596 136.755 16.7323 136.604 16.9036C136.454 17.0748 136.342 17.2768 136.276 17.4958C136.21 17.7148 136.192 17.9456 136.222 18.1723V24.7937H132.782V18.1043C132.782 16.9705 132.231 16.3696 131.242 16.3696C131.013 16.3678 130.786 16.4154 130.576 16.5093C130.367 16.6033 130.18 16.7413 130.027 16.9142C129.875 17.0871 129.761 17.2908 129.693 17.5117C129.626 17.7326 129.606 17.9656 129.634 18.195V24.7937H126.026L126.003 13.6145Z" fill="#F58A07" />
                            <path d="M34 11.0376C34.0001 8.8142 33.3107 6.64261 32.022 4.80726C30.7333 2.97191 28.9055 1.55838 26.778 0.751821C24.6504 -0.0547394 22.3223 -0.216723 20.0986 0.287085C17.8749 0.790894 15.8593 1.937 14.3158 3.57529H0V33H30.226V19.2484C31.4124 18.215 32.3617 16.9496 33.012 15.5349C33.6623 14.1201 33.9989 12.5877 34 11.0376ZM28.1842 11.0376C28.1865 12.103 27.8641 13.1452 27.258 14.0321C26.6518 14.919 25.7891 15.6109 24.779 16.0202C23.7689 16.4294 22.6569 16.5376 21.5836 16.3311C20.5103 16.1246 19.5241 15.6127 18.7497 14.8601C17.9753 14.1075 17.4475 13.1481 17.2333 12.1033C17.019 11.0586 17.1278 9.97534 17.546 8.99081C17.9641 8.00627 18.6728 7.16467 19.5822 6.57252C20.4917 5.98037 21.5612 5.66429 22.6552 5.66429C24.1196 5.66429 25.5242 6.23004 26.5608 7.23741C27.5973 8.24479 28.1812 9.61148 28.1842 11.0376ZM24.4103 27.3363H5.81579V9.23905H11.4825C11.373 9.83275 11.3154 10.4344 11.3104 11.0376C11.3134 13.9669 12.5097 16.7753 14.6366 18.8466C16.7635 20.9179 19.6473 22.0829 22.6552 22.0858C23.2432 22.0828 23.8301 22.0342 24.4103 21.9406V27.3363Z" fill="#F58A07" />
                            <rect x="29" y="31" width="1" height="1" fill="#F58A07" />
                        </svg> */}

                    </Link>


                    <div className={`${menuOpen && "hidden"} md:hidden items-center mr-4 space-x-4 ml-4  sm:mr-0 sm:ml-8 lg:ml-12`}>
                        {/* <p className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded-full   text-[10px]  sm-[16px] bg-[#F58A071A] text-[#F58A07]" 
                                                    onClick={handlePhoneClick}

                        >Call +251116593154</p> */}

                    </div>

                    <div className="flex items-center">

                        <ul className="md:flex space-x-4 md:space-x-14 hidden items-center">

                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/about-us' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/about-us"}>About Us </Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/gallery' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/gallery"}>Gallery</Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/contact-us' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/contact-us"}>Contact Us</Link>
                            <Link className={` hover:text-[#F58A07] text-md md:text-xl font-bold ${currentRoute === '/charity' ? 'text-[#F58A07]' : 'text-[#fff]'} `} href={"/charity"}>Charity</Link>
                        </ul>


                        <div className="hover:cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}
                        >

                            <Image src={`${menuOpen ? "/img/close.png" : "/img/open1.png"}`} width={30} height={30} alt='menu' />
                        </div>
                    </div>


                    <div className="hidden lg:flex items-center md:ml-0 space-x-4 sm:mr-0 sm:ml-8 lg:ml-12 lg:mr-20 xl:mr-28 2xl:mr-40 ">
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

