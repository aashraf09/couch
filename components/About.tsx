import React from 'react'
import Image from 'next/image'
import BlueIcon from '../assets/blue.svg'
import PurpleIcon from '../assets/purple.svg'
import GreenIcon from '../assets/green.svg'

const About = () => {
    return (
        <section className="about bg-[#0F1141] text-center py-14 ">
            <div className='md:w-3/5 m-auto'>
                <h2 className="heading text-4xl font-bold text-white">
                    About us
                </h2>
                <p className="about-para text-2xl md:text-4xl font-bold text-white pt-16 px-6 md:p-14">
                    We're building a <span>comprehensive mental health care </span> system
                </p>
            </div>
            <div className="block md:flex w-3/4 m-auto justify-center items-center gap-10 py-10">
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={PurpleIcon} alt='Who we are'></Image>
                    <h2 className="font-bold text-xl text-[#A777ED] mt-7">Who are we</h2>
                    <p className="text-base text-[#D9D9D9]">Imagine having a companion that wants to support you throughout every step of your mental health journey whenever  you want. We’re  here to be that friend.</p>
                </div>
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={GreenIcon} alt='Who we are'></Image>
                    <h2 className="font-bold text-xl text-[#A777ED] mt-7">What we do</h2>
                    <p className="text-base text-[#D9D9D9]">By creating a network of professionals and putting together clinically and researched backed tools and resources, we want to support you to get a healthier mind.</p>
                </div>
                <div className="flex flex-col text-center justify-between items-center py-6 md:py-0">
                    <Image src={BlueIcon} alt='Who we are'></Image>
                    <h2 className="font-bold text-xl text-[#A777ED] mt-7">What we believe</h2>
                    <p className="text-base text-[#D9D9D9]">We believe that mental health is very important and everyone, no matter their background deserves access to quality mental health care. </p>
                </div>
            </div>
        </section>
    )
}

export default About