import React from "react";
import "./v-card.css";
import ReactPlayer from "react-player";

const Card = (props) => {
  const { emoji, heading, detail, link, name } = props;
  return (
    <div className="v-card">
      <ReactPlayer url={link} className="video-player" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
