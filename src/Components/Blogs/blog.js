import React from "react";
import Card from "../Videos/v-card";
import Humble from "../../img/humble.png";

const Blogs = () => {
  return (
    <div className="v-home-cont">
      <h1 className="v-font">My Blogs</h1>
      <div className="v-card-cont">
        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={"https://yeniyemen.net/p-44538"}
        />
        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={"https://yeniyemen.net/p-42860"}
        />
        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={"https://www.aljazeera.net/author/beshr"}
        />
        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={"https://yeniyemen.net/p-42860"}
        />

        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={"https://sasapost.co/opinion/istanbul_the_kiss_of_arab_media/"}
        />

        <Card
          name={"READ BLOG"}
          emoji={Humble}
          heading={"BLOG NAME"}
          detail={"DESCRIPTION"}
          link={
            "https://www.sasapost.com/opinion/why-did-the-arabs-and-muslims-not-create-influential-lobbies/"
          }
        />
      </div>
    </div>
  );
};

export default Blogs;
