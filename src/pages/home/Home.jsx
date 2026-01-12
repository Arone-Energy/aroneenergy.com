import React, {useEffect, useRef} from 'react'
import { Helmet } from "react-helmet-async";
import './Home.css'
import LuminarVideo from '../../assets/Arone_Energy.mp4'
import Investor from '../../assets/investor.png'
import Repair from '../../assets/repair.png'
import HomePic from '../../assets/HomePic.png'
import Luminar from '../../assets/Luminar.png'
import Shadow from '../../assets/shadow.png'
import Core from '../../assets/core.png'

const Home = () => {
    const videoRef = useRef(null);

    useEffect(()=>{
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Autoplay prevented", error))
        }
    }, [])


  return (
    <>
     <Helmet>
        <title>Arone Energy | Solar & Inverter Solutions in Nigeria</title>
        <meta
          name="description"
          content="Arone Energy provides solar panels, inverters, and renewable power solutions for homes and businesses in Nigeria."
        />
        <link rel="canonical" href="https://www.aroneenergy.com" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Arone Energy",
            "url": "https://www.aroneenergy.com",
            "publisher": {
              "@type": "Organization",
              "name": "Arone Energy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aroneenergy.com/AroneLogo.png"
              }
            },
            "sameAs": [
            "https://www.instagram.com/aroneenergy",
            "https://x.com/aroneenergy"
            ],
          })}
        </script>
      </Helmet>
            <div className="mt-[3.3rem] md:mt-[5rem] lg:mt-[6rem] overflow-hidden">
                <div className="relative ">
                <img src={HomePic} alt="" className='w-full' />
                <div className="absolute inset-0 bg-green-600/30 "></div>
                <div className="absolute top-0 w-full">
                    <div className="md:py-[3rem] lg:py-[5rem] px-[1rem] sm:px-[2rem] lg:px-[5rem] w-full">

                    <div className="w-full max-md:mt-[1rem] flex justify-end">
                        <div className="justify-self-end bod1 w-[100px] h-[30px] sm:w-[160px] sm:h-[40px] md:w-[210px] md:h-[65px] lg:w-[230px] lg:h-[74px] xl:w-[250px] xl:h-[80px]  2xl:w-[389px] 2xl:h-[113px] rounded-[10px] sm:rounded-[15px] md:rounded-[19px] flex items-center justify-center text-white fnt-700 text-[15px] sm:text-[18px] md:text-[25px] lg:text-[35px] 2xl:text-[45px]">Luminar 2.0</div>
                    </div>
                
                

                </div>
            </div>
            </div>
            <div className="flex flex-col">
                <div className=" z-0 bg-[#0BAC67] w-[110%] mt-[-1rem] lg:mt-[-1.5rem] ml-[-5px] overflow-hidden md:h-[130px] rotate-[-1.5deg] lg:h-[150px] xl:h-[179px]"></div>
                
                <div className=" z-[99] mt-[3rem] md:mt-[-3rem]">
                <div className="lg:px-[3rem] px-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] text-[#0BAC67]">
                    <div className=" h-[165px] lg:h-[221.76px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                        <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[1.5rem] lg:pl-[2.5rem] ral flex flex-col gap-3">
                            <p className=" inter-700 text-[45px] lg:text-[73px] 2xl:text-[83.76px]">5</p>
                            <p className="w-[226px] 2xl:w-[257px] ral-400 text-[16px] lg:text-[20px] leading-[22px]">Years of Manufacturing experience.</p>
                        </div>
                    </div>
                    <div className=" h-[165px] lg:h-[221.76px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                    <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[1.5rem] lg:pl-[2.5rem] ral flex flex-col gap-3">
                            <p className=" inter-700 text-[45px] lg:text-[73px] 2xl:text-[83.76px]">36<span className='text-[30px]'>states</span></p>
                            <p className="w-[180px] 2xl:w-[257px] ral-400 text-[16px] lg:text-[20px] leading-[22px]">Available in all States in Nigeria</p>
                        </div>
                    </div>
                    <div className=" h-[165px] lg:h-[221.76px] 2xl:h-[252px] Home-shad1 rounded-[17px] bg-white">
                    <div className="my-[0.6rem] md:my-[1rem] pl-[3rem] md:pl-[1.5rem] lg:pl-[2.5rem] ral flex flex-col gap-3">
                            <p className=" inter-700 text-[45px] lg:text-[73px] 2xl:text-[83.76px]">1.35<span className='text-[30px]'>MWh</span></p>
                            <p className="w-[180px] 2xl:w-[257px] ral-400 text-[16px] lg:text-[20px] leading-[22px]">Green energy capacity Installed</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            

            <div className="w-full  mt-[5rem] lg:mt-[7rem] xl:mt-[15rem]">
            <div className="w-full flex flex-col items-center ">
                <div className="relative w-full flex justify-center">
                    <img src={Luminar} alt="" className='w-[60%] ' />
                    <div className="absolute top-1/2 -translate-y-1/2 ">
                    <p className="ral-900 text-[65px] md:text-[145px] lg:text-[180px] xl:text-[210px] 2xl:text-[250px] luminar">LUMINAR</p>
                    </div>
                </div>
                <div className="flex justify-center mt-[-20px] md:mt-[-3rem]">
                    <img src={Shadow} alt="" className='w-[75%] ml-[2rem]'/>
                </div>
            </div>
        </div>

        <div className="my-[3rem] md:my-[1rem] w-full flex flex-col items-center text-center">
            <div className="w-[80%] md:w-[659px] flex flex-col gap-[1rem] md:gap-[1.5rem] items-center text-[#0BAC67]">
                <p className="fnt-600 text-[18px] md:text-[38px] lg:text-[42px] 2xl:text-[48px]">Longer Lifespan</p>
                <p className='fnt-400 text-[14px] md:text-[23px] lg:text-[28px] 2xl:text-[32px] leading-[22px] md:leading-[26px] lg:leading-[33px] md:w-[550px]' >The Luminar 2.0 includes a higher grade lithium battery for continuous power use, greater life span while delivering greater battery capacity.</p>
            </div>
        </div>

        <div className="w-full px-[1rem] md:px-[3rem] lg:px-[3rem] mt-[7rem] space-y-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[1rem] md:gap-[4rem]">
            <div className="max-md:w-[90%] max-md:mx-auto">
                <img src={Investor} alt="" className=''/>
            </div>            

            <div className=" my-auto max-md:text-center">
                <p className="fnt-700 text-[22px] md:text-[25px] lg:text-[32px] 2xl:text-[36px] max-md:w-[90%] mb-[1rem]">Be An Investor</p>
                <p className="fnt-400 text-[13px] md:text-[17px] lg:text-[21px] 2xl:text-[24px] w-[90%] md:w-[300px] lg:w-[435px] mb-[1rem] ">Start your investment journey today. Explore Luminar world of investing and unlock new possibilities</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] md:text-[15px] 2xl:text-[19px] button-green w-[111px] h-[27px] md:w-[167.12px] 2xl:w-[189.9px] md:h-[40.12px] 2xl:h-[45.59px] text-white'>Get started</button>
            </div>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[1rem] md:gap-[4rem]">

            <div className=" my-auto max-md:text-center">
                <p className="fnt-700 text-[22px] md:text-[25px] lg:text-[32px] 2xl:text-[36px] mb-[1rem] max-md:w-[90%]">Repair and Maintenance</p>
                <p className="fnt-400 text-[13px] md:text-[17px] lg:text-[21px] 2xl:text-[24px] w-[90%] md:w-[300px] lg:w-[435px] mb-[1rem] ">Submit yor complaints about the product, we are wiling to make improvements that suits your taste</p>
                <button className='Home-bod2 rounded-[21px] ral-500 text-[12px] md:text-[15px] 2xl:text-[19px] button-green w-[111px] h-[27px] md:w-[167.12px] 2xl:w-[189.9px] md:h-[40.12px] 2xl:h-[45.59px] text-white'>Get started</button>
            </div>
            
            <div className="max-md:w-[90%] flex md:justify-end">
                <img src={Repair} alt="" className=''/>
            </div> 

        </div>
        </div>

        <div className="flex flex-col items-center my-[7rem] md:my-[12rem]">
            <img src={Core} alt="" />
                          
            <div className="w-[90%] md:w-[80%] flex justify-center items-center  mx-auto mt-[-14.7rem]  md:mt-[-12rem] rounded-[20px] overflow-hidden" >                   
                <iframe src="https://player.vimeo.com/video/932751168?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" type="video/mp4" className='w-full h-[280px] md:w-[840px] md:h-[600px] border-0' allowfullscreen  >
                </iframe>       
            </div>
        </div>
        </div>
    </>
  )
}

export default Home