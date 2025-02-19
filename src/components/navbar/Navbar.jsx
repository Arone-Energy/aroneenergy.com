import React,{useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom' 
import './Navbar.css'
import Logo from '../../assets/AroneLogo.png'

const Navbar = () => {

  const [activePage, setActivePage] = useState('home')
  const location= useLocation();


    useEffect(() => {
      if (location.pathname === '/careers' ){
        setActivePage('careers')
      } else if (location.pathname === '/aboutus' ){
        setActivePage('aboutus')
      } else if (location.pathname === '/care' ){
        setActivePage('care')
      }
    
    }, [location.pathname])
    
    
  
  return (
    <>
    <div className="w-full flex justify-center ">
    <div className='fixed z-999 ral-300 lg:text-[17px] 2xl:text-[20px] w-[93%] h-[50px] lg:h-[70px] 2xl:h-[90px] rounded-[18px] border-[0.5px] mt-[2rem] light-ash bod1 flex items-center justify-between px-[2rem] pr-[4rem]'>
     <div className="">
    <Link to='/'><img src={Logo} alt="" className='lg:w-[143px] lg:h-[45px]' /></Link>
     </div>
     <div className="">
      <ul className='flex gap-[4rem] list-none '>
      <li><Link to='/'  className={`${activePage === 'home' ? 'ral-700' : ''}`}>Home</Link></li>
      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeh7C9qMC0MoMk6qAX81gbdJ5A9W0GYOREEoHmOrrXo8yMvJQ/viewform?usp=share_link">Care</a></li>
      <li><Link to='/careers'  className={`${activePage === 'careers' ? 'ral-700' : ''}`}>Careers</Link></li>
      <li><Link to='/aboutus'  className={`${activePage === 'aboutus' ? 'ral-700' : ''}`}>About us</Link></li>
      
      </ul>
     </div>
     <a href='https://paystack.shop/arone-energy'><div className="bod2 button-green flex justify-center items-center rounded-[25px] lg:w-[167px] lg:h-[40px] 2xl:w-[189.9px] 2xl:h-[45.59px] text-white">Buy Now</div></a>
    </div>
    </div>
    </>
  )
}

export default Navbar