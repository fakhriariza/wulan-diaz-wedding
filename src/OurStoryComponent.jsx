import "./style.css";
import "animate.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import MotionImage from "./MotionImage";

import bungaataskiri from "./assets/page_sixth/bungataskiri.png";
import bungaataskanan from "./assets/page_sixth/bungataskanan.png";
import bgstory from "./assets/page_sixth/bgstory.png";

function OurStoryComponent({ data }) {
  return (
    <div className="background_story">
      <motion.h1
        className="title_story"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Story
      </motion.h1>

      <MotionImage
        className="bungataskiri"
        src={bungaataskiri}
        animationType="sway"
      />
      <MotionImage
        className="bungaataskanan"
        src={bungaataskanan}
        animationType="sway"
      />
      <motion.img
        className="bgstory"
        src={bgstory}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

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
              <motion.div
                className="carousel_story"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  className="image_card_story"
                  src={data.image || "https://via.placeholder.com/150"}
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="card_bottom">
                  <p className="desc_year">{data.title}</p>
                  <p className="desc_story">{data.body}</p>
                </div>
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurStoryComponent;
