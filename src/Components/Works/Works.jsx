import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Contest";
import { useContext } from "react";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua
        </span>

        <button className="button s-button"> Contact</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="upwork" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yelloweCircle"></div>
      </div>
    </div>
  );
};

export default Works;
