import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Careers from './pages/careers/Careers.jsx';
import Aboutus from './pages/aboutus/Aboutus.jsx';
import Investors from './pages/investors/Investors.jsx';

// import Partners from './pages/partners/Partners.jsx';
// import Contact from './pages/contact/Contact.jsx';
// import Privacy from './pages/privacy/Privacy.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <Aboutus/>,
  },
   {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/investors",
    element: <Investors />,
  },
  // {
  //   path: "/partners",
  //   element: <Partners />,
  // },
  // {
  //   path: "/contacts",
  //   element: <Contact />,
  // },
  // {
  //   path: "/privacy",
  //   element: <Privacy />,
  // },

]);

  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
