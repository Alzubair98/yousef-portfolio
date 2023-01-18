import React from "react";
import Card from "../Card/Card";
import "./Videos.css";

const Videos = () => {
  return (
    <div>
      <h1>My Videos</h1>
      <div className="video-cards">
        <div>
          <Card heading={"test"} detail={"why its not working"} />
        </div>
        <div>
          <Card heading={"helli"} detail={"why its not working"} />
        </div>
        <div>
          <Card heading={"test"} detail={"why its not working"} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
