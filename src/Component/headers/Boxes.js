import React from "react";
import "./Box.css";
import Box from "../Image/Boxcar.png";

function Boxes() {
  return (
    <div>
      <div className="linux">
        <div>
          
          <img src={Box} className="boximg" />
        </div>
        <div className="dolor-para">
          <div>
            <p><b style={{color: 'rgb(255, 187, 0)'}}> $150 M+ </b>  </p>
            <p>Cash Handled</p>
          </div>
          <div>
            <p> <b style={{color: 'rgb(255, 187, 0)'}}> 16, 000 + </b> </p>
            <p>Shipment Delivered </p>
          </div>
          <div>
            <p><b style={{color: 'rgb(255, 187, 0)'}}> 5, 000 + </b> </p>
            <p>Tons Moved </p>
          </div>
          <div>
            <p><b style={{color: 'rgb(255, 187, 0)'}}> 150, 000 + </b> </p>
            <p>Packages Fulfiled </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
