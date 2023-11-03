import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
    return (
        <footer className="relative footer p-10 py-20 bg-black  text-white overflow-hidden">

<span className="absolute h-[144px] w-[53px] left-0 bottom-[-5px] rounded-r-xl block  bg-[#F58A07]"></span>
<span className="absolute h-[287px] w-[53px] top-10 right-0 rounded-l-2xl block  bg-[#F58A07]"></span>


            <aside className='xl:min-w-[30rem] flex justify-center items-start' >
                <Image src="/img/footerLogo.png" className='w-[150px] h-[40px]' width={34} height={34} alt="Logo" />

            </aside>
            <nav>
                <header className="footer-title">Company</header>
                <Link href={"#"} className="link link-hover">About Us</Link>
                <Link href={"#"} className="link link-hover">Gallery</Link>
                <Link href={"#"} className="link link-hover">Contact Us</Link>
            </nav>
            <nav>
                <header className="footer-title">Connect</header>
                <Link href={"#"} className="link link-hover">hi@finsweet.com</Link>
                <Link href={"#"} className="link link-hover">+(123) 456-7890</Link>

            </nav>
            <nav>
                <header className="footer-title">Join Newsletter</header>
                <input type="text" placeholder="Type email here" className="input w-full rounded-full max-w-xs mb-2" />
                <button className="btn border-none text-white text-[14px] normal-case px-10  bg-[#F58A07] rounded-full">Subscribe</button>

                <div className="flex mt-[7rem] gap-10">
                    <Link href={"#"} className="link link-hover">Privacy Policy</Link>
                    <Link href={"#"} className="link link-hover">Terms & Conditions</Link>


                </div>

            </nav>
        </footer>)
}

export default FooterSection