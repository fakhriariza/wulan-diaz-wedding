// src/components/CustomLightbox.jsx
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CustomLightbox = ({ open, onClose, images, index = 0 }) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images.map((src) => ({ src }))}
      controller={{ closeOnBackdropClick: true }}
      styles={{
        container: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    />
  );
};

export default CustomLightbox;
