import React from 'react';
import './Hoodies.css';

const Hoodies = () => {
  return (
    <div className='splitshop'>
      
    <div className="container">
      <div className="main" style={{ backgroundImage: `url('https://estilocus.com/cdn/shop/files/SFSD_1125x_crop_center.jpg?v=1706954847')` }}>
        <h1>Transcend Trends</h1>
        <label htmlFor="">Oversized shirts redefine casual chic</label>
        <a href="/comingsoon"><button >Shop Now</button> </a>
      </div>
      <div className="main" style={{ backgroundImage: `url('https://estilocus.com/cdn/shop/files/ASDA_e19665b1-e824-42e6-8ce0-b3c680679252_1125x_crop_center.jpg?v=1706955375')` }}>
        <h1>Denim Revival</h1>
        <label htmlFor="">Experience denim like never before</label>
        <a href="/comingsoon"><button >Shop Now</button> </a>
      </div>
    </div>
   
    </div>
  );
};

export default Hoodies;
