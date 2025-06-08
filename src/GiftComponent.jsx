import "./style.css";
import "animate.css";
import React from "react";

import bca from "./assets//bca.png";
import mandiri from "./assets//mandiri.png";
import bungaGift from "./assets//bungagift.png";

class GiftComponent extends React.Component {
  render() {
    return (
      <div className="background_gift">
        <img className="bunga_gift" src={bungaGift}></img>
        <h1 className="title_gift">Wedding Gift</h1>
        <p className="desc_gift">
          Your blessing and coming to our wedding are enough for us. However, if
          you want to give a gift we provide a Digital Envelope to make it
          easier for you - thank you!
        </p>
        <div className="bank_first">
          <img className="logo" src={bca}></img>
          <p className="bank_text">
            BANK BCA (014)<br></br>Account Number 6043278652<br></br>Account
            Name Wulan Asri Septia
          </p>
          <h4 className="button_copy">Copy Number</h4>
        </div>
        <div className="bank_second">
          <img className="logo" src={mandiri}></img>
          <p className="bank_text">
            BANK BRI (008) <br></br>
            Account Number 1670002685823 <br></br>
            Account Name Diaz Raviv Nur
          </p>
          <h4 className="button_copy">Copy Number</h4>
        </div>
      </div>
    );
  }
}

export default GiftComponent;
