import React from "react";
import data from "./Data";
import "./Product.css"
import Hoodies from "./Hoodies";
const Products=({addToCart,displayList})=>{

    return(
    <div>
        <Hoodies/>
       <div>

       
       </div>
        <div className="container">
            <div >
                <h2>A/W "New arrivals</h2>
                <p> Explore our fresh selecttion of recently added items! </p><br/>
            </div>
            <div className="row">{
            displayList?.map(element=>{
                return(
                    
                    <div className="col-4 icard">
                        <div style={{overflow:"hidden"}}>
                            <img src={element.Image} alt={element.Name}/>
                        </div>
                        <span className="product-name">{element.Name}</span>
                        <p>
                            <del style={{color:"red"}}>Rs {element.Price}.00</del>
                            <ins > Rs {element.MRP}.00</ins>
                        </p>  

                 
                        <button className="add-to-cart-btn"  onClick={()=>addToCart(element)}>Add to cart</button>
                
                       
                 
                    </div>
                )
            })
            }
        <hr/>
        <br/>
        <br/>
            </div>
        </div>

         <div className="hoodies">
            <div className="container new-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black' }}>
                <div className="left" style={{ flex: 1, color: 'white',margin:'0px 40px', }}>
                    <p className="subheading">EXPLORE SIGNATURE HOODIES</p>
                    <h3>SUPREME SOFTNESS</h3>
                    <p>Experience unmatched comfort with hoodies, crafted from premium fabrics for a touch of luxury in every wear.</p><br/>
                    <button style={{ alignItems: 'center',justifyContent:'center' }}>Shop Now</button>
                </div>
                <div className="right" style={{ flex: 1, textAlign: 'center', marginLeft: '20px' }}>
                    <img src="https://estilocus.com/cdn/shop/files/afa_bbf503f5-c366-4f0b-8362-cdde44991787_690x690_crop_center.jpg?v=1706959667" alt="Hoodie" style={{ maxWidth: '100%', height:"50%" }} />
                </div>
            </div>
        </div>
        
    </div>
    )
}
export default Products;