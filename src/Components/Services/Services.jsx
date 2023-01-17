import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Contest";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="اعمالي">
      {/* left side  */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Content Writing,Presenting Events and Programs, Managing Social Meda
          Pages <br /> Arabic Turkish Translation ,Proofeading, Press Editing ,
          Media and marketing services
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div data-aos="zoom-in" style={{ left: "20rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Videos"}
            detail={"Videos i created and my TV interviews"}
            link={"/video"}
          />
        </div>
        <div data-aos="zoom-in" style={{ top: "12rem", left: "-2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Photography"}
            detail={"Photographs taken of various places and events"}
          />
        </div>
        <div data-aos="zoom-in" style={{ top: "19rem", left: "16rem" }}>
          <Card
            emoji={Humble}
            heading={"Blogs"}
            detail={"My published articles and blog postings"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
