import "./style.css";
import "animate.css";
import React from "react";
import { motion } from "framer-motion";

import frameBelakang from "./assets/page_third/frame_belakang.png";
import frameLingkaran from "./assets/page_third/frame_lingkaran.png";
import cppPhoto from "./assets/page_third/diaz.png";
import wayang from "./assets/page_third/wayang.png";
import instagramLogo from "./assets/page_third/instagram_logo.png";
import cpwPhoto from "./assets/page_third/wulan.png";

class GroomBridesComponent extends React.Component {
  render() {
    return (
      <div className="background_third">
        <motion.h1
          className="txt_wedding_of"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Wedding Of
        </motion.h1>

        {/* Groom Section */}
        <div className="background_cpp">
          <motion.img
            className="image_bg_lingkaran"
            src={frameBelakang}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            className="cpp_photo"
            src={cppPhoto}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <img className="image_frame_lingkaran" src={frameLingkaran} />

          <div className="wayang">
            <motion.img
              src={wayang}
              className="wayang_left"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src={wayang}
              className="wayang_right"
              animate={{ rotate: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 20 }}
        >
          Diaz Raviv Nur
        </motion.h1>
        <p className="title_name">
          A son raised with love by <br /> M. Nur Azirana & Destie Surya Wijaya
        </p>
        <div className="instagram">
          <img src={instagramLogo} className="instagram_logo" />
          <h3>@diazraviv</h3>
        </div>

        {/* Bride Section */}
        <div className="background_cpw">
          <motion.img
            className="image_bg_lingkaran"
            src={frameBelakang}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            className="cpp_photo"
            src={cpwPhoto}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <img className="image_frame_lingkaran" src={frameLingkaran} />

          <div className="wayang">
            <motion.img
              src={wayang}
              className="wayang_left"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src={wayang}
              className="wayang_right"
              animate={{ rotate: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Wulan Asri Septia
        </motion.h1>
        <p className="title_name">
          The joy and grace of her family, daughter of <br />
          Dharma Bakti Agustin S. & Agus Sri Rahayu
        </p>
        <div className="instagram">
          <img src={instagramLogo} className="instagram_logo" />
          <h3>@wulanasrr</h3>
        </div>
      </div>
    );
  }
}

export default GroomBridesComponent;
