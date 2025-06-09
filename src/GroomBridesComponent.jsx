import "./style.css";
import "animate.css";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import frameBelakang from "./assets/page_third/frame_belakang.png";
import frameLingkaran from "./assets/page_third/frame_lingkaran.png";
import cppPhoto from "./assets/page_third/diaz.png";
import wayang from "./assets/page_third/wayang.png";
import instagramLogo from "./assets/page_third/instagram_logo.png";
import cpwPhoto from "./assets/page_third/wulan.png";
import kupuAtas from "./assets/page_third/Orn-kupu-1-3.png";
import kupuBawah from "./assets/page_third/Orn-kupu-2-3.png";

class GroomBridesComponent extends React.Component {
  render() {
    const MotionImage = ({
      src,
      className,
      initial,
      whileInView,
      animationType = null,
      transition = { duration: 1 },
    }) => {
      const ref = useRef();
      const isInView = useInView(ref, { once: true, amount: 0.3 });
      const controls = useAnimation();

      useEffect(() => {
        if (isInView && animationType) {
          if (animationType === "sway") {
            controls.start({
              rotate: [0, 2, 0, -2, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              },
            });
          } else if (animationType === "bounce") {
            controls.start({
              y: [0, -5, 0, 5, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              },
            });
          } else if (animationType === "fly") {
            controls.start({
              x: [0, 10, 0, -10, 0],
              y: [0, -5, 0, 5, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            });
          }
        }
      }, [isInView, animationType, controls]);

      return (
        <motion.img
          ref={ref}
          src={src}
          className={className}
          initial={initial}
          whileInView={whileInView}
          animate={controls}
          transition={transition}
        />
      );
    };

    return (
      <div className="background_third">
        <motion.h1
          className="txt_wedding_of"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Wedding Of
        </motion.h1>
        <motion.h2
          className="desc_grooms_brides"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          With the blessing of the almighty Allah S.W.T., it would be our utmost
          joy to have your presence bestowed upon our cherished wedding of
        </motion.h2>

        {/* Groom Section */}
        <div className="background_cpp">
          <MotionImage
            className="image_bg_lingkaran"
            src={frameBelakang}
            animationType="bounce"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <MotionImage
            className="cpp_photo"
            src={cppPhoto}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <img className="image_frame_lingkaran" src={frameLingkaran} />

          {/* Kupu-Kupu Above the Frame */}
          <MotionImage
            className="kupu_kupu_atas"
            src={kupuAtas}
            animationType="fly"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
          <MotionImage
            className="kupu_bawah"
            src={kupuBawah}
            animationType="fly"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />

          <div className="wayang">
            <MotionImage
              src={wayang}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="wayang_left"
              animationType="sway"
            />
            <MotionImage
              src={wayang}
              className="wayang_right"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              animationType="sway"
            />
          </div>
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Diaz Raviv Nur
        </motion.h1>
        <motion.h1
          className="title_name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A son raised with love by <br /> M. Nur Azirana & Destie Surya Wijaya
        </motion.h1>
        <a
          href="https://www.instagram.com/diazraviv?igsh=MWxpZnYwcHZpd2YybA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <motion.img
            src={instagramLogo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="instagram_logo"
          />
          <h3>@diazraviv</h3>
        </a>
        {/* Bride Section */}
        <div className="background_cpw">
          <MotionImage
            className="image_bg_lingkaran"
            src={frameBelakang}
            animationType="bounce"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <MotionImage
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="cpp_photo"
            src={cpwPhoto}
          />
          <img className="image_frame_lingkaran" src={frameLingkaran} />
          {/* Kupu-Kupu Above the Frame */}
          <MotionImage
            className="kupu_kupu_atas_wulan"
            src={kupuAtas}
            animationType="fly"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
          <MotionImage
            className="kupu_bawah_wulan"
            src={kupuBawah}
            animationType="fly"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />

          <div className="wayang">
            <MotionImage
              src={wayang}
              className="wayang_left"
              animationType="sway"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <MotionImage
              src={wayang}
              className="wayang_right"
              animationType="sway"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Wulan Asri Septia
        </motion.h1>
        <motion.h1
          className="title_name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The joy and grace of her family, daughter of <br />
          (Alm.) Dharma Bakti Agustin S. & Agus Sri Rahayu
        </motion.h1>
        <a
          href="https://www.instagram.com/wulanasrr?igsh=bHJmaXAwczFibWxm"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
          aria-label="Visit Instagram profile of @wulanasrr"
        >
          <img src={instagramLogo} className="instagram_logo" />
          <h3>@wulanasrr</h3>
        </a>
      </div>
    );
  }
}

export default GroomBridesComponent;
