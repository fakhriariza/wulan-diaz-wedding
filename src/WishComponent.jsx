import "./style.css";
import "animate.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MotionImage from "./MotionImage";

import bungaGift from "./assets/bungagift.png";
import bgfilter from "./assets/bgfilter.png";

function WishComponent({ data }) {
  const [text, setText] = useState("");

  return (
    <div className="background_wish">
      <MotionImage className="bgfilter" src={bgfilter} alt="Background" />

      <motion.h1
        className="title_wish"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Wishes <br /> & Words of Love
      </motion.h1>

      <motion.input
        className="input_wish"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Give Your Wish!"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h4
        className="button_send"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Send
      </motion.h4>

      <motion.div
        className="wish_list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {data.map((data, index) => (
          <motion.div
            key={index}
            className="wish_item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h4 className="name_wish">{data.title}</h4>
            <h4 className="time_wish">{data.time}</h4>
            <p className="wish">{data.message}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WishComponent;
