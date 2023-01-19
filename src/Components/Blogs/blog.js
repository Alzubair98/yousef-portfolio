import React from "react";
import Card from "../Videos/v-card";
import Humble from "../../img/humble.png";

const Blogs = () => {
  return (
    <div className="v-home-cont">
      <h1 className="v-font">My Videos</h1>
      <div className="v-card-cont">
        <Card
          emoji={Humble}
          heading={"VEDIO NAME"}
          detail={"DESCRIPTION"}
          link={"https://youtu.be/PLUp8HiSWng"}
        />
        <Card
          emoji={Humble}
          heading={"VEDIO NAME"}
          detail={"DESCRIPTION"}
          link={"https://youtu.be/ExWTZ1YG49I"}
        />
        <Card
          emoji={Humble}
          heading={"VEDIO NAME"}
          detail={"DESCRIPTION"}
          link={"https://youtu.be/sOT3nFWVZa8"}
        />
        <Card
          emoji={Humble}
          heading={"VEDIO NAME"}
          detail={"DESCRIPTION"}
          link={"https://youtu.be/DHRhdywtDSA"}
        />

        <Card
          emoji={Humble}
          heading={"VEDIO NAME"}
          detail={"DESCRIPTION"}
          link={"https://youtu.be/ARr3TBl4ml0"}
        />
      </div>
    </div>
  );
};

export default Blogs;
