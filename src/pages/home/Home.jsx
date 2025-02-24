import React, {useEffect, useRef} from 'react'
import './Home.css'
import LuminarVideo from '../../assets/Arone_Energy.mp4'
import Circles from '../../assets/circles.png'
import LuminarPack from '../../assets/LuminarPack.png'
import LuminarLifespan from '../../assets/LuminarLifespan.png'
import CircleCut from '../../assets/circlecut.png'
import SMDIC from '../../assets/SMD-IC.png'
import PE from '../../assets/4xPE.png'

const Home = () => {
    const videoRef = useRef(null);

    useEffect(()=>{
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Autoplay prevented", error))
        }
    }, [])

  return (
    <>
        <div className="px-[1rem] mt-[3rem] md:px-[3rem] md:mt-[12rem] max-md:flex flex-col items-center">
            <div className="flex max-md:flex-col items-center md:justify-between">
                <div className=" ral-700 text-[49px] flex gap-1 md:block md:text-[88px] 2xl:text-[100px] lg:leading-[90px] 2xl:leading-[117.4px] ">
                    <p className="">LUMINAR</p>
                    <p className="txt-green">2.0</p>
                </div>
                <div className="mt-[1rem] md:mt-[4rem]">
                    <p className="text-center ral-400 lg:text-[21.12px] 2xl:text-[24px] w-[330px] lg:w-[459.36px] 2xl:w-[522px] max-md:leading-[20px]">The all new Luminar has a refined selection of materials for superior performance, longetivity and everyday use</p>
                </div>

                <a href='https://paystack.shop/arone-energy'><div className="md:hidden Home-bod2 button-green flex justify-center items-center rounded-[25px] w-[167px] h-[40px] text-white mt-[3rem] max-md:mb-[3rem]">Buy Now</div></a>
            </div>

</div>
            <div className="bg-black h-[270px] lg:h-[492.8px] 2xl:h-[560px] w-full my-[2rem] flex justify-center items-center Home-shad1">
                <div className="w-full h-[270px] lg:w-[985.6px] lg:h-[425.66px] 2xl:w-[1120px] 2xl:h-[483.7px] flex  items-center ">
                    <video ref={videoRef} loop muted autoPlay >
                        <source src={LuminarVideo} typeof='video/mp4' />
                    </video>
                </div>

            </div>

            <div className="md:px-[3rem] my-[3rem] flex max-md:flex-col items-center max-md:gap-[2.5rem] md:justify-between ">
                <div className="w-[251.68px] h-[165px] lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                    <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[54px] lg:text-[73px] 2xl:text-[83.76px]">5</p>
                        <p className="w-[226px] 2xl:w-[257px] ral-400 text-[16px] md:text-[20px]leading-[22px]">Years of Manufacturing experience.</p>
                    </div>
                </div>
                <div className="w-[251.68px] h-[165px] lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[54px] lg:text-[73px] 2xl:text-[83.76px]">36<span className='text-[30px]'>states</span></p>
                        <p className="w-[180px] 2xl:w-[257px] ral-400 text-[16px] md:text-[20px] leading-[22px]">Available in all States in Nigeria</p>
                    </div>
                </div>
                <div className="w-[251.68px] h-[165px] lg:w-[337px] lg:h-[221.76px] 2xl:w-[383px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[4rem] ral flex flex-col gap-3">
                        <p className=" inter-700 text-[54px] lg:text-[73px] 2xl:text-[83.76px]">1.35<span className='text-[30px]'>MWh</span></p>
                        <p className="w-[180px] 2xl:w-[257px] ral-400 text-[16px] md:text-[20px] leading-[22px]">Green energy capacity Installed</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
            <div className=" max-md:items-center max-md:py-[2rem] lg:p-[5rem] Home-shad1 Home-bod1 w-[251.68px] md:w-[93%] 2xl:w-[93%] lg:h-[587px] 2xl:h-[667px] bg-white flex max-md:flex-col">
                <div className="w-[80%] md:w-[50%] relative max-md:pb-[2rem]">
                    
                <img src={Circles} alt="" className='w-[200px] h-[200px] lg:h-[447.92px] lg:w-[447.92px] 2xl:w-[509px] 2xl:h-[509px]' />
                <div className="absolute top-[2.5rem] left-[2.5rem] md:top-[5rem] md:left-[5rem]">
                    <img src={LuminarPack} alt="" className='w-[125px] h-[120px] md:w-[312px] md:h-[300px]' />
                </div>
                
                </div>
                <div className="w-[80%] md:w-[50%] ral-600 text-[18px] lg:text-[42px] 2xl:text-[48px] leading-[25px] md:leading-[50px] md:border-l-[1px] md:border-l-gray-300 max-md:border-t-[1px] max-md:border-t-gray-300 md:pl-[4rem] flex flex-col max-md:items-center gap-[1rem] md:gap-[3rem]">
                <p className="mt-[1.5rem] md:mt-[2rem] w-[161px] lg:w-[430px] 2xl:w-[500px] ">Super Compatible and Super Strong</p>
                <p className="max-md:text-center ral-400 lg:w-[446.17px] 2xl:w-[507px] text-[14px] lg:text-[28px] 2xl:text-[32px] lg:leading-[33px] 2xl:leading-[37.57px] ">Our chassis securely houses the battery and power electronics, ensuring safety and incredible portability. The new Luminar features top-quality materials for performance and longevity.</p>
                
                </div>
            </div>
        </div>

        <div className="my-[4rem]  md:my-[7rem] w-full flex flex-col items-center text-center">
            <div className="w-[185px] md:w-[659px] flex flex-col gap-[1rem] md:gap-[1.5rem] max-md:items-center">
                <p className="ral-600 text-[18px] lg:text-[42px] 2xl:text-[48px] max-md:pb-[0.5rem] max-md:border-b-[1px] max-md:border-b-gray-400 max-md:w-[200px]">Longer Lifespan</p>
                <p className='ral-400 text-[14px] lg:text-[28px] 2xl:text-[32px] leading-[22px] lg:leading-[33px] ' >The Luminar 2.0 includes a higher grade lithium battery for continuous power use, greater life span while delivering greater battery capacity.</p>
            </div>

            <div className="md:border-t-[1px] border-t-gray-300 md:mt-[3rem] md:w-[70%] flex justify-center max-md:mt-[-3rem]">
                <img src={LuminarLifespan} alt="" className='w-[322px] h-[280px] lg:w-[575px] lg:h-[500px] md:w-[80%] ' />
            </div>

            <div className="flex max-md:flex-col max-md:gap-[2rem] items-center md:justify-between w-full px-[1rem] md:px-[5rem] my-[3rem]">
                <div className="w-[300px] h-[283px] lg:h-[537.68px] lg:w-[541.2px] 2xl:w-[615px] 2xl:h-[611px] Home-shad1 rounded-[21px] lg:rounded-[41.36px] 2xl:rounded-[47px] flex flex-col items-center gap-[4rem] bg-white">
                    <p className="mt-[1rem] md:mt-[5.2rem] ral-600 2xl:w-[317px] lg:w-[278.96px] w-[150px] text-[22px] lg:text-[42px] 2xl:text-[48px] text-center lg:leading-[45px] 2xl:leading-[56px]">4x POWER EFFICIENCY</p>
                    <div className=" relative flex justify-center">
                    
                <img src={CircleCut} alt="" className='w-[80%]  2xl:w-full 2xl:h-[90%] max-md:mt-[-1.8rem]' />
                <div className="absolute top-[0.5rem] md:top-[4rem] 2xl:top-[6rem] left-[4.7rem] md:left-[8.5rem] 2xl:left-[7rem]">
                    <img src={PE} alt="" className='w-[65%] md:w-[75%]' />
                </div>
                
                </div>
                </div>
                <div className="w-[300px] h-[283px] lg:h-[537.68px] lg:w-[541.2px] 2xl:w-[615px] 2xl:h-[611px] Home-shad1 rounded-[21px] lg:rounded-[41.36px] 2xl:rounded-[47px] flex flex-col items-center gap-[4rem] bg-white">
                    <p className="mt-[1rem] md:mt-[5.2rem] ral-600 2xl:w-[413px] lg:w-[350px] w-[180px] text-[22px] lg:text-[42px] 2xl:text-[48px] text-center lg:leading-[45px] 2xl:leading-[56px] ">Core 2.0 SMD integrated circuit</p>
                    <div className=" relative flex justify-center">
                    
                <img src={CircleCut} alt="" className=' w-[80%] 2xl:w-full 2xl:h-[90%] max-md:mt-[-1.8rem]' />
                <div className="absolute top-[1rem] md:top-[5rem] 2xl:top-[8rem] left-[5rem] md:left-[8.5rem] 2xl:left-[7rem]">
                    <img src={SMDIC} alt="" className='w-[70%] md:w-[80%]' />
                </div> 
                
                </div>
                </div>
            </div>
        </div>

        <div className="flex max-md:flex-col max-md:items-center justify-between max-md:gap-[2rem]  lg:px-[5rem]">
            <div className="py-[1rem] md:py-[2rem] w-[300px] h-[190px] lg:w-[539.44px] lg:h-[278.96px] 2xl:w-[613px] 2xl:h-[317px] card-green rounded-[27px] md:rounded-[45px] flex flex-col items-center text-white  ">
                <p className="ral-600 text-[22px] lg:text-[35px] 2xl:text-[40px] mb-[1rem]">BE AN INVESTOR</p>
                <p className="ral-400 text-[13px] lg:text-[17.6px] 2xl:text-[20px] text-center w-[264px] lg:w-[435px] mb-[1rem] md:mb-[4rem]">Start your investment journey today. Explore Luminar world of investing and unlock new possibilities</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] button-green w-[111px] h-[27px] lg:w-[167.12px] 2xl:w-[189.9px] lg:h-[40.12px] 2xl:h-[45.59px]'>Get started</button>
            </div>
            <div className="py-[1rem] md:py-[2rem]  w-[300px] h-[190px] lg:w-[539.44px] lg:h-[278.96px] 2xl:w-[613px] 2xl:h-[317px] card-green rounded-[27px] md:rounded-[45px] flex flex-col items-center text-white  ">
                <p className="ral-600 text-[22px] lg:text-[35px] 2xl:text-[40px] mb-[1rem]">REPAIR & MAINTENANCE</p>
                <p className="ral-400 text-[13px] lg:text-[17.6px] 2xl:text-[20px] text-center w-[264px] lg:w-[435px] mb-[1rem] md:mb-[4rem]">Submit yor complaints about the product, we are wiling to make improvements that suits your taste</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] button-green w-[111px] h-[27px] lg:w-[167.12px] 2xl:w-[189.9px] lg:h-[40.12px] 2xl:h-[45.59px]'>Get started</button>
            </div>
        </div>

        <div className="flex flex-col items-center my-[12rem]">
            <p className="ral-700 text-[40px] lg:text-[70px] 2xl:text-[100px] text-center w-[330px] lg:w-[656px] 2xl:w-[848px] mb-[1rem]">LUMINAR 2.0 ARONE ENERGY </p>
            <div className="max-md:w-full">
               
                <div className="w-full flex justify-center items-center  mx-auto " >
                    
                <iframe src="https://player.vimeo.com/video/932751168?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" type="video/mp4" className='w-full h-[280px] md:w-[840px] md:h-[600px]' frameborder="0" allowfullscreen  >
                </iframe>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Home