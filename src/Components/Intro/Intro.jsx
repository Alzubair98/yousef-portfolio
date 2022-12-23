import React from "react";
import "./Intro.css";
import Youtube from "../../img/YouTube_Logo_Orange_Transparent (1).png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Yousf from "../../img/Yousf.png";
import FloatingDiv from "../FloatingDiv/floatingDiv";
import { themeContext } from "../../Contest";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>HI! I am </span>
          <span>Yousef Beshr</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <button className="button i-button">Contact me</button>
        <div className="i-icons">
          <a href="https://www.instagram.com/yousef_beshr/">
            <img src={Instagram} alt="github image" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="github image" />
          </a>
          <a href="https://www.youtube.com/@yousefbeshr3571">
            <img src={Youtube} alt="youtube tag" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={Yousf} alt="yousuf" />
        <img data-aos="fade-up-right" src={glassesimoji} alt="glasses imoji" />
        <div
          data-aos="fade-up-left"
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1={"Media"} txt2={"Man"} />
        </div>
        <div
          data-aos="fade-up-right"
          style={{ top: "18rem", left: "-2rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1={"like"} txt2={"me"} />
        </div>
        {/* adding blur divs */}

        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
