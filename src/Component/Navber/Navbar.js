import React from "react";
import Image from "../Image/logo.png";
import "./Nav.css";


function Navbar() {
  return (
    <div className="Header">
        <div className="Logo">
          <img src={Image} alt="Logo" />
        </div>
        <div className="List" >
          <p>About Us </p>
          <p> Why i-ShipS? </p>
          <p> Servics </p>
          <p> Pricing </p>
          <p> Contact-Us </p>
          <p>
            <button className="btn1">Track</button>
          </p>
          <p>
            <button className="btn2"> Register</button>
          </p>
        </div>
    </div>
  );
}

export default Navbar;
