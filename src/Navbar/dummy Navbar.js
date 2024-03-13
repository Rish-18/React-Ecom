import React, { useState } from 'react'
import "./Navbar.css"
import 'react-modern-drawer/dist/index.css'
import Marquee from "react-fast-marquee";


const Navbar = ({toggleDrawer,handleSearch}) => {
  const [cart,setCart]=useState([])
  const [search,setSearch]=useState("")
  
  console.log(cart);
  


  return (
    <div>
        <div>
          
            <div className='nav-bar' >
              <div className='row'>
                <div className='col'>
                  <ul>
                    <li><a href="#home">HOME </a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#connect">CONNNECT</a></li>
                  </ul>
                </div>
                <div className='col'>
                  <ul>
                    <li>
                      <div className='d-flex'>
                      <form>
                        <input className='nav-button-search'  placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
                      </form>
                      <button onClick={()=>handleSearch(search)}><i class="fa-solid fa-magnifying-glass"></i></button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col'>
                  <ul>
                  <li><button onClick={toggleDrawer}><i  class="fa-solid fa-cart-shopping" ></i><sup></sup></button></li>
                  </ul>
                </div>
              </div>
          </div>
    

        </div>

     

    </div>
  )
}

export default Navbar

