import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./style.css";
import frame from "./assets/frame_footage.png";
import { motion, useInView, useAnimation } from "framer-motion";

const EngagementFootageComponent = () => {
  return (
    <div className="background_footage animate__animated animate__fadeIn">
      <h1 className="title_qr">Our Engagement Fotage</h1>

      <img className="img_footage" src={frame}></img>

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
