import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
const App = () => {

  
  return (
    <div>

      <div className="fixed z-[999] w-full top-0">
      <Navbar />  
      </div>
      
      <Home />
      <Footer />
    </div>
  )
}

export default App