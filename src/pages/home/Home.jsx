import React, {useEffect, useRef} from 'react'
import './Home.css'
import LuminarVideo from '../../assets/Arone_Energy.mp4'
import Circles from '../../assets/circles.png'
import LuminarPack from '../../assets/LuminarPack.png'
import LuminarLifespan from '../../assets/LuminarLifespan.png'
import CircleCut from '../../assets/circlecut.png'
import SMDIC from '../../assets/SMD-IC.png'
import PE from '../../assets/4xPE.png'
import BG from '../../assets/imageBG.png'
import Lum2 from '../../assets/lum2.0.png'
const Home = () => {
    const videoRef = useRef(null);

    useEffect(()=>{
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Autoplay prevented", error))
        }
    }, [])

  return (
    <>
        <div className="px-[3rem] mt-[12rem]">
            <div className="flex justify-between">
                <div className="ral-700 lg:text-[88px] 2xl:text-[100px] lg:leading-[90px] 2xl:leading-[117.4px] ">
                    <p className="">LUMINAR</p>
                    <p className="txt-green">2.0</p>
                </div>
                <div className="mt-[4rem]">
                    <p className="ral-400 lg:text-[21.12px] 2xl:text-[24px] lg:w-[459.36px] 2xl:w-[522px]">The all new Luminar has a refined selection of materials for superior performance, longetivity and everyday use</p>
                </div>
            </div>

</div>
            <div className="bg-black lg:h-[492.8px] 2xl:h-[560px] w-full my-[2rem] flex justify-center items-center Home-shad1">
                <div className="lg:w-[985.6px] lg:h-[425.66px] 2xl:w-[1120px] 2xl:h-[483.7px] ">
                    <video ref={videoRef} loop muted autoPlay >
                        <source src={LuminarVideo} typeof='video/mp4' />
                    </video>
                </div>

            </div>

            <div className="px-[3rem] my-[3rem] flex justify-between ">
                <div className="lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                    <div className="my-[1rem] pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[73px] 2xl:text-[83.76px]">5</p>
                        <p className="w-[226px] 2xl:w-[257px] ral-400 text-[20px] leading-[22px]">Years of Manufacturing experience.</p>
                    </div>
                </div>
                <div className="lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                <div className="my-[1rem] pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[73px] 2xl:text-[83.76px]">36<span className='text-[30px]'>states</span></p>
                        <p className="w-[180px] 2xl:w-[257px] ral-400 text-[20px] leading-[22px]">Available in all States in Nigeria</p>
                    </div>
                </div>
                <div className="lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                <div className="my-[1rem] pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[73px] 2xl:text-[83.76px]">1.35<span className='text-[30px]'>MWh</span></p>
                        <p className="w-[180px] 2xl:w-[257px] ral-400 text-[20px] leading-[22px]">Green energy capacity Installed</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
            <div className="p-[5rem] Home-shad1 Home-bod1 lg:w-[93%] 2xl:w-[93%] lg:h-[587px] 2xl:h-[667px] bg-white flex">
                <div className="w-[50%] relative">
                    
                <img src={Circles} alt="" className='lg:h-[447.92px] lg:w-[447.92px] 2xl:w-full 2xl:h-full' />
                <div className="absolute top-[5.5rem] left-[-5.5rem]">
                    <img src={LuminarPack} alt="" />
                </div>
                
                </div>
                <div className="w-[50%] ral-600 lg:w-[430px] lg:text-[42px] 2xl:text-[48px] leading-[50px] border-l-[1px] border-l-gray-300 pl-[4rem] flex flex-col gap-[3rem]">
                <p className="mt-[2rem]">Super Compatible and Super Strong</p>
                <p className="ral-400 lg:w-[446.17px] 2xl:w-[507px] lg:text-[28px] 2xl:text-[32px] lg:leading-[33px] 2xl:leading-[37.57px] ">Our chassis securely houses the battery and power electronics, ensuring safety and incredible portability. The new Luminar features top-quality materials for performance and longevity.</p>
                
                </div>
            </div>
        </div>

        <div className="my-[7rem] w-full flex flex-col items-center text-center">
            <div className="w-[659px] flex flex-col gap-[1.5rem]">
                <p className="ral-600 lg:text-[42px] 2xl:text-[48px] ">Longer Lifespan</p>
                <p className='ral-400 lg:text-[28px] 2xl:text-[32px] lg:leading-[33px] ' >The Luminar 2.0 includes a higher grade lithium battery for continuous power use, greater life span while delivering greater battery capacity.</p>
            </div>

            <div className="border-t-[1px] border-t-gray-300 mt-[3rem] w-[60%]">
                <img src={LuminarLifespan} alt="" />
            </div>

            <div className="flex justify-between w-full px-[5rem] my-[3rem]">
                <div className="lg:h-[537.68px] lg:w-[541.2px] 2xl:w-[615px] 2xl:h-[611px] Home-shad1 lg:rounded-[41.36px] 2xl:rounded-[47px] flex flex-col items-center gap-[4rem] bg-white">
                    <p className="mt-[5.2rem] ral-600 2xl:w-[317px] lg:w-[278.96px] lg:text-[42px] 2xl:text-[48px] text-center lg:leading-[45px] 2xl:leading-[56px]">4x POWER EFFICIENCY</p>
                    <div className=" relative flex justify-center">
                    
                <img src={CircleCut} alt="" className=' lg:w-[80%] 2xl:w-full 2xl:h-full' />
                <div className="absolute top-[4rem] left-[8.5rem]">
                    <img src={PE} alt="" className='w-[75%]' />
                </div>
                
                </div>
                </div>
                <div className="lg:h-[537.68px] lg:w-[541.2px] 2xl:w-[615px] 2xl:h-[611px] Home-shad1 lg:rounded-[41.36px] 2xl:rounded-[47px] flex flex-col items-center gap-[4rem] bg-white">
                    <p className="mt-[5.2rem] ral-600 2xl:w-[413px] lg:w-[350px] lg:text-[42px] 2xl:text-[48px] text-center lg:leading-[45px] 2xl:leading-[56px] ">Core 2.0 SMD integrated circuit</p>
                    <div className=" relative flex justify-center">
                    
                <img src={CircleCut} alt="" className=' lg:w-[80%] 2xl:w-full 2xl:h-full' />
                <div className="absolute top-[5rem] left-[8.5rem]">
                    <img src={SMDIC} alt="" className='w-[80%]' />
                </div>
                
                </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between px-[5rem]">
            <div className="py-[2rem] lg:w-[539.44px] lg:h-[278.96px] 2xl:w-[613px] 2xl:h-[317px] card-green rounded-[45px] flex flex-col items-center text-white  ">
                <p className="ral-600 lg:text-[35px] 2xl:text-[40px] mb-[1rem]">BE AN INVESTOR</p>
                <p className="ral-400 lg:text-[17.6px] 2xl:text-[20px] text-center lg:w-[435px] mb-[4rem]">Start your investment journey today. Explore Luminar world of investing and unlock new possibilities</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] button-green lg:w-[167.12px] 2xl:w-[189.9px] lg:h-[40.12px] 2xl:h-[45.59px]'>Get started</button>
            </div>
            <div className="py-[2rem] lg:w-[539.44px] lg:h-[278.96px] 2xl:w-[613px] 2xl:h-[317px] card-green rounded-[45px] flex flex-col items-center text-white  ">
                <p className="ral-600 lg:text-[35px] 2xl:text-[40px] mb-[1rem]">REPAIR & MAINTENANCE</p>
                <p className="ral-400 lg:text-[17.6px] 2xl:text-[20px] text-center lg:w-[435px] mb-[4rem]">Submit yor complaints about the product, we are wiling to make improvements that suits your taste</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] button-green lg:w-[167.12px] 2xl:w-[189.9px] lg:h-[40.12px] 2xl:h-[45.59px]'>Get started</button>
            </div>
        </div>

        <div className="flex flex-col items-center my-[12rem]">
            <p className="ral-700 lg:text-[70px] 2xl:text-[100px] text-center lg:w-[656px] 2xl:w-[848px] mb-[1rem]">LUMINAR 2.0 ARONE ENERGY </p>
            <div className="relative">
                <img src={BG} alt="" className='lg:w-[1219.23px] 2xl:w-[1311px] lg:h-[558.93px] 2xl:h-[601px]'/>
                <div className="absolute top-0">
                    <img src={Lum2} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home