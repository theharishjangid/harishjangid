import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/logo.svg";
import LightLogo from "../../Assets/light_logo.svg";
import {
  SiLinkedin,
  SiStackoverflow,
  SiGithub,
  SiTwitter,
} from "react-icons/si";

const Footer = (props) => {
  return (
    <div className="app__footer_container">
      <div className="app__footer-line" />
      <div className="app__footer-content">
        {props.mode === "dark" ? (
          <img src={Logo} alt="footer_logo" />
        ) : (
          <img src={LightLogo} alt="footer_light_logo" />
        )}
        <div>
          <p>Ⓒ 2024 Harish Jangid. All Rights Reserved.</p>
          <ul>
            {["home", "about", "experience", "skills", "contact"].map((item) => (
              <li key={`nav-link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="app__footer-social">
        <SiLinkedin />
        <SiTwitter />
        <SiStackoverflow />
        <SiGithub />
      </div>
    </div>
  );
};

export default Footer;
