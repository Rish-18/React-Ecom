import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div style={{minWidth:"100%"}}>
      <div style={{height:"87vh"}}>

      
        <div className="services" >
          <div className='svg-style'>
              <span  className='svg'>
              <i class="fa-solid fa-comment-dots"></i>
              </span>
              <span>
              <h3>Customer Support</h3>
              <p className='text-muted'>Mon-Sat,10am-6pm</p>
              </span>
          </div>
          <div className='svg-style'>
            <span  className='svg'>
            <i class="fa-solid fa-right-left"></i>
            </span>
              <span>
              <h3>Easy Return</h3>
              <p className='text-muted'>Return extended to 7 days</p>
              </span>
          </div>
          <div className='svg-style'>
              <span className='svg'>
              <i class="fa-solid fa-seedling"></i>
              </span>
              <span>
              <h3>Exchange</h3>
              <p className='text-muted'>Offers reverse pick-up</p>
              </span>
          </div>
          <div className='svg-style'>
              <span  className='svg'>
              <i class="fa-solid fa-truck-fast"></i>
              </span>
              <span>
              <h3>Free shipping</h3>
              <p className='text-muted'>All over India</p>
              </span>
          </div>
        </div>
  
        <div className="container contain">
        <a name="connect"></a>
          <div className="row">
              <div className="col-sm-3 space">
                  <h5>COMPANY</h5>
                  <ul>
                    <li><a href="/Contact">Contact Us</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">FAQ'S</a></li>
                    <li><a href="#">Return/Exchange</a></li>
                  </ul>
              </div>
              <div className="col-sm-3 space">
                  <h5>POLICIES</h5>
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund & Exchange Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Terms of Services</a></li>
                  </ul>
              </div>
              <div className="col-sm-3 space">
                  <h5>CONNECT WITH US</h5>
                  <ul>
                    <li><a href="#">Whatsapp</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instargram</a></li>
                    <li><a href="#">Pinterest</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                  </ul>
              </div>
              <div className="col-sm-3 space">
                  <h5>HOLD UP</h5>
                  <p>Subscribe to get <strong>Extra 5%  </strong> off on your First Purchase </p>
                  <form
                    action="https://formspree.io/f/mjvnvwpv"
                    method="POST"
                  >
                  <input type='email'name='email' placeholder='Email'/>
                  <button><i class="fa-solid fa-arrow-right fa-beat"></i></button>
                  </form>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Footer
