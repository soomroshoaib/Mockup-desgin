import React from "react";
import Sideimg from "../Image/abcd.png";
import Less from "../Image/lessten.png";
import Greater from "../Image/greaterten.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Man1 from '../Image/man1.png';
import Man2 from '../Image/man2.png';
import "./Box.css";

function Partner() {
  return (
    <div>
      <div className="handing-side">
        <div>
          <img src={Sideimg} className="sideimg" />
        </div>
        <div className="imgcart">
          <div className="lessten">
            {" "}
            <h2>
              Let's hear it from our{" "}
              <span style={{ color: "rgb(255, 187, 0)" }}>Customers! </span>
            </h2>
            <img src={Less} style={{ height: "30px", width: "40px" }} />
            <img src={Greater} style={{ height: "30px", width: "40px" }} />
          </div>
          <div className="starts">
            <div className="haven">
              <p>
                
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
              </p>
              <p>
                
                Lorem ipsum dolor sit amet, Lorem <br />
                Lorem ipsum dolor sit amet, Lorem ipsum <br />
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="hance">
            <p>
                
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
                <StarBorderIcon style={{ color: "rgb(255, 187, 0)" }} />
              </p>
              <p>
                
                Lorem ipsum dolor sit amet, Lorem <br />
                Lorem ipsum dolor sit amet, Lorem ipsum <br />
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            
          </div>
          <div className="man">
          <div style={{display:'flex'}}>
          <img src={Man1} style={{height:'70px' , marginTop:'20px'}} />
            <h4 style={{marginLeft:'20px', color: "rgb(255, 187, 0)" }}>
                JOSHUA KIMMICH
                <p style={{color:'black' , fontSize:'13px'}}> Coustomer </p>
            </h4> 
          </div>
          <div style={{display:'flex'}}>
          <img src={Man2} style={{height:'70px' , marginTop:'20px'}} />
            <h4 style={{marginLeft:'20px', color: "rgb(255, 187, 0)" }}>
                MIKE TEVEZ
                <p style={{color:'black', fontSize:'13px'}}> Coustomer </p>
            </h4> 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
