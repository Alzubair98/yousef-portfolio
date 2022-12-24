import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { emoji, heading, detail, link } = props;
  return (
    <div className="card">
      <img src={emoji} />
      <span>{heading}</span>
      <span>{detail}</span>
      <NavLink to={link}>
        <button className="c-button">LEARN MORE</button>
      </NavLink>
    </div>
  );
};

export default Card;
