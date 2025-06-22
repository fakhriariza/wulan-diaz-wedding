import React from "react";
import "./style.css";

const WeddingFooter = () => {
  return (
    <footer className="wedding-footer">
      <div className="section_footer">
        <h6 className="footer_h6">Designed by our lovely bride</h6>
        <h6>
          <a
            className="footer_h6"
            href="https://www.instagram.com/wulanasrr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @wulanasrr
          </a>
        </h6>
      </div>

      <div className="section_footer">
        <h6 className="footer_h6">Developed by</h6>
        <h6 className="footer_h6">
          <a
            className="footer_h6"
            href="https://www.instagram.com/diazraviv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @diazraviv
          </a>{" "}
          and{" "}
          <a
            className="footer_h6"
            href="https://www.instagram.com/fakhriariza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fakhriariza
          </a>
        </h6>
      </div>

      <div className="section_footer">
        <h6 className="footer_h5">Presented by</h6>
        <h6 className="footer_h5">
          <a
            className="footer_h5"
            href="https://www.instagram.com/doa.creative/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @doa.creative
          </a>{" "}
          | Blending celebration and technology
        </h6>
      </div>
    </footer>
  );
};

export default WeddingFooter;
