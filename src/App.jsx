import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import AroneLogo from './assets/AroneIcon.png'
import Logo from './assets/aroneLogo-black.png'
import LuminarLogo from './assets/aeLogo.png'


function App () {

   const [progress, setProgress] = useState(0);

   useEffect(() => {
    // Progress bar animation logic
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'https://aronetech.com'; 
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, []);

  

  const structuredData = {
    "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Arone Tech",
        "url": "https://www.aroneenery.com.com",
        "description": "Pioneering breakthrough technologies for Mankind",
        "publisher": {
          "@type": "Organization",
          "name": "Luminar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.aronetech.com/AroneLogo.png"
          }
        },
    "sameAs": [
      "https://www.instagram.com/aronetech",
      "https://x.com/aronetech"
    ],
  };
    

    return (
        <div className=" ">
          <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
            
            
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 font-sans">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[38rem] w-full text-center space-y-5 bg-white p-5 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/60"
      >
        {/* Platform Names */}
        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold tracking-widest uppercase text-slate-400 flex justify-center"
          >
            <div className="w-[100px] md:w-[150px]">
            <img src={Logo} alt="" className='' />
            </div>
          </motion.h2>
          <h1 className='text-[18px] leading-[20px] md:leading-[40px] fnt-600 py-[1rem]'>LUMINAR has moved to aronetech.com</h1>
          <p className='text-[13px] md:text-[15px] fnt-400'>We have consolidated our energy, drone, and AI products on one platform. LUMINAR solar systems, Mini, Pro, Max, and Mega Pack, are now part of aronetech.com.</p>

        <a href="https://aronetech.com" class="cta">Visit aronetech.com</a>
        
        </div>

        {/* Fancy Redirect Animation */}
        <div className="relative py-2">
          <div className="flex justify-center items-center space-x-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 font-bold"
            >
              <img src={LuminarLogo} />
            </motion.div>
            
            <div className="w-24 h-[2px] bg-slate-100 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-blue-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [1, 0.5, 1] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-8  rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200"
            >
              <img src={AroneLogo} />
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        {/* <div className="space-y-4">
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              className="bg-blue-600 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          
        </div> */}

            <p class="secondary sans-400 text-[13px] md:text-[15px]">Questions? Reach us at <a href="mailto:info@aronetech.com">info@aronetech.com</a></p>

        <p class="redirecting sans-400 text-[13px] md:text-[15px]">Redirecting you to the Arone Platform...</p>
      
      <div class="footer">
            <div>This site will redirect automatically from June 13, 2026.</div>
            <div class="legal">A product of Arone Technologies Ltd.</div>
        </div>
      </motion.div>

      
    </div>
            
        </div>
  )
}

export default App
