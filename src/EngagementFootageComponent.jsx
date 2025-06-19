import React from "react";
import "./style.css";
import frame from "./assets/frame_footage.png";
import { motion, useInView } from "framer-motion";

import MotionImage from "./MotionImage"; // ✅ Use your custom motion component

const EngagementFootageComponent = () => {
  return (
    <div className="background_footage animate__animated animate__fadeIn">
      <h1 className="title_qr"></h1>
      <motion.h1
        className="title_wish"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Our Engagement Footage
      </motion.h1>
      <a
        href="https://www.instagram.com/reel/DCvV1ISTeu3/?igsh=MW05cGs0MXh0cmRueQ=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <MotionImage
          className="img_footage"
          src={frame}
          alt="Engagement Footage Frame"
          animationType="zoom" // ✅ Use any animationType you want here
        />
      </a>

      <button
        className="download_button"
        onClick={() =>
          window.open(
            "https://www.instagram.com/reel/DCvV1ISTeu3/?igsh=MW05cGs0MXh0cmRueQ==",
            "_blank"
          )
        }
      >
        Open Link
      </button>
    </div>
  );
};

export default EngagementFootageComponent;
