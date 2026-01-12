import React from 'react'
import { Helmet } from "react-helmet-async";
import './Warranty.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Warranty = () => {
  return (
    <div>
        <Helmet>
  <title>Arone Energy Product Warranty | Solar Inverters & Generators in Nigeria</title>
  <meta name="description" content="Explore Arone Energy's warranty policies for solar inverters, solar generators, and other renewable energy solutions in Nigeria. Enjoy peace of mind with our quality assurance." />
  <meta name="keywords" content="Solar inverter warranty Nigeria, Renewable energy product guarantee, Solar generator warranty Nigeria" />
  <link rel="canonical" href="https://www.aroneenergy.com/warranty" />
</Helmet>


        <div>
        <div className="bg-black  warranty-bod1 warranty-shad1">
            <div className=" flex justify-center items-center">
            <div className=" fixed w-full md:w-[90%] top-0  md:top-[2rem] md:rounded-[20px] h-[90px] overflow-hidden">
            <Navbar className=''/>
            </div>
            </div>
            <div className="mt-[6rem] md:mt-[12rem] text-white px-[1.5rem] md:px-[5rem] ral-400 text-[14px] md:text-[25px] lg:text-[28px] 2xl:text-[32px] ">
                <p className="ral-700 text-[30px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] mb-[1rem] md:mb-[3rem] max-md:leading-[30px]">Luminar Warranty Policy Coverage</p>
                <div className="flex flex-col gap-[2rem] ">
                <p className="">Luminar Solar Grid System (SGS) warrants its product, Luminar, against defects in materials and workmanship for one (1) year from the date of purchase by the original end-user purchaser ("Warranty Period").</p>
                <p className="">Warranty Services <br />During the Warranty Period, Luminar will, at its sole discretion, repair or replace any defective product or part with a new or refurbished product or part, free of charge. All replaced parts or products become the property of Luminar.</p>
                <p className="mb-[5rem]">Exclusions <br />This warranty does not cover damages caused by:  <br />Misuse, abuse, or negligence. Modification, alteration, or repair by unauthorized personnel. <br />Acts of nature, such as lightning, flood, or fire.  <br />Use of the product outside its intended purpose or specifications.</p>
            </div>
            </div>

            
        </div>
        <div className="mt-[2rem] mb-[5rem] md:mt-[5rem] md:mb-[8rem]">
            <div className="ral-400 text-[13px] md:text-[25px] lg:text-[28px] 2xl:text-[32px] flex flex-col items-center gap-[2rem] md:gap-[5rem]">
                <div className="warranty-shad1 bg-white rounded-[17px] w-[90%] p-[1rem] md:p-[2rem] ">
                    <p className="">Governing Law<br/>This warranty is governed by the laws of the jurisdiction where the product was purchased. Contact Information: For warranty service or inquiries, please send an email to  info@aroneenergy.com. This warranty gives you specific legal rights, and you may also have other rights that vary from jurisdiction to jurisdiction.</p>
                </div>

                <div className="warranty-shad1 bg-white rounded-[17px] w-[90%] p-[1rem] md:p-[2rem] ">
                    <p className=""> Limitation of Liability<br/>Luminar's liability under this warranty is limited to the repair or replacement of the defective product or part. In no event shall Luminar be liable for any indirect, incidental, or consequential damages arising from the use of the product. </p>
                </div>

                <div className="warranty-shad1 bg-white rounded-[17px] w-[90%] p-[1rem] md:p-[2rem] ">
                    <p className=""> Claim Procedure <br/>To obtain warranty service, the purchaser must contact Luminar Customer Support within the Warranty Period and provide proof of purchase. Luminar may require the defective product to be returned for inspection. </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </div>
  )
}

export default Warranty