import "./style.css";
import "animate.css";
import React from "react";

import wayangtengah from "./assets/page_second/wayangtengah.png";
import gapura from "./assets/page_second/gapura.png";
import bungabawahkiri from "./assets/page_second/bungabawahkiri.png";
import tanamankiri from "./assets/page_second/tanamankiri.png";
import wayangkiri from "./assets/page_second/wayangkiri.png";
import bungabawahkanan from "./assets/page_second/bungabawahkanan.png";
import tanamankanan from "./assets/page_second/tanamankanan.png";
import wayangkanan from "./assets/page_second/wayangkanan.png";
import burung from "./assets/page_second/burung.png";

class DoaComponent extends React.Component {
  render() {
    return (
      <div className="background_sec">
        <div className="second_page">
          <img src={burung} className="burung"></img>
          <div className="center_second_page">
            <img src={wayangtengah} className="wayang_background"></img>
            <img src={gapura} className="gapura_background"></img>
            <h1 className="doa">
              “And among His signs is that He created for you from yourselves
              spouses that you may find tranquility in them; and He placed
              between you affection and mercy. Indeed, in that are signs for a
              people who give thought.”
              <br></br>
              <br></br>
              (QS, Ar-Rum: 21)
            </h1>
          </div>
          <div className="left_side">
            <img src={tanamankiri} className="tanaman_kiri"></img>
            <img src={wayangkiri} className="wayang_kiri"></img>
            <img src={bungabawahkiri} className="bungabawah_kiri"></img>
          </div>

          <div className="right_side">
            <img src={tanamankanan} className="tanaman_kanan"></img>
            <img src={wayangkanan} className="wayang_kanan"></img>
            <img src={bungabawahkanan} className="bungabawah_kanan"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default DoaComponent;
