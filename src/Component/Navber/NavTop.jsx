import React from 'react'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import "./Nav.css"
import Navber from './Navbar';

function NavTop() {
  return (
    <div className='container'>
      <div className='mein'>
        <div style={{display: 'flex'}}><p><HeadsetMicIcon /> </p><p style={{marginLeft:'10px'}}>0347 3630177</p></div>
        <div style={{display: 'flex'}}> <p><AssignmentIndIcon /></p> <p style={{marginLeft:'10px'}}>  sign in </p></div>
      </div>
      <Navber />
      

    </div>
  )
}

export default NavTop