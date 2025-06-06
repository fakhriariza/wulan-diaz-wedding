import "./style.css";
import "animate.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import bungaataskiri from "./assets/page_sixth/bungataskiri.png";
import bungaataskanan from "./assets/page_sixth/bungataskanan.png";
import bgstory from "./assets/page_sixth/bgstory.png";

function OurStoryComponent({ data }) {
  return (
    <div className="background_story">
      <h1 className="title_story">Our Story</h1>
      <img className="bungataskiri" src={bungaataskiri}></img>
      <img className="bungaataskanan" src={bungaataskanan}></img>
      <img className="bgstory" src={bgstory}></img>

      <div className="story_div">
        <Carousel
          className="carousel_story_list"
          controls={false}
          indicators={false}
          interval={3000}
          pause={false}
          wrap={true}
        >
          {data.map((data) => (
            <Carousel.Item key={data.id} interval={null} wrap={false}>
              <div className="carousel_story">
                <img
                  className="image_card_story"
                  src={data.image || "https://via.placeholder.com/150"}
                />
                <div className="card_bottom">
                  <p className="desc_year">{data.title}</p>
                  <p className="desc_story">{data.body}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurStoryComponent;
