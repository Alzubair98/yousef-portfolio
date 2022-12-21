import React from "react";
import "./card.css";

const Card = (props) => {
  const { emoji, heading, detail } = props;
  return (
    <div className="card">
      <img src={emoji} />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
