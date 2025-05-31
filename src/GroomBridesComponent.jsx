import "./style.css";
import "animate.css";
import React from "react";

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
        <h1 className="txt_wedding_of">The Wedding Of</h1>
        <div className="background_cpp">
          <img className="image_bg_lingkaran" src={frameBelakang}></img>
          <img className="cpp_photo" src={cppPhoto}></img>
          <img className="image_frame_lingkaran" src={frameLingkaran}></img>
          <div className="wayang">
            <img src={wayang} className="wayang_left"></img>
            <img src={wayang} className="wayang_right"></img>
          </div>
        </div>
        <h1 className="name">Diaz Raviv Nur</h1>
        <p className="title_name">
          A son raised with love by <br></br> M. Nur Azirana & Destie Surya
          Wijaya
        </p>
        <div className="instagram">
          <img src={instagramLogo} className="instagram_logo"></img>
          <h3>@diazraviv</h3>
        </div>

        <div className="background_cpw">
          <img className="image_bg_lingkaran" src={frameBelakang}></img>
          <img className="cpp_photo" src={cpwPhoto}></img>
          <img className="image_frame_lingkaran" src={frameLingkaran}></img>
          <div className="wayang">
            <img src={wayang} className="wayang_left"></img>
            <img src={wayang} className="wayang_right"></img>
          </div>
        </div>
        <h1 className="name">Wulan Asri Septia</h1>
        <p className="title_name">
          The joy and grace of her family, daughter of <br></br> Dharma Bakti
          Agustin S. & Agus Sri Rahayu
        </p>
        <div className="instagram">
          <img src={instagramLogo} className="instagram_logo"></img>
          <h3>@wulanasrr</h3>
        </div>
      </div>
    );
  }
}

export default GroomBridesComponent;
