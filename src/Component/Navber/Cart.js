import React from 'react'
import Cart1 from '../Image/cart1.png';
import Cart2 from '../Image/cart2.png';
import Cart3 from '../Image/cart3.png';
import Cart4 from '../Image/cart4.png';
import Computer from '../Image/computer.png';
import "./Cart.css"

function Cart() {
  return (
    <>
        <div className='cartdiv-mein'>
            <div className='meincart'>
                <img  src={Cart1} className='cartimg' />
                <p style={{marginLeft:'20px'}}><b>Tech-Ops</b>  <br />
                Fully Transparent & tech-friendly <br />
                operations 
                </p>
            </div>
            <div className='meincart'>
                <img  src={Cart2} className='cartimg' />
                <p style={{marginLeft:'20px'}}><b>Verified Returns</b>  <br />
                Fully Transparent & tech-friendly <br />
                operations 
                </p>
            </div>
            <div className='meincart'>
                <img  src={Cart3} className='cartimg' />
                <p style={{marginLeft:'20px'}}><b>Live Tracking & Support</b>  <br />
                Fully Transparent & tech-friendly <br />
                operations 
                </p>
            </div>
            <div className='meincart'>
                <img  src={Cart4} className='cartimg' />
                <p style={{marginLeft:'20px'}}><b>Daily payment processing  </b>  <br />
                Fully Transparent & tech-friendly <br />
                operations 
                </p>
            </div>
        </div>

        <div className='computer'>
            <div>
                 <h1> <b>  Combining the <span style={{color : 'rgb(255, 187, 0)'}} > best <br /> 
                 services </span>  with the latest <br /> 
                 technology  </b></h1>
                 <p><b>with the latest tech Integrated into  every aspect of our<br />
                 with the latest tech Integrated into  every  Ecomerce of the <br /> industry </b>  </p>
                 <button className='btn44'> Register </button>
                 </div>
            <div>
                <img src={ Computer} style={{heigt:' 450px', width:'400px'}} />
            </div>
        </div>

    </>
  )
}

export default Cart