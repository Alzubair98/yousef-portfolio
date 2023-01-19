import React from "react";
import Card from "./v-card";
import "./Videos.css";
import video from "../../img/video.png";

import HeartEmoji from "../../img/heartemoji.png";
const Videos = () => {
  return (
    <div className="v-home-cont">
      <h1 className="v-font">My Videos</h1>
      <div className="v-card-cont">
        <Card
          emoji={HeartEmoji}
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/PLUp8HiSWng"}
        />
        <Card
          emoji={HeartEmoji}
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/ExWTZ1YG49I"}
        />
        <Card
          emoji={HeartEmoji}
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/sOT3nFWVZa8"}
        />
        <Card
          emoji={HeartEmoji}
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/DHRhdywtDSA"}
        />

        <Card
          emoji={HeartEmoji}
          heading={"test"}
          detail={"why its not working"}
          link={"https://youtu.be/ARr3TBl4ml0"}
        />
      </div>
    </div>
  );
};

export default Videos;
