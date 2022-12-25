import React from "react";
import "./Works.css";
import TKIF from "../../img/TKIF-test.png";
import LOGO from "../../img/LOGO.png";
import Amazon from "../../img/amazon.png";
import balges from "../../img/balges.png";
import EDU from "../../img/EDU-LOGO.png";
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
            <img src={TKIF} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={LOGO} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={balges} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={EDU} alt="upwork" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yelloweCircle"></div>
      </div>
    </div>
  );
};

export default Works;
