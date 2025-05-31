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

class ResepsiAkadComponent extends React.Component {
  render() {
    return (
      <div className="background_fifth">
        <div className="akad_frame">
          <img className="gate_time" src={gate}></img>
          <img className="left_time" src={left}></img>
          <img className="right_time" src={right}></img>
          <div className="data_time">
            <img className="logo_time" src={ring}></img>
            <h1 className="time_title">Akad Nikah</h1>
            <h3 className="time_time">16.00 - 18.00</h3>
            <h2 className="place_time">HNI PLAZA</h2>
            <h2 className="address_time">
              Jl. Raya Kalimalang, RT.3/RW.10, <br></br>
              Pondok. Kelapa, Duren Sawit <br></br>
              Jakarta Timur, DKI Jakarta 13450
            </h2>
          </div>
        </div>

        <div className="resepsi_frame">
          <img className="gate_time" src={gate}></img>
          <img className="left_time" src={left}></img>
          <img className="right_time" src={right}></img>
          <div className="data_time">
            <img className="logo_time" src={glass}></img>
            <h1 className="time_title">Resepsi</h1>
            <h3 className="time_time">19.00 - 21.00</h3>
            <h2 className="place_time">HNI PLAZA</h2>
            <h2 className="address_time">
              Jl. Raya Kalimalang, RT.3/RW.10, <br></br>
              Pondok. Kelapa, Duren Sawit <br></br>
              Jakarta Timur, DKI Jakarta 13450
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ResepsiAkadComponent;
