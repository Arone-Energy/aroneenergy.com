import React from 'react'
import './Footer.css'
import Logo from '../../assets/AroneLogo.png'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
        <div className="md:h-[550.88px] footer-green max-md:py-[2rem] max-md:px-[1.2rem] md:p-[4rem] ral-400">
            <div className="mb-[2rem] lg:mb-[4rem]">
                <img src={Logo} alt="" className='max-md:w-[111.7px] max-md:h-[35px]' />
            </div>
            <div className="md:flex text-white justify-between mb-[2rem] md:mb-[5rem] footer">
                <div className="md:w-[65%] flex justify-between">
                <div className="ral-400 text-[12px] md:text-[21.12px] 2xl:text-[24px]">
                    <p className="ral-600 mb-[1rem] md:mb-[2rem]">Legal</p>
                    <ul className='flex flex-col gap-[1rem] md:gap-[2rem]'>
                    <li><a>Warranty</a></li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Usage guidelines</a></li>
                    </ul>
                </div>
                <div className="ral-400 text-[12px] md:text-[21.12px] 2xl:text-[24px]">
                <p className="ral-600 mb-[1rem] md:mb-[2rem]">Support</p>
                    <ul className='flex flex-col gap-[1rem] md:gap-[2rem]'>
                    <li><Link to='/investors'>Investors</Link></li>
                    <li className='max-md:w-[55px]'><a href="https://docs.google.com/forms/d/e/1FAIpQLSeh7C9qMC0MoMk6qAX81gbdJ5A9W0GYOREEoHmOrrXo8yMvJQ/viewform?usp=share_link">Repairs & Maintenance</a></li>
                    
                    </ul>
                </div>
                <div className="ral-400 text-[12px] md:text-[21.12px] 2xl:text-[24px]">
                <p className="ral-600 mb-[1rem] md:mb-[2rem]">Company</p>
                    <ul className='flex flex-col gap-[1rem] md:gap-[2rem]'>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/careers'>Career</Link></li>
                 
                    </ul>
                </div>
                </div>
                <div className="ral-400 text-[11px] md:text-[21.12px] 2xl:text-[24px] max-md:mt-[3rem]">
                <p className="ral-600 max-md:text-[12px]  mb-[1rem] md:mb-[2rem]">Follow Us On</p>
                    <ul className='flex md:flex-col gap-[0.5rem] md:gap-[2rem]'>
                    <li><a href='https://www.instagram.com/aroneenergy?igsh=MXg4bmxkbjk0ZWxtaA==' className='flex items-center gap-[2px] md:gap-1'><span><AiFillInstagram className='w-[20px] h-[20px] md:w-[27px] md:h-[27px]'/></span>@aroneenergy</a></li>
                    <li><a href="mailto:info@aroneenergy.com" className='flex items-center gap-[2px] md:gap-1'><span><IoMdMail className='w-[19px] h-[19px] md:w-[27px] md:h-[27px]'/></span>info@aroneenergy.com</a></li>
                    <li><a href='https://maps.app.goo.gl/oA1qQPYALSNXU3YR9?g_st=iw' className='flex items-center md:gap-1'><span><IoLocationSharp className='w-[20px] h-[20px] md:w-[27px] md:h-[27px]'/></span>Enugu, Nigeria</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-white max-md:border-t-[1px] border-t-white ral-400 text-[13px] md:text-[21.12px] 2xl:text-[24px] max-md:pt-[0.7rem]">Copyright @aroneenergy 2025</div>
        </div>
    </div>
  )
}

export default Footer