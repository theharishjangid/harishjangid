import React from "react";
import "./CTA.scss";
import { FiDownload } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";


const CTA = (props) => {
  return (
    <div className="cta__container">
      <div className="cta__primary">
        <p>Download CV</p>
        <FiDownload />
      </div>
      <a href="#contact" className="cta__secondary">
        <p>Get In Touch</p>
        <BiMessageDetail />
      </a>
    </div>
  );
};

export default CTA;
