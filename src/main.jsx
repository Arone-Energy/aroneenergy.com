import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Careers from './pages/careers/Careers.jsx';
import Aboutus from './pages/aboutus/Aboutus.jsx';
import Investors from './pages/investors/Investors.jsx';
import Warranty from './pages/warranty/Warranty.jsx';
import Usage from './pages/usage/Usage.jsx';
import TandC from './pages/tandc/TandC.jsx'
import ScrollToTop from './ScrolltoTop.jsx';

function RootLayout() {
  return (
    <>
      <ScrollToTop />   
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,   // ✅ wrapper
    children: [
      { path: "/", element: <App /> },
      { path: "/home", element: <App /> },
      { path: "/aboutus", element: <Aboutus /> },
      { path: "/careers", element: <Careers /> },
      { path: "/investors", element: <Investors /> },
      { path: "/warranty", element: <Warranty /> },
      { path: "/usage", element: <Usage /> },
      { path: "/tandc", element: <TandC /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
