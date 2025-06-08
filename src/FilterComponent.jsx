import "./style.css";
import "animate.css";
import React from "react";

import filter from "./assets/filter.png";
import bgfilter from "./assets/bgfilter.png";
import bungafilter from "./assets/bungafilter.png";

class FilterComponent extends React.Component {
  render() {
    return (
      <div className="background_filter">
        <img className="bgfilter" src={bgfilter}></img>
        <h1 className="title_filter">Wedding Filter</h1>
        <p className="desc_filter">
          Capture your moment while attending our wedding by using the Instagram
          filter below.
        </p>
        <img src={filter} className="img_filter"></img>
        <h4 className="filter_button">Use Filter</h4>
        <img className="bungafilter" src={bungafilter}></img>
      </div>
    );
  }
}

export default FilterComponent;
