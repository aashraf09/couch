import TopBar from '@/components/TopBar'
import React from 'react'
import Image from 'next/image'
import headerBG from '../assets/header-bg.svg'
import CardImg_1 from '../assets/header-card-1.svg'
import CardImg_2 from '../assets/header-card-2.svg'
import CardImg_3 from '../assets/header-card-3.svg'
import GridImg1 from '../assets/grid-img-1.svg'
import GridImg2 from '../assets/grid-img-2.svg'
import GridImg3 from '../assets/grid-img-3.svg'
import GridImg4 from '../assets/grid-img-4.svg'
import GridImg5 from '../assets/grid-img-5.svg'
import GridImg6 from '../assets/grid-img-6.svg'
import GridImg7 from '../assets/grid-img-7.svg'
import GridImg8 from '../assets/grid-img-8.svg'
import GridImg9 from '../assets/grid-img-9.svg'
import ScrollDown from '../assets/scroll-down.svg'
import RelaxingBody from '../assets/relaxing-body.svg'
import Professional from '../assets/professional.svg'
import About from '@/components/About'


const page = () => {
  return (
    <>
      <main>
        <section className="header bg-[#0F1141]">
          <TopBar />
          <div className="header-text mt-10 relative">
            <div className="content-img">
              <Image src={headerBG} alt=''></Image>
            </div>
          </div>

          {/* header cards section */}

          <div className="header-cards grid grid-cols-3 gap-2.5 ">
            <div className="card relative">
              <Image className='card-img' src={CardImg_1} alt='card-img'></Image>
              <p className="card-content text-base font-bold hidden md:block absolute">Teletheraphy</p>
            </div>
            <div className="card relative">
              <Image className='card-img' src={CardImg_2} alt='card-img'></Image>
              <p className="card-content text-lg font-bold hidden md:block absolute">Wellness store</p>
            </div>
            <div className="card relative">
              <Image className='card-img' src={CardImg_3} alt='card-img'></Image>
              <p className="card-content text-base font-bold hidden md:block absolute">Community</p>
            </div>
          </div>
        </section>
        <section className="grid-section px-3 md:px-10 mt-10 flex flex-col justify-between  md:flex-row">
          <div className="headings text-center md:text-left">
            <h2 className='font-bold text-3xl leading-10 p-1 md:p-4 md:text-6xl'>Discover a healthier, happier you</h2>
            <ul className=' p-1 md:p-4 px-16 mt-4 text-xl md:text-3xl'>
              <li className='p-0 md:p-2'>Life transforming therapy & coaching <span>sessions</span></li>
              <li className='p-0 md:p-2'>Explore our range of welllness <span>items</span></li>
              <li className='p-0 md:p-2'>Join a judgment free <span>community</span></li>
              <li className='p-0 md:p-2'>Elevate your <span>body, mind & soul</span></li>
            </ul>
            <Image src={ScrollDown} alt='scroll down' className='scroll-img py-12 mx-auto'></Image>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div></div>
            <div></div>
            <Image src={GridImg1} alt='image-1'></Image>
            <div></div>
            <Image src={GridImg2} alt='image-2'></Image>
            <Image src={GridImg3} alt='image-3'></Image>
            <Image src={GridImg4} alt='image-4' className='col-span-2 row-span-2'></Image>
            <Image src={GridImg5} alt='image-5'></Image>
            <Image src={GridImg6} alt='image-6'></Image>
            <Image src={GridImg7} alt='image-7'></Image>
            <Image src={GridImg8} alt='image8'></Image>
            <Image src={GridImg9} alt='image-9'></Image>
          </div>
        </section>

        <section className='relaxing-body p-11 text-center flex flex-col relative justify-start items-center md:justify-end bg-[#0F1141] md:items-end md:flex-row'>
          <div className="left order-last absolute md:order-first">
            <Image src={RelaxingBody} className='relaxing-body-img' alt='relaxing body'></Image>
          </div>
          <div className="right text-4xl md:text-6xl md:w-1/2 p-4 md:p-11 font-bold text-white order-first md:order-last"><span>Therapy</span> at your own <span>convenience</span></div>
        </section>

        <section className='professional-body p-8 md:p-11 text-center flex flex-col relative justify-start items-center md:justify-start bg-white md:items-start md:flex-row'>
          <div className="professional-text text-xl md:text-6xl w-1/2 font-bold"><h2>Choose professionals <span>according to your</span> preferences & needs</h2></div>
          <div className="image-section md:absolute m-auto"><Image src={Professional} alt='choose professional according to your choise'></Image></div>
        </section>
        <About />
        <section className="mobile-app">
          <h2 className='text-3xl md:text-5xl text-center font-bold text-white w-3/4 m-auto py-10'>Mobile App coming soon!</h2>
        </section>
      </main>
    </>
  )
}

export default page