import React from "react";
import "./v-card.css";

const Card = (props) => {
  const { emoji, heading, detail, link } = props;
  return (
    <div className="v-card">
      <img src={emoji} />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={link} target="_blank">
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
