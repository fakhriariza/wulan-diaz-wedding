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
import logo from "./assets/Wulan_&_Diaz_logo.png";
import wulandiazopened from "./assets/wulandiazopenedimage.png";

class HeaderComponent extends React.Component {
  render() {
    const { guestData, onOpen, isOpened } = this.props;
    const guestName = guestData?.guest_name || null;
    const isWithPartner = guestData?.partner;

    return (
      <div className="app-container">
        <div className="top-background animate__animated animate__fadeInDown animate__slower" />

        {/* images */}
        <img src={gate} className="img_gate" />
        <img src={montain} className="img_mountain" />
        <img src={janur} className="img_janur" />
        <img src={logo} className="img_logo" />
        {/* left flowers */}
        <div className="bunga_kiri">
          <img src={bunga1} className="img_bunga1" />
          <img src={bunga2} className="img_bunga2" />
          <img src={bunga3} className="img_bunga3" />
          <img src={bunga4} className="img_bunga4" />
        </div>
        {/* right flowers */}
        <div className="bunga_kanan">
          <img src={bungapink_kanan} className="img_bungapink_kanan" />
          <img src={pohonijo_kanan} className="img_pohonijo_kanan" />
          <img src={padikapas_kanan} className="img_padikapas_kanan" />
          <img src={tanaman_kanan} className="img_tanaman_kanan" />
          <img src={bungabawah_kanan} className="img_bungabawah_kanan" />
        </div>
        {/* animals */}
        <div className="binatang">
          <img src={merak} className="img_merak" />
          <img src={kupu1} className="img_kupu1" />
          <img src={kupu2} className="img_kupu2" />
        </div>

        {!isOpened ? (
          <h1 className="title">
            Wulan <br /> & <br /> Diaz
          </h1>
        ) : (
          <>
            <h1 className="title-theweddingof-opened">The Wedding of</h1>
            <h1 className="title-opened">Wulan & Diaz</h1>
          </>
        )}

        {guestName && (
          <p className="guest-name animate__animated animate__fadeInUp animate__delay-2s">
            Kepada Yth: {guestName} {isWithPartner ? "dan Partner" : ""}
          </p>
        )}

        {!isOpened && (
          <button
            className="open-invite-btn animate__animated animate__fadeInUp animate__delay-3s"
            onClick={() => onOpen?.()}
          >
            Open Invitation
          </button>
        )}

        {isOpened && <img src={wulandiazopened} className="img_opened" />}
        <div className="bottom-background animate__animated animate__fadeInUp animate__slower" />
      </div>
    );
  }
}

export default HeaderComponent;
