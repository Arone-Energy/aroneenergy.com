import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
const App = () => {

  const structuredData = {
    "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Arone Energy",
        "url": "https://www.aroneenergy.com",
        "description": "Buy Luminars in Nigeria from us. Arone Luminar Power Stations helps you enjoy affordable Electricity. Get Stable Electricity, affordable power stations for affordable solar system in nigeria now and never stay without light again",
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
  };
  return (
    <div>

<Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="pt-[0.7rem]">
      <Navbar />  
      </div>
      
      <Home />
      <Footer />
    </div>
  )
}

export default App