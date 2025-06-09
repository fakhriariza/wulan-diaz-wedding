import "./style.css";
import "animate.css";
import React from "react";
import { motion } from "framer-motion";
import MotionImage from "./MotionImage"; // Ensure you import the custom motion image component

// Assets
import gate from "./assets/page_fourth/gate.png";
import left from "./assets/page_fourth/left.png";
import right from "./assets/page_fourth/right.png";
import ring from "./assets/page_fourth/ring.png";
import glass from "./assets/page_fourth/glass.png";

class ResepsiAkadComponent extends React.Component {
  render() {
    return (
      <div className="background_fifth">
        {/* Akad Nikah Section */}
        <motion.div className="akad_frame">
          <MotionImage className="gate_time" src={gate} />
          <MotionImage className="left_time" src={left} animationType="sway" />
          <MotionImage
            className="right_time"
            src={right}
            animationType="sway"
          />

          <motion.div
            className="data_time"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MotionImage className="logo_time" src={ring} animationType="fly" />
            <h1 className="time_title">Akad Nikah</h1>
            <h3 className="time_time">15.30 - 17.30</h3>
            <h2 className="place_time">HNI PLAZA</h2>
            <h2 className="address_time">
              Jl. Raya Kalimalang, RT.3/RW.10, <br />
              Pondok. Kelapa, Duren Sawit <br />
              Jakarta Timur, DKI Jakarta 13450
            </h2>
            <a
              href="https://maps.app.goo.gl/ChgqSpQ1LjgiufHn9"
              target="_blank"
              rel="noopener noreferrer"
              className="filter_button"
            >
              View Maps
            </a>
          </motion.div>
        </motion.div>

        {/* Resepsi Section */}
        <motion.div className="resepsi_frame">
          <MotionImage className="gate_time" src={gate} />
          <MotionImage className="left_time" src={left} animationType="sway" />
          <MotionImage
            className="right_time"
            src={right}
            animationType="sway"
          />

          <motion.div
            className="data_time"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MotionImage
              className="logo_time"
              src={glass}
              animationType="fly"
            />
            <h1 className="time_title">Resepsi</h1>
            <h3 className="time_time">19.00 - 21.00</h3>
            <h2 className="place_time">HNI PLAZA</h2>

            <h2 className="address_time">
              Jl. Raya Kalimalang, RT.3/RW.10, <br />
              Pondok. Kelapa, Duren Sawit <br />
              Jakarta Timur, DKI Jakarta 13450
            </h2>
            <a
              href="https://maps.app.goo.gl/ChgqSpQ1LjgiufHn9"
              target="_blank"
              rel="noopener noreferrer"
              className="filter_button"
            >
              View Maps
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default ResepsiAkadComponent;
