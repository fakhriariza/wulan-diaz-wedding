import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const MotionImage = ({
  src,
  className,
  alt = "",
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
      switch (animationType) {
        case "sway":
          controls.start({
            rotate: [0, 2, 0, -2, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
            },
          });
          break;

        case "bounce":
          controls.start({
            y: [0, -5, 0, 5, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
            },
          });
          break;

        case "fly":
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
          break;

        case "zoom":
          controls.start({
            scale: [1, 1.1, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          });
          break;

        default:
          break;
      }
    }
  }, [isInView, animationType, controls]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial={initial}
      whileInView={whileInView}
      animate={controls}
      transition={transition}
    />
  );
};

export default MotionImage;
