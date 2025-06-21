import "./style.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import CustomLightbox from "./CustomLightbox"; // ✅ import this
import { motion } from "framer-motion";

// Assets
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
import fotoPotrait13 from "./assets/fotopotrait13.JPEG";
import fotoPotrait14 from "./assets/fotopotrait14.jpg";
import fotoPotrait15 from "./assets/fotopotrait15.jpg";
import fotoPotrait16 from "./assets/fotopotrait16.jpg";
import fotoPotrait17 from "./assets/fotopotrait17.jpg";
import fotoPotrait18 from "./assets/fotopotrait18.jpg";
import fotoPotrait19 from "./assets/fotopotrait19.JPEG";
import fotoPotrait20 from "./assets/fotopotrait20.JPEG";

const allImages = [
  fotoPotrait1,
  fotoPotrait10,
  fotoPotrait2,
  fotoPotrait3,
  fotoPotrait4,
  fotoPotrait5,
  fotoPotrait6,
  fotoPotrait7,
  fotoPotrait8,
  fotoPotrait9,
  fotoPotrait12,
  fotoPotrait13,
  fotoPotrait14,
  fotoPotrait15,
  fotoPotrait16,
  fotoPotrait17,
  fotoPotrait18,
  fotoPotrait19,
  fotoPotrait20,
];

function PotraitOfUseComponent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="background_potrait">
      <motion.h1
        className="txt_potrait"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Portraits of Us
      </motion.h1>
      <Carousel autoPlay interval="3000" transitionTime="1000" infiniteLoop>
        <div onClick={() => openLightbox(0)}>
          <img src={fotoPotrait1} alt="" />
        </div>
        <div onClick={() => openLightbox(1)}>
          <img className="fotodiazwulan" src={fotoPotrait10} alt="" />
        </div>
        <div onClick={() => openLightbox(13)}>
          <img src={fotoPotrait15} alt="" />
        </div>
        <div onClick={() => openLightbox(2)}>
          <img src={fotoPotrait2} alt="" />
        </div>
        <div onClick={() => openLightbox(3)}>
          <img src={fotoPotrait3} alt="" />
        </div>
        <div onClick={() => openLightbox(16)}>
          <img src={fotoPotrait18} alt="" />
        </div>
        <div onClick={() => openLightbox(4)}>
          <img src={fotoPotrait4} alt="" />
        </div>
        <div onClick={() => openLightbox(5)}>
          <img src={fotoPotrait5} alt="" />
        </div>
        <div onClick={() => openLightbox(18)}>
          <img src={fotoPotrait20} alt="" />
        </div>
        <div onClick={() => openLightbox(6)}>
          <img src={fotoPotrait6} alt="" />
        </div>
        <div onClick={() => openLightbox(7)}>
          <img src={fotoPotrait7} alt="" />
        </div>
        <div onClick={() => openLightbox(15)}>
          <img src={fotoPotrait17} alt="" />
        </div>
        <div onClick={() => openLightbox(8)}>
          <img src={fotoPotrait8} alt="" />
        </div>
        <div onClick={() => openLightbox(9)}>
          <img src={fotoPotrait9} alt="" />
        </div>
        {/* <div onClick={() => openLightbox(17)}>
          <img src={fotoPotrait19} alt="" />
        </div>
        <div onClick={() => openLightbox(10)}>
          <img src={fotoPotrait12} alt="" />
        </div>
        <div onClick={() => openLightbox(11)}>
          <img src={fotoPotrait13} alt="" />
        </div>
        <div onClick={() => openLightbox(12)}>
          <img src={fotoPotrait14} alt="" />
        </div>

        <div onClick={() => openLightbox(14)}>
          <img src={fotoPotrait16} alt="" />
        </div> */}
      </Carousel>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <CustomLightbox
          open={true}
          images={allImages} // only single image, as per your request
          index={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default PotraitOfUseComponent;
