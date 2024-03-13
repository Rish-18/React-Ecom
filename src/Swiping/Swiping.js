// import React, { useRef, useState } from 'react'
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper/modules';

// import "./Swiping.css"
// const Swiping = () => {
//   return (
//     <div>
//           <>
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>  <div>
//               <img src="./logo512.png"></img>
//             </div></SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//     </div>
//   )
// }

// export default Swiping

//---------------------


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Swiping.css';

import { Autoplay,Pagination } from 'swiper/modules';


const Swiping=()=>{
    return (
      <>
        <Swiper
          direction={'horizontal'}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay:5000,
            disableOnInteraction:false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='ssback' style={{backgroundImage:`url('https://estilocus.com/cdn/shop/files/0002_0fe8e69f-f60b-4aa1-ba3b-c37c653e850c_3840x2160_crop_center.jpg?v=1706953122')`}}>
          <div className="container new-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="left" style={{ flex: 1, color: 'white',margin:'0px 40px', }}>
                    <p className="subheading">  wear the art, be the statement</p>
                    <h3>Modern Minimalism</h3>
                    <p>Define your fashion with vibes.</p>
                </div>
          </div>
          
          </SwiperSlide>
          <SwiperSlide className='ssback' style={{backgroundImage:`url("https://estilocus.com/cdn/shop/files/denim_shirt_56_1300x1500_crop_center.jpg?v=1709469257")`}}>
          <div className="container new-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="left" style={{ flex: 1, color: 'black',margin:'0px 40px', }}>
                    <p className="subheading"> a prominent trend in mens fashion</p>
                    <h3>Effortless Charm</h3>
                    <p>Build your perfect summer look.</p>
                </div>
          </div>
          </SwiperSlide>
         
          
        </Swiper>
      </>
    );
  }
  
export default Swiping;