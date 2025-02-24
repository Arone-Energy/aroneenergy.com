import React,{useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom' 
import './Navbar.css'
import Logo from '../../assets/AroneLogo.png'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseSquare } from 'react-icons/ai'

const Navbar = () => {

  const [activePage, setActivePage] = useState('home')
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="w-full flex justify-center  ">
    <div className=' hidden fixed z-999 ral-300 lg:text-[17px] 2xl:text-[20px] w-[93%] h-[50px] lg:h-[70px] 2xl:h-[90px] rounded-[18px] border-[0.5px] mt-[2rem] light-ash bod1 md:flex items-center justify-between px-[2rem] pr-[4rem]'>
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


    {/* Mobile Menu */}
    <div className="flex items-center md:hidden h-[53px] px-[1rem] border-b-gray-300 border-b-[1px] bg-white ">
    
    <div className="">
    <Link to='/'><img src={Logo} alt="" className='w-[76.8px] h-[23px]' /></Link>
     </div>

     <div className="w-full md:hidden">
          <div className="  flex justify-end ">
            <button
              className="focus:outline-none flex items-center "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                
                <AiFillCloseSquare className='hidden col-green cursor-pointer rounded-[50%]' />
              
              ) : (
                <HiMenu className='w-[21.12px] h-[21.12px] cursor-pointer' />
              )}
            </button>
          </div>
        </div>
    <div className={`bg-white md:hidden w-[124px] h-[161px] rounded-[7px] border-[1px] border-gray-300 Navbar-shad1  px-5 ${isOpen ? 'block' : 'hidden'} absolute top-[1rem] right-[2rem]`}>
    
          {/* <div className="flex justify-end">
            <button
              className="text-white focus:outline-none absolute top-3 right-[5rem]"
              onClick={() => setIsOpen(false)}
            >
            </button>
          </div> */}
          <div className="flex justify-end w-[100%] mt-[-2.5rem] ml-[1.2rem]">
            
          </div>
          <div className="absolute top-3 right-5">
            <div className="flex ">
             
      <ul className='flex flex-col gap-[0.1rem]  list-none mt-[5px] '>
      <li><Link to='/'  className={`${activePage === 'home' ? 'col-green' : ''}`}>Home</Link></li>
      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeh7C9qMC0MoMk6qAX81gbdJ5A9W0GYOREEoHmOrrXo8yMvJQ/viewform?usp=share_link">Care</a></li>
      <li><Link to='/careers'  className={`${activePage === 'careers' ? 'col-green' : ''}`}>Careers</Link></li>
      <li><Link to='/aboutus'  className={`${activePage === 'aboutus' ? 'col-green' : ''}`}>About us</Link></li>
      <li><a href="https://paystack.shop/arone-energy">Buy Now</a></li>
      </ul>
      <AiFillCloseSquare className='cursor-pointer w-[21.12px] h-[21.12px] col-green rounded-[50%]' onClick={()=>setIsOpen(false)} />
      </div>
     </div>
          
          </div>
        </div>
    </>
  )
}

export default Navbar