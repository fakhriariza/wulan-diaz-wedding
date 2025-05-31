import "./style.css";
import "animate.css";
import React from "react";

import frame_bg from "./assets/page_fourth/frame_time.png";
import bg_time from "./assets/page_fourth/bg_time.png";

import gate from "./assets/page_fourth/gate.png";
import left from "./assets/page_fourth/left.png";
import right from "./assets/page_fourth/right.png";
import ring from "./assets/page_fourth/ring.png";
import glass from "./assets/page_fourth/glass.png";

class TimeDataComponent extends React.Component {
  render() {
    return (
      <div className="background_fourth">
        <p className="desc_text_time">
          With joy and gratitude in our hearts, we invite you to{" "}
        </p>
        <h1 className="txt_title">The Moment We've Dreamed Of</h1>
        <div className="background_time">
          <img className="image_bg_time" src={frame_bg}></img>
          <h3 className="time">
            Saturday <br></br> 5 July <br></br>2025
          </h3>
          <img className="image_frame_time" src={bg_time}></img>
        </div>
        <h3 className="count">Countdowns</h3>
        <p className="count_time">53 Days 50 Mins 20 Sec To Go</p>
      </div>
    );
  }
}

export default TimeDataComponent;
