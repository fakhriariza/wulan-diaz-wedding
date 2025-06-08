import "./style.css";
import "animate.css";
import React from "react";
import MotionImage from "./MotionImage";
import { motion } from "framer-motion";

import filter from "./assets/filter.png";
import bgfilter from "./assets/bgfilter.png";
import bungafilter from "./assets/bungafilter.png";

class FilterComponent extends React.Component {
  handleUseFilter = () => {
    // Example action - replace with your actual link logic
    alert("Instagram filter coming soon!");
  };

  render() {
    return (
      <div className="background_filter">
        <MotionImage className="bgfilter" src={bgfilter} alt="Background" />

        <motion.h1
          className="title_filter"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Wedding Filter
        </motion.h1>

        <motion.h1
          className="desc_filter"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Capture your moment while attending our wedding by using the Instagram
          filter below.
        </motion.h1>

        <MotionImage
          className="img_filter"
          src={filter}
          alt="Instagram Filter"
          animationType="bounce"
        />

        <h4 className="filter_button" onClick={this.handleUseFilter}>
          Use Filter
        </h4>

        <MotionImage
          className="bungafilter"
          src={bungafilter}
          alt="Flower Decoration"
          animationType="sway"
        />
      </div>
    );
  }
}

export default FilterComponent;
