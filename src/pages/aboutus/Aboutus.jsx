import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AboutBG from '../../assets/aboutBG.png'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <div>
        <div className="">
        <div className='relative mb-[5rem]'>
            <img src={AboutBG} alt="" className='About-bod1' />
        <div className="absolute top-0 left-[19%] About-shad1 mb-[5rem]">
            <div className="pt-[0.7rem]">
            <Navbar />
            </div>
            <div className="flex flex-col items-center">
             <div className="mt-[16rem] ral-700 text-[70px] 2xl:text-[100px] text-white">About Us</div>
             <div className="ral-400 text-white text-[28px] 2xl:text-[32px] lg:leading-[28px] 2xl:leading-[36px] lg:w-[840px] 2xl:w-[963px] text-center">Be a part of the talented team driving our innovative efforts and contribute to shaping the future.</div>
            </div>

            
            </div>

           

            </div>
             <div className="flex flex-col gap-[3rem] items-center mb-[10rem]">
                <div className="lg:w-[1174px] 2xl:w-[1278px] lg:h-[183.4px] 2xl:h-[208px] bg-white About-shad1 rounded-[15px] flex justify-center items-center ">
                    <p className="ral-400 lg:text-[30px] 2xl:text-[36px] lg:leading-[36px] 2xl:leading-[42px] lg:w-[1050px] 2xl:w-[1217px]">We manufacture low-cost, stand-alone solar grid systems and leveraging smart financing models to reduce upfront costs and increase electricity access.</p>
                </div>

                <div className="lg:w-[1174px] 2xl:w-[1278px] lg:h-[97px] 2xl:h-[111px] bg-white About-shad1 rounded-[15px] flex justify-center items-center">
                    <p className="ral-400 lg:text-[30px] 2xl:text-[36px] lg:leading-[36px] 2xl:leading-[42px] lg:w-[970px] 2xl:w-[1217px] ">Our vision is to power every home with green electricity.</p>
                </div>

                <div className="lg:w-[1174px] 2xl:w-[1278px] lg:h-[183.4px] 2xl:h-[208px] bg-white About-shad1 rounded-[15px] flex justify-center items-center ">
                    <p className="ral-400 lg:text-[30px] 2xl:text-[36px] lg:leading-[36px] 2xl:leading-[42px] lg:w-[1050px] 2xl:w-[1217px]">With this, we are driving the transition from fossil fuel powered generators to renewable energy in line with the Sustainable Development Goal 7 of ensuring access to affordable, reliable, sustainable, and modern energy.</p>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>


            </div>
    </div>
  )
}

export default Aboutus