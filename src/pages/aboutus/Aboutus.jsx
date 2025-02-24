import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AboutBG from '../../assets/aboutBG.png'
import AboutBGSmall from '../../assets/aboutusBGSmall.png'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <div>
        <div className="w-full">
        <div className='relative mb-[5rem]'>
            <img src={AboutBG} alt="" className='About-bod1 w-full hidden md:block' />
            <img src={AboutBGSmall} alt="" className='About-bod1 w-full block md:hidden' />
        <div className="absolute top-0 lg:left-[19%] 2xl:left-[17%] w-full About-shad1 mb-[5rem]">
            <div className="md:pt-[0.7rem]">
            <Navbar />
            </div>
            <div className="flex flex-col items-center w-full">
             <div className="mt-[5rem] md:mt-[16rem] ral-700 text-[37px] md:text-[70px] 2xl:text-[100px] text-white">About Us</div>
             <div className="ral-400 text-white text-[13px] md:text-[28px] 2xl:text-[32px] leading-[16px] md::leading-[28px] 2xl:leading-[36px] w-[350px] md:w-[840px] 2xl:w-[963px] text-center">Be a part of the talented team driving our innovative efforts and contribute to shaping the future.</div>
            </div>

            
            </div>

           

            </div>
             <div className="flex flex-col gap-[2rem] md:gap-[3rem] items-center mb-[5rem] md:mb-[10rem]">
                <div className="w-[320px] md::w-[1174px] 2xl:w-[1278px] h-[117px] md:h-[183.4px] 2xl:h-[208px] bg-white About-shad1 rounded-[15px] flex pl-[1.6rem] md:pl-[3rem] 2xl:pl-[2rem] items-center ">
                    <p className="ral-400 text-[13px] md:text-[30px] 2xl:text-[36px] leading-[16px] md:leading-[36px] 2xl:leading-[42px] w-[265px] md:w-[1050px] 2xl:w-[1217px] max-md:text-center">We manufacture low-cost, stand-alone solar grid systems and leveraging smart financing models to reduce upfront costs and increase electricity access.</p>
                </div>

                <div className="w-[320px] md:w-[1174px] 2xl:w-[1278px] h-[71px] md:h-[97px] 2xl:h-[111px] bg-white About-shad1 rounded-[15px] flex pl-[1.6rem] md:pl-[3rem] 2xl:pl-[2rem] items-center">
                    <p className="ral-400 text-[13px] md:text-[30px] 2xl:text-[36px] leading-[16px] md:leading-[36px] 2xl:leading-[42px] w-[265px] md:w-[970px] 2xl:w-[1217px] max-md:text-center">Our vision is to power every home with green electricity.</p>
                </div>

                <div className="w-[320px] md::w-[1174px] 2xl:w-[1278px] h-[117px] md:h-[183.4px] 2xl:h-[208px] bg-white About-shad1 rounded-[15px] flex pl-[0.6rem] md:pl-[3rem] 2xl:pl-[2rem] items-center ">
                    <p className="ral-400 text-[13px] md:text-[30px] 2xl:text-[36px] leading-[16px] md:leading-[36px] 2xl:leading-[42px] w-[300px] md:w-[1050px] 2xl:w-[1230px] max-md:text-center">With this, we are driving the transition from fossil fuel powered generators to renewable energy in line with the Sustainable Development Goal 7 of ensuring access to affordable, reliable, sustainable, and modern energy.</p>
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