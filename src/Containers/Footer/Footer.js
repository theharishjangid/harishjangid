import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/logo.svg";
import LightLogo from "../../Assets/light_logo.svg";
import { Socials } from "../../Components";

const Footer = (props) => {
  const currentYear = new Date().getFullYear().toString();
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
          <p>Ⓒ {currentYear} Harish Jangid. All Rights Reserved.</p>
          <ul>
            {["home", "about", "experience", "skills", "contact"].map((item) => (
              <li key={`nav-link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Socials socials_class="app__footer-social"/>
    </div>
  );
};

export default Footer;
