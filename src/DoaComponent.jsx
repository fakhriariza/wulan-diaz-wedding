import "./style.css";
import "animate.css";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// Assets
import wayangtengah from "./assets/page_second/wayangtengah.png";
import gapura from "./assets/page_second/gapura.png";
import bungabawahkiri from "./assets/page_second/bungabawahkiri.png";
import tanamankiri from "./assets/page_second/tanamankiri.png";
import wayangkiri from "./assets/page_second/wayangkiri.png";
import bungabawahkanan from "./assets/page_second/bungabawahkanan.png";
import tanamankanan from "./assets/page_second/tanamankanan.png";
import wayangkanan from "./assets/page_second/wayangkanan.png";
import burung from "./assets/page_second/burung.png";

// Reusable motion image
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

class DoaComponent extends React.Component {
  render() {
    return (
      <div className="background_sec">
        <div className="second_page">
          {/* Burung */}
          <MotionImage
            src={burung}
            className="burung"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animationType="fly"
            transition={{ duration: 1.2 }}
          />

          {/* Wayang tengah dan gapura */}
          <motion.div
            className="center_second_page"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionImage
              src={wayangtengah}
              className="wayang_background"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.1 }}
              transition={{ duration: 1 }}
            />
            <MotionImage
              src={gapura}
              className="gapura_background"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h1
              className="doa"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              “And among Allah signs is that Allah created for you from
              yourselves spouses that you may find tranquility in them; and
              Allah placed between you affection and mercy. Indeed, in that are
              signs for a people who give thought.”
              <br />
              <br />
              (QS, Ar-Rum: 21)
            </motion.h1>
          </motion.div>

          {/* Kiri */}
          <MotionImage
            src={tanamankiri}
            className="tanaman_kiri"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: -50, opacity: 1 }}
            animationType="sway"
            transition={{ duration: 1 }}
          />
          <MotionImage
            src={wayangkiri}
            className="wayang_kiri"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: -50, opacity: 1 }}
            animationType="sway"
            transition={{ duration: 1 }}
          />
          <MotionImage
            src={bungabawahkiri}
            className="bungabawah_kiri"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: -100, opacity: 1 }}
            animationType="bounce"
            transition={{ duration: 1 }}
          />

          {/* Kanan */}
          <MotionImage
            src={tanamankanan}
            className="tanaman_kanan"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            animationType="sway"
            transition={{ duration: 1 }}
          />
          <MotionImage
            src={wayangkanan}
            className="wayang_kanan"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            animationType="sway"
            transition={{ duration: 1 }}
          />
          <MotionImage
            src={bungabawahkanan}
            className="bungabawah_kanan"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 100, opacity: 1 }}
            animationType="bounce"
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    );
  }
}
export default DoaComponent;
