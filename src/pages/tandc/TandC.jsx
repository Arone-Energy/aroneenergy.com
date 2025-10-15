import React from 'react'
import './TandC.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Usage = () => {
  return (
    <div>
        <div>
        <div className="bg-black  tc-bod1 tc-shad1">
            <div className=" flex justify-center items-center">
            <div className=" fixed w-full md:w-[90%] top-0  md:top-[2rem] md:rounded-[20px] h-[90px] overflow-hidden">
            <Navbar className=''/>
            </div>
            </div>
            <div className="mt-[6rem] md:mt-[12rem] text-white px-[1.5rem] md:px-[5rem] ral-400 text-[14px] md:text-[25px] lg:text-[28px] 2xl:text-[32px] ">
                <p className="ral-700 text-[30px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] mb-[1rem] md:mb-[3rem] max-md:leading-[30px]">Luminar Terms and Conditions</p>
                <div className="flex flex-col gap-[2rem] ">
                <p className="">Acceptance of Terms<br/>By purchasing and using Luminar products and services, you agree to be bound by these Terms and Conditions.</p>
                <p className="">Use of Products<br/>You agree to use Luminar products and services solely for their intended purposes and in compliance with all applicable laws and regulations</p>
                <p className="">Payment and Fees<br/>Payment for Luminar products and services must be made in accordance with the terms specified at the time of purchase. Luminar reserves the right to change prices and fees at any time.</p>
                <p className="">Warranty<br/>Luminar products are covered by a one-year limited warranty against defects in materials and workmanship. Please refer to the warranty policy for details and exclusions.</p>
                <p className="">Limitation of Liability<br/>Luminar shall not be liable for any indirect, incidental, or consequential damages arising from the use of its products or services.</p>
                <p className="">Intellectual Property<br/>All intellectual property rights in Luminar products and services, including but not limited to trademarks, copyrights, and patents, are owned by Luminar.</p>
                <p className="">Privacy Policy<br/>Luminar respects your privacy and is committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.</p>
                <p className="">Termination<br/>Luminar reserves the right to terminate or suspend your access to its products and services at any time for any reason, without prior notice.</p>
                <p className="">Governing Law<br/>These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction where Luminar is based.</p>
                <p className="">Changes to Terms<br/>Luminar reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of Luminar products and services after any such changes constitutes acceptance of the revised Terms and Conditions</p>
                <p className="">Changes to Terms<br/>Luminar reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of Luminar products and services after any such changes constitutes acceptance of the revised Terms and Conditions </p>
                <p className="mb-[7rem]">If you have any questions or concerns about these Terms and Conditions, please contact Luminar Customer Support.</p>
            </div>
            </div>

            
        </div>
        
        <Footer />
    </div>
    </div>
  )
}

export default Usage