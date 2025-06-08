import "./style.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useRef, useState, useEffect } from "react";

import fotoPotrait1 from "./assets/fotopotrait1.JPEG";
import fotoPotrait10 from "./assets/fotopotrait2.JPEG";
import fotoPotrait2 from "./assets/fotopotrait3.JPEG";
import fotoPotrait3 from "./assets/fotopotrait4.jpg";
import fotoPotrait4 from "./assets/fotopotrait5.JPEG";
import fotoPotrait5 from "./assets/fotopotrait6.jpg";
import fotoPotrait6 from "./assets/fotopotrait7.JPEG";
import fotoPotrait7 from "./assets/fotopotrait8.JPEG";
import fotoPotrait8 from "./assets/fotopotrait9.JPEG";
import fotoPotrait9 from "./assets/fotopotrait10.jpeg";
import fotoPotrait12 from "./assets/fotopotrait12.JPEG";
import fotoPotrait13 from "./assets/fotopotrait13.jpg";

function PotraitOfUseComponent({ data }) {
  return (
    <div className="background_potrait">
      <h2 className="txt_potrait">Portrait of Us</h2>
      <Carousel autoPlay interval="3000" transitionTime="1000" infiniteLoop>
        <div>
          <img src={fotoPotrait1} alt="" />
        </div>
        <div>
          <img className="fotodiazwulan" src={fotoPotrait10} alt="" />
        </div>
        <div>
          <img src={fotoPotrait2} alt="" />
        </div>
        <div>
          <img src={fotoPotrait3} alt="" />
        </div>
        <div>
          <img src={fotoPotrait4} alt="" />
        </div>
        <div>
          <img src={fotoPotrait5} alt="" />
        </div>
        <div>
          <img src={fotoPotrait6} alt="" />
        </div>
        <div>
          <img src={fotoPotrait7} alt="" />
        </div>
        <div>
          <img src={fotoPotrait8} alt="" />
        </div>
        <div>
          <img src={fotoPotrait9} alt="" />
        </div>
        <div>
          <img src={fotoPotrait12} alt="" />
        </div>
        <div>
          <img src={fotoPotrait13} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default PotraitOfUseComponent;
