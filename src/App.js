import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./App.css"
import Products from "./Products";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Footer/Footer"
import Contact from "./Contact/Contact";
import Login from "./Login";

import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar/dummy Navbar";
import Home from "./Home";
import Register from "./Register";
import Loader from "./Loader/Loader";
import Coming from "./Coming";

// import Swiping from "./Swiping/Swiping";

const App=()=>{

  const [isLoading,setLoading]=useState(true)

  useEffect(()=>{

    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  
    return (
      <>
  <div >
        <div>
           {isLoading?
            <div>
              <Loader/>
             </div>:  <div>
              <Router>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/comingsoon" element={<Coming/>}/>

                    <Route path="*" element={"Page not found"} />
                </Routes>
              </Router>
                </div>}
             {/* <Router>
                  <Routes>
                    
                    
                  </Routes>
                </Router> */}
                
                
          </div>


  </div>
  </>
    )
}
export default App;

// import React from 'react'
// import Swiping from './Swiping/Swiping'

// const App = () => {
//   return (
//     <div>
//         hii
// <Swiping/>

//     </div>
//   )
// }

// export default App