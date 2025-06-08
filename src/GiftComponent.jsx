import "./style.css";
import "animate.css";
import React from "react";
import { motion } from "framer-motion";

import bca from "./assets/bca.png";
import mandiri from "./assets/mandiri.png";
import bungaGift from "./assets/bungagift.png";
import MotionImage from "./MotionImage";

class GiftComponent extends React.Component {
  handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Account number copied!");
  };

  render() {
    return (
      <div className="background_gift">
        <MotionImage
          className="bunga_gift"
          src={bungaGift}
          animationType="sway"
          alt="Flower decoration"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ rotate: [0, 2, 0, -2, 0] }}
        />

        <motion.h1
          className="title_gift"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Wedding Gift
        </motion.h1>

        <motion.p
          className="desc_gift"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your blessing and coming to our wedding are enough for us. However, if
          you want to give a gift, we provide a Digital Envelope to make it
          easier for you – thank you!
        </motion.p>

        <motion.div
          className="bank_first"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="logo" src={bca} alt="BCA Bank logo" />
          <p className="bank_text">
            BANK BCA (014)
            <br />
            Account Number 6043278652
            <br />
            Account Name Wulan Asri Septia
          </p>
          <h4
            className="button_copy"
            onClick={() => this.handleCopy("6043278652")}
          >
            Copy Number
          </h4>
        </motion.div>

        <motion.div
          className="bank_second"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img className="logo" src={mandiri} alt="Mandiri Bank logo" />
          <p className="bank_text">
            BANK BRI (008)
            <br />
            Account Number 1670002685823
            <br />
            Account Name Diaz Raviv Nur
          </p>
          <h4
            className="button_copy"
            onClick={() => this.handleCopy("1670002685823")}
          >
            Copy Number
          </h4>
        </motion.div>
      </div>
    );
  }
}

export default GiftComponent;
