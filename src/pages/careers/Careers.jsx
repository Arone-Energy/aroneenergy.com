import React from 'react'
import './Careers.css'
import Navbar from '../../components/navbar/Navbar'
import Pic1 from '../../assets/careerPic1.png'
import Pic2 from '../../assets/careerPic2.png'
import Pic3 from '../../assets/careerPic3.png'
import Pic4 from '../../assets/careerPic4.png'
import { IoLocationSharp } from 'react-icons/io5'
import Footer from '../../components/footer/Footer'

const Careers = () => {
  return (
    <div>
        <div className="bg-black lg:h-[515px] 2xl:h-[656px] Careers-bod1 mb-[5rem]">
            <div className="pt-[0.7rem]">
            <Navbar />
            </div>

            <div className="flex flex-col items-center text-white mt-[8rem]">
                <p className="ral-700 lg:text-[70px] 2xl:text-[100px] ">Join our Journey</p>
                <p className="ral-400 lg:text-[26px] 2xl:text-[32px] lg:leading-[26px] 2xl:leading-[36px] lg:w-[800px] text-center  2xl:w-[963px]">Be a part of the talented team driving our innovative efforts and contribute to shaping the future.</p>
            </div>

            <div className="w-full flex justify-center ">
            <div className="flex gap-4 px-[3rem] items-center mt-[5.5rem]">
                <img src={Pic1} alt="" className='bg-transparent lg:w-[272.8px] 2xl:w-[310px] lg:h-[250.8px] 2xl:h-[285px] Careers-shad1 rounded-[30px]' />
                <img src={Pic2} alt="" className='lg:w-[272.8px] 2xl:w-[310px] lg:h-[190px] 2xl:h-[216px] Careers-shad1 rounded-[30px]' />
                <img src={Pic3} alt="" className='bg-transparent lg:w-[272.8px] 2xl:w-[310px] lg:h-[250.8px] 2xl:h-[285px] Careers-shad1 rounded-[30px]'  />
                <img src={Pic4} alt="" className='lg:w-[272.8px] 2xl:w-[310px] lg:h-[190px] 2xl:h-[216px] Careers-shad1 rounded-[30px]' />
            </div>
            </div>

            <div className="px-[5rem] mt-[5rem] mb-[20rem] ">
                <p className="ral-600 lg:text-[40px] 2xl:text-[48px]">Apply for available roles</p>

                <div className="mt-[2rem] flex flex-col gap-[4rem] Apply">
                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Administrator</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                            <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>
                        </div>

                    </div>

                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Sales Representative</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                        <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>                        </div>

                    </div>

                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Electronics Engineer</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                        <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>                        </div>

                    </div>

                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Production Staff</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                        <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>                        </div>

                    </div>

                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Customer Support</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                        <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>                        </div>

                    </div>

                    <div className="Careers-shad1 lg:h-[100px] lg:w-[1174px] 2xl:w-[1278px] 2xl:h-[115px] bg-white rounded-[17px] flex items-center justify-between px-[1rem] pr-[3rem] ">
                        <div className="">
                            <p className="ral-600 lg:text-[20px] 2xl:text-[23.45px] ">Production Supervisor</p>
                            <p className="ral-400 lg:text-[15px] 2xl:text-[20px] flex items-center gap-1 "><span><IoLocationSharp className=' lg:h-[21.67px] lg:w-[15.17px] txt-green' /></span>Location : Onsite</p>
                        </div>
                        <div className="">
                        <a href="https://forms.gle/rFTv3FWaRkhDbMjQ6"><button className='text-white lg:w-[167px] lg:h-[40px] 2xl:h-[45.59px] 2xl:w-[189.9px] bgd-green ral-500 lg:text-[17px] rounded-[20px]'>Apply</button></a>                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
  )
}

export default Careers