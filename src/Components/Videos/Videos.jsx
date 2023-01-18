import React from "react";
import Card from "./v-card";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="v-home-cont">
      <h1>My Videos</h1>
      <Card heading={"test"} detail={"why its not working"} />
    </div>
  );
};

export default Videos;
