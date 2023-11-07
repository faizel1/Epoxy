'use client';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
const ServiceCard = ({ image = "", title = "", desc=""  }:any) => {
    return (
        <motion.div
  
        className="flex flex-col bg-white rounded-[20px] gap-7 md:gap-10 px-10 py-7 md:py-14">
            <Image src={image} alt="image" width={30} height={30} />
            <h2 className='text-2xl font-semibold' >{title}</h2>
            <p className='text-[18px] text-[#5B5B5B]' >{desc}</p>


        </motion.div>
    )
}

export default ServiceCard