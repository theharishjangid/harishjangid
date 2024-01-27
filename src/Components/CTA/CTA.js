import React from "react";
import "./CTA.scss";
import { FiDownload } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";


const CTA = (props) => {
  return (
    <div className="cta__container">
      <a href='Harish Jangid CV.pdf' download="Harish Jangid CV.pdf" className="cta__primary">
        <p>Download CV</p>
        <FiDownload />
      </a>
      <a href="#contact" className="cta__secondary">
        <p>Get In Touch</p>
        <BiMessageDetail />
      </a>
    </div>
  );
};

export default CTA;
