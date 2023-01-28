import React from "react";
import "./v-card.css";
import ReactPlayer from "react-player";

const Card = (props) => {
  const { heading, detail, link } = props;
  return (
    <div className="v-card">
      <ReactPlayer url={link} />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
