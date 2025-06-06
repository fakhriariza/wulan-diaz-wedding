import "./style.css";
import "animate.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import bungaataskiri from "./assets/page_sixth/bungataskiri.png";
import bungaataskanan from "./assets/page_sixth/bungataskanan.png";
import bgstory from "./assets/page_sixth/bgstory.png";
import React, { useState } from "react";

function PotraitOfUseComponent({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="background_potrait">
      <h1 className="title_story">Portrait of Us</h1>
      <div className="story_div">
        <div className="carousel-wrapper">
          {/* Main Display */}
          <div className="main-preview">
            <img
              src={images[activeIndex]}
              className="main-image"
              alt={`Main ${activeIndex}`}
            />
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-carousel">
            {data.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`thumb ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
        {/* <Carousel
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
        </Carousel> */}
      </div>
    </div>
  );
}

export default PotraitOfUseComponent;
