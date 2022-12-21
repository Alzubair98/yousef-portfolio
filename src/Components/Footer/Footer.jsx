import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Face from "@iconscout/react-unicons/icons/uil-facebook";
import You from "@iconscout/react-unicons/icons/uil-youtube";
import Copy from "@iconscout/react-unicons/icons/uil-copyright";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="footer image" style={{ width: "100%" }} />
      <div className="f-content">
        <span>yousefbeshr2015@gmail.com</span>
        <div className="f-icon">
          <a href="">
            <Insta color="white" size="3rem" />
          </a>
          <a>
            <Face color="white" size="3rem" />
          </a>
          <a href="https://www.youtube.com/@yousefbeshr3571">
            <You color="white" size="3rem" />
          </a>
        </div>
        <div className="copy-div">
          <Copy color="white" size="1rem" />
          <a className="zubair" href="https://alzubair.netlify.app/">
            Designed by Alzubair
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
