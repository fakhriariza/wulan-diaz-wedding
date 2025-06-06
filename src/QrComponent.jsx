import "./style.css";
import "animate.css";
import React from "react";

import qrCode from "./assets/page_fifth/qr_code.png";

class QrComponent extends React.Component {
  render() {
    return (
      <div className="background_qr">
        <h1 className="title_qr">Digital Appointment QR Code </h1>
        <img src={qrCode} className="qr_code"></img>
        <p className="desc_qr">
          This QR Code is your personal invitation. Please have it ready to show
          at the entrance upon arrival.
        </p>
      </div>
    );
  }
}

export default QrComponent;
