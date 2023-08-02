import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='bg-[#0F1141] text-white'>
            <div className="main flex flex-col md:flex-row items-center justify-start gap-10  px-10">
            <div className="flex flex-col  justify-between items-start py-12 md:w-1/2">
                <div className="logo">
                    <Image src={Logo} alt='logo'></Image>
                </div>
                <div className="explanation text-sm py-10 w-3/5"><p>Making mental health care accessible and affordable to individuals of all background.</p>
                </div>
                <div className="button">
                    <button className="btn text-white bg-[#7378DE] px-5 py-3 rounded-3xl">Sign Up for Free</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-start gap-10 w-[80vw] m-auto">
                <div className="flex flex-col justify-between items-top">
                    <h2 className='font-bold text-[#7378DE] py-4'>Company</h2>
                    <ul>
                        <li className='py-1'>
                            <Link href={'/'}>About Couch</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>Privacy Policy</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between items-top">
                    <h2 className='font-bold text-[#7378DE] py-4'>Socials</h2>
                    <ul>
                        <li className='py-1'>
                            <Link href={'/'}>Twitter</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>LinkedIn</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>Instagram</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>Facebook</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>Youtube</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between items-top">
                    <h2 className='font-bold text-[#7378DE] py-4'>Support</h2>
                    <ul>
                        <li className='py-1'>
                            <Link href={'/'}>Contact Us - hello@joincouch.co</Link>
                        </li>
                        <li className='py-1'>
                            <Link href={'/'}>FAQs</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <hr className='divider'/>
            <div className="copyright p-10 flex flex-col md:flex-row items-center gap-5">
                <Image src={Logo} alt='logo'></Image>
                <p> - Copyright @ 2023</p>
            </div>
        </footer>
    )
}

export default Footer