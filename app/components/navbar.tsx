'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        //     <div className='flex py-10 text-[#394149] text-[24px] ' >

        // <Image src="/img/Logo.png" width={100} height={20} alt="Logo" />


        //         <Link href={"/about-us"}>About Us </Link>
        //         <Link href={"/gallery"}>Gallery</Link>
        //         <Link href={"/contact-us"}>Contact Us</Link>

        //         <div className="">

        //         Call +251911120323
        //         </div>
        //     </div>
        <header>
            <nav className="shadow">

                <div className="flex justify-between items-center py-6 px-6 sm:px-10 container mx-auto">

                    <div>
                        <Image src="/img/Logo.png" className='w-44 h-8' width={100} height={50} alt="Logo" />                    </div>


                        <div className="sm:hidden items-center mr-8 space-x-4 sm:mr-0 sm:ml-8 lg:ml-12">
                            <p className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded-full   text-[10px]  sm-[16px] bg-[#F58A071A] text-[#F58A07]">Call +251911120323</p>

                        </div>

                    <div className="flex items-center">

                        <ul className="sm:flex space-x-4 md:space-x-14 hidden items-center">

                            <Link className="text-[#394149] hover:text-indigo-600 text-md md:text-xl font-bold " href={"/about-us"}>About Us </Link>
                            <Link className="text-[#394149] hover:text-indigo-600 text-md md:text-xl font-bold" href={"/gallery"}>Gallery</Link>
                            <Link className="text-[#394149] hover:text-indigo-600 text-md md:text-xl font-bold" href={"/contact-us"}>Contact Us</Link>
                        </ul>

                    
                        <div className="hover:cursor-pointer sm:hidden">

                            <span className="h-1 rounded-full block w-8 mb-1 bg-black"></span>
                            <span className="h-1 rounded-full block w-8 mb-1 bg-black"></span>
                            <span className="h-1 rounded-full block w-8 mb-1 bg-black"></span>
                        </div>
                    </div>


                    <div className="hidden sm:flex items-center mr-8 space-x-4 sm:mr-0 sm:ml-8 lg:ml-12">
                        <p className="text-text-gray-600  py-4 px-8 hover:cursor-pointer font-bold rounded-full   text-[18px]  sm-[16px] bg-[#F58A071A] text-[#F58A07]">Call +251911120323</p>

                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;


