import React from 'react'

import Cart1 from '../Image/cart1.png';

import  Cart2 from '../Image/cart2.png';

import Cart3 from '../Image/cart3.png';

import Cart4 from '../Image/cart4.png';
import "../Navber/Cart.css"

const Flips = () => {
  return (
    <div style={{backgroundColor:'#f1e6e6', paddingTop:'10px', paddingBottom:'10px'}}>
    <div className='Delivery'>
        <h2>Leaders in  Delivery, <span style={{color : 'rgb(255, 187, 0)'}}> Logistic </span> and more...  </h2>
    </div>
    <div className='cartdiv-flip'>
        <div className='meincart-flip'>
            <img  src={Cart1} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)' }}>E-Commerce Logistic</b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip'>
            <img  src={Cart2} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>Warehousing & Fulfilment</b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip'>
            <img  src={Cart3} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>International Logistic </b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip'>
            <img  src={Cart4} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>Document Delivery  </b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
    </div>
    <br />
    <br />

    <div className='cartdiv-flip'>
        <div className='meincart-flip'>
            <img  src={Cart1} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)' }}>Bulk Movements</b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip'>
            <img  src={Cart2} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>Gifts Deliveries</b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip'>
            <img  src={Cart3} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>Quick Commerce </b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button>
        </div>
        <div className='meincart-flip' style={{backgroundColor:'#f1e6e6'}}>
            {/* <img  src={Cart4} className='cartimg-flip' />
            <p style={{marginLeft:'20px'}}><b style={{color : 'rgb(255, 187, 0)'}}>Document Delivery  </b>  <br />
            Fully Transparent & tech-friendly 
            operations 
            </p>
            <button className='btn445'> Learn more </button> */}
        </div>
    </div>


</div>
  )
}

export default Flips