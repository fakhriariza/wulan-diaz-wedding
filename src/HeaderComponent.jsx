import "./style.css";
import "animate.css";
import React from "react";
import gate from "./assets/gate_wd.png";
import montain from "./assets/mountain_wd.png";
import janur from "./assets/janur.png";
import bunga1 from "./assets/bunga_left.png";
import bunga2 from "./assets/pohon_left.png";
import bunga3 from "./assets/tanaman_left_bunga.png";
import bunga4 from "./assets/tanaman_left.png";

import bungapink_kanan from "./assets/bungapink_kanan.png";
import bungabawah_kanan from "./assets/bungabawah_kanan.png";
import tanaman_kanan from "./assets/tanaman_kanan.png";
import pohonijo_kanan from "./assets/pohonijo_kanan.png";
import padikapas_kanan from "./assets/padikapas_kanan.png";

import merak from "./assets/merak.png";
import kupu1 from "./assets/kupu1.png";
import kupu2 from "./assets/kupu2.png";

class HeaderComponent extends React.Component {
  getNameFromURL() {
    const path = window.location.pathname;
    const nameFromPath = path.slice(1); // Removes the leading '/'
    return decodeURIComponent(nameFromPath.replace(/\+/g, " "));
  }

  render() {
    const name = this.getNameFromURL();

    return (
      <div className="app-container">
        <div className="top-background animate__animated animate__fadeInDown animate__slower" />

        <img src={gate} className="img_gate"></img>
        <img src={montain} className="img_mountain"></img>
        <img src={janur} className="img_janur"></img>

        <div className="bunga_kiri">
          <img src={bunga1} className="img_bunga1"></img>
          <img src={bunga2} className="img_bunga2"></img>
          <img src={bunga3} className="img_bunga3"></img>
          <img src={bunga4} className="img_bunga4"></img>
        </div>

        <div className="bunga_kanan">
          <img src={bungapink_kanan} className="img_bungapink_kanan"></img>
          <img src={pohonijo_kanan} className="img_pohonijo_kanan"></img>
          <img src={padikapas_kanan} className="img_padikapas_kanan"></img>
          <img src={tanaman_kanan} className="img_tanaman_kanan"></img>
          <img src={bungabawah_kanan} className="img_bungabawah_kanan"></img>
        </div>

        <div className="binatang">
          <img src={merak} className="img_merak"></img>
          <img src={kupu1} className="img_kupu1"></img>
          <img src={kupu2} className="img_kupu2"></img>
        </div>

        <h1 className="title">
          Wulan <br></br> & <br></br> Diaz
        </h1>

        <div className="bottom-background animate__animated animate__fadeInUp animate__slower" />
      </div>
    );
  }
}

export default HeaderComponent;
