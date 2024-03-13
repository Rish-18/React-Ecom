

import React, { useState, useEffect } from 'react';
import Products from './Products';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Footer from './Footer/Footer';
import "./App.css";
import Navbar from './Navbar/dummy Navbar';
import data from './Data';
import Swiping from './Swiping/Swiping';
import Marquee from "react-fast-marquee";
import Login from './Login';

import "./Navbar/Navbar.css"
import 'react-modern-drawer/dist/index.css'


// import '~video-react/dist/video-react.css'; 
// import { Player } from 'video-react';
// import ReactPlayer from 'react-player'
import video1 from "./Images/video1.mp4"


const Home = () => {
  var username="Girish" 
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const [displayList, setDisplayList] = useState(data);
  // const [isAdded, setIsAdded] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [emptyCart,setEmptyCart]=useState(true)

  const [search,setSearch]=useState("")
  
  console.log(cart);
  

  useEffect(() => {
    let total = 0;
    cart.forEach(element => {
      total += element.quantity * element.MRP;
    });
    setCartTotal(total);
  }, [cart]);

  const addToCart = (obj, element) => {
    const existingItemIndex = cart.findIndex(element => element.id === obj.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      alert("Added")
      setCart([...cart, { ...obj, quantity: 1 }]);
    }
    // setIsAdded(false);
    setEmptyCart(false)
  };

  const RemoveCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    if(updatedCart.length === 0){
      setEmptyCart(true);
    }
  };

  const incrementQuantity = (id) => {
    const updatedCart = cart.map(element =>
      element.id === id ? { ...element, quantity: element.quantity + 1 } : element
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map(element =>
      element.id === id && element.quantity > 1 ? { ...element, quantity: element.quantity - 1 } : element
    );
    setCart(updatedCart);
  };

  const handleSearch = (search) => {
    const filteredResults = data.filter(element =>
      element.Name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayList(filteredResults);
  };

  return (
    <div>
      <div>
        <Marquee className='moving' direction="left" hspace="10px"  width="100%" speed={100} pauseOnHover>
            <span>Get 25% off on all UPI payments - Only applicable for UPI orders (minimum order value: 2999rs).</span>
            <span>Get Extra 10% Off on All Pre-paid Orders  |  Buy 2 Get 25% Off Only on T-Shirts</span>
            <span>Free Shipping All over India | Easy Returns | Free Exchanges</span>
            <span>TRUSTED BY 10,00,000+ CUSTOMERS</span>
        </Marquee>
      <a name="home"></a>
      </div>

                                                                        {/* navbar */}
          <div style={{position:"relative"}}>

            <div className='nav-bar' style={{position:"sticky"}}>
              <div className='row'>
                <div className='col col1'>
                  <ul>
                    <li><a href="#home">HOME</a></li>
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
                <div className='col' >
                  <ul>
                  <li><button id='cart-button' onClick={toggleDrawer}><i  class="fa-solid fa-cart-shopping" ></i><sup style={{position:"absolute",top:"5px",color:"red",fontSize:"16px"}}>{cart.length}</sup></button></li>
                  </ul>
                </div>
              </div>
          </div>
    
        
        

      {/* <Navbar toggleDrawer={toggleDrawer} handleSearch={handleSearch}/> */}

        <video className='promo-vid' src={video1} autoPlay loop muted/>
     

      <Swiping/>
         
          
      <div>
          <Marquee className='moving-two' direction="left" hspace="10px"  width="100%" pauseOnHover speed={50} >
              <span>Harmonic Hues.</span>
              <span>LuxeWeave.</span>
              <span>Delightful Devotees.</span>
              <span>Mega Dispatch Marathon.</span>
          </Marquee>
      <a name="shop"></a>
      </div>
        <Products addToCart={addToCart} displayList={displayList} />
      
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
       size={400}
       
      >
        <div className="drawer">
          <section>
            <div className='userlogin-logout'>
              <div className="row">
                <div className="col"><span style={{cursor:"pointer"}}><i className='' onClick={toggleDrawer} class="fa-solid fa-square-xmark"></i></span></div>
                <div className="col"><span> <button><h6>{username} </h6></button><a href="/">  <i class="fa-solid fa-right-from-bracket"></i> </a> </span></div>
              </div>
              
              
            </div>
            <h2>Shopping Cart</h2>
            <p>You have <span>{cart.length}</span> items in Shopping cart</p>
          </section>
          <hr/>
          {emptyCart?<div className='cart-img'><img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png'></img></div>:<div><div>
                {cart.map(element => (
                  <div className="fix" key={element.id}>
                    <img src={element.Image} alt={element.Name}/>
                    {element.Name} <br/> Rs{element.MRP} <br/>
                    <button onClick={() => incrementQuantity(element.id)}>+</button>{element.quantity}
                    <button onClick={() => decrementQuantity(element.id)}>-</button>
                    <div><button className='remove-product' onClick={() => RemoveCart(element.id)}>Remove</button></div>
                    
                    <hr/>

                    </div>
                ))}
              </div></div>}
       
              
              
          <hr/>
          <p>Cart total: Rs {cartTotal}</p>
          <button className='checkout'>Checkout</button>
        </div>
      </Drawer>
      <div>
        <Footer/>
      </div>
</div>
                  
      </div>  
  );
};

export default Home;
