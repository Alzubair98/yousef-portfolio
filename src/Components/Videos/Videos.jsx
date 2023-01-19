import React from "react";
import Card from "./v-card";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="v-home-cont">
      <h1 className="v-font">My Videos</h1>
      <div className="v-card-cont">
        <Card
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/PLUp8HiSWng"}
        />
        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />

        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />
        <Card heading={"test"} detail={"why its not working"} />
      </div>
    </div>
  );
};

export default Videos;
