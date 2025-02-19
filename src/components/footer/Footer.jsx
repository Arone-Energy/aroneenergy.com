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
        <div className="md:h-[550.88px] footer-green p-[4rem] ral-400">
            <div className="mb-[4rem]">
                <img src={Logo} alt="" />
            </div>
            <div className="flex text-white justify-between mb-[5rem] footer">
                <div className="">
                    <p className="ral-600 md:text-[21.12px] 2xl:text-[24px] mb-[2rem]">Legal</p>
                    <ul className='flex flex-col gap-[2rem]'>
                    <li><a>Warranty</a></li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Usage guidelines</a></li>
                    </ul>
                </div>
                <div className="">
                <p className="ral-600 md:text-[21.12px] 2xl:text-[24px] mb-[2rem]">Support</p>
                    <ul className='flex flex-col gap-[2rem]'>
                    <li><Link to='/investors'>Investors</Link></li>
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeh7C9qMC0MoMk6qAX81gbdJ5A9W0GYOREEoHmOrrXo8yMvJQ/viewform?usp=share_link">Repairs & Maintenance</a></li>
                    
                    </ul>
                </div>
                <div className="">
                <p className="ral-600 md:text-[21.12px] 2xl:text-[24px] mb-[2rem]">Company</p>
                    <ul className='flex flex-col gap-[2rem]'>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/careers'>Career</Link></li>
                 
                    </ul>
                </div>
                <div className="">
                <p className="ral-600 md:text-[21.12px] 2xl:text-[24px] mb-[2rem]">Follow Us On</p>
                    <ul className='flex flex-col gap-[2rem]'>
                    <li><a href='https://www.instagram.com/aroneenergy?igsh=MXg4bmxkbjk0ZWxtaA==' className='flex items-center  gap-1'><span><AiFillInstagram className='w-[27px] h-[27px]'/></span>@aroneenergy</a></li>
                    <li><a href="mailto:info@aroneenergy.com" className='flex items-center gap-1'><span><IoMdMail className='w-[27px] h-[27px]'/></span>info@aroneenergy.com</a></li>
                    <li><a href='https://maps.app.goo.gl/oA1qQPYALSNXU3YR9?g_st=iw' className='flex items-center gap-1'><span><IoLocationSharp className='w-[27px] h-[27px]'/></span>Enugu, Nigeria</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-white">Copyright @aroneenergy 2025</div>
        </div>
    </div>
  )
}

export default Footer