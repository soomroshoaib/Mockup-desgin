import React from "react";
import Air from "../Image/airfreight.png";
import Seatransport from "../Image/seatransport.png";
import Loicalimg from "../Image/local shipping services.png";
import Wareing from '../Image/warehousing services.png';

function section3() {
  return (
    <div>
      <div className="boxing">
        <div>
          <p>what we do</p>
          <h1>
            Safe & <span>Reliable </span>
            <br /> Cargo Solution
          </h1>
        </div>
        <div className="Airfreigh">
          <div className="imgAir">
            <img
              src={Air}
              alt="Airfreigh"
              style={{
                marginRight: "40px",
                marginTop: "30px",
                width: "60px",
                height: "60px",
              }}
            />
          </div>
          <div className="large123"></div>
          <div>
            <h3>Air Freight Services</h3>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum <br />
              Lorem ipsum dolor sit amet, Lorem ipsum <br />
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="larges">
            <img
              src={Seatransport}
              alt="Airfreigh"
              style={{
                marginRight: "40px",
                marginTop: "30px",
                width: "60px",
                height: "60px",
              }}
            />{" "}
            <br />
          </div>
          <div>
            <h3>Sea Transport Services</h3>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum <br />
              Lorem ipsum dolor sit amet, Lorem ipsum dolor <br />
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>
      <div className="second-meindiv">
        <div>
          <p>
            Lorem ipsum dolor sit amet, Lorem ipsum <br />
            Lorem ipsum dolor sit amet, Lorem ipsum dolor <br />
            Lorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="local-shiping">
          <div>
            
            <img src={Loicalimg} 
              style={{
                marginRight: "40px",
                marginTop: "30px",
                width: "60px",
                height: "60px",
              }}
              />
          </div>
          <div>
          <h3>Local Shipping Services </h3>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum <br />
              Lorem ipsum dolor sit amet, Lorem ipsum dolor <br />
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
        <div className="Wareing">
            <div>
                <img src={Wareing}    style={{
                marginRight: "40px",
                marginTop: "30px",
                width: "60px",
                height: "60px",
              }} />
            </div>
            
            <div>
            <h3>Warehousing Services </h3>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum <br />
              Lorem ipsum dolor sit amet, Lorem ipsum dolor <br />
              Lorem ipsum dolor sit amet,
            </p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default section3;
