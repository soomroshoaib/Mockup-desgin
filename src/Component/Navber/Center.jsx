import React from 'react'
import  './Nav.css';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function Center() {
  return (
    <div className='Container-1'>
        <div className='bg-img'>
          <p className='p-class'>Logistics Supply Chain Solution</p>
            <h1>Seceure Courier for all <br /> Your packages </h1>
            <p>Great packaging option for all your precious item </p>
            <div id='btn'>
              <button>For Merchants </button>
              <button>For Drivers</button>
            </div>
        </div>

        <div className='Tracked'>
          <div className='location'>
          <div> <p> <HeadphonesIcon /> Call Center </p> <p> 24 / 7 Support <br /> * 123 456 7890548  </p></div>
          <p className='large'> </p> 
          <div> <p ><FmdGoodIcon /> <b> Our Location</b>   </p><p>  Lorem ipsum dolor sit amet, <br />
           consectetur, adipisicing elit. </p> </div>
          </div> 
          <div className='shipment'>
            <p className='trackes'> <b> TRACK YOUR SHIPMENT </b> </p>
            <p className='para'> <input placeholder='Enter your track number' type='tex'  /> <button className='btn55'>Track </button></p>
            
          </div>
        </div>
    </div>
  )
}

export default Center