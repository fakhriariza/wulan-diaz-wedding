import "./style.css";
import "animate.css";
import React from "react";
import { motion } from "framer-motion";
import MotionImage from "./MotionImage";

// Image assets
import frame_bg from "./assets/page_fourth/frame_time.png";
import bg_time from "./assets/page_fourth/bg_time.png";

class TimeDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownText: "",
    };
  }

  componentDidMount() {
    this.updateCountdown(); // run initially
    this.interval = setInterval(this.updateCountdown, 1000); // update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // clean up
  }

  updateCountdown = () => {
    const targetDate = new Date("2025-07-05T15:30:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      this.setState({ countdownText: "It's time!" });
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    this.setState({
      countdownText: `${days} Days ${hours} Hrs ${mins} Mins ${secs} Sec To Go`,
    });
  };

  render() {
    return (
      <div className="background_fourth">
        <motion.p
          className="desc_text_time"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          With joy and gratitude in our hearts, we invite you to{" "}
        </motion.p>

        <motion.h1
          className="txt_title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          The Moment We've Dreamed Of
        </motion.h1>

        <motion.div
          className="background_time"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MotionImage
            className="image_bg_time"
            src={frame_bg}
            animationType="bounce"
          />

          <motion.h3
            className="time"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Saturday <br /> 5 July <br /> 2025
          </motion.h3>

          <motion.img
            className="image_frame_time"
            src={bg_time}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>

        <motion.h3
          className="count"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Countdowns
        </motion.h3>

        <motion.p
          className="count_time"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {this.state.countdownText}
        </motion.p>
      </div>
    );
  }
}

export default TimeDataComponent;
