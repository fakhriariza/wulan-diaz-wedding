import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./style.css";

const QrComponent = ({ invitationId }) => {
  const [qrDataUrl, setQrDataUrl] = useState(null);

  useEffect(() => {
    if (invitationId) {
      QRCode.toDataURL(invitationId, { width: 200, margin: 2 })
        .then((url) => {
          setQrDataUrl(url);
        })
        .catch((err) => {
          console.error("Error generating QR Code:", err);
        });
    }
  }, [invitationId]);

  const downloadQR = () => {
    if (!qrDataUrl) return;

    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `qr_invitation_${invitationId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!invitationId) return null;

  return (
    <div className="background_qr animate__animated animate__fadeIn">
      <h1 className="title_qr">Digital Appointment QR Code</h1>

      {qrDataUrl && <img src={qrDataUrl} alt="QR Code" className="qr_code" />}

      <p className="desc_qr">
        This QR Code is your personal invitation. Please have it ready to show
        at the entrance upon arrival.
      </p>

      <button onClick={downloadQR} className="download_button">
        Download QR Code
      </button>
    </div>
  );
};

export default QrComponent;
