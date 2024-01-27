import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../Assets/logo.svg";
import LightLogo from "../../Assets/light_logo.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Socials } from "../../Components";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {props.mode === "light" ? (
          <img src={Logo} alt="logo" />
        ) : (
          <img src={LightLogo} alt="light_logo" />
        )}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "experience", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`footer-link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      {props.mode === "dark" ? (
        <BsMoonStars
          className="app__navbar-dark_mode_toggle"
          onClick={() => props.setMode("light")}
        />
      ) : (
        <BsMoonStarsFill
          className="app__navbar-dark_mode_toggle"
          onClick={() => props.setMode("dark")}
        />
      )}

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="app__navbar-menu-div"
          >
            <HiX onClick={() => setToggle(false)} />
            {props.mode === "dark" ? (
              <BsMoonStars
                className="app__navbar-menu-dark_mode_toggle"
                onClick={() => props.setMode("light")}
              />
            ) : (
              <BsMoonStarsFill
                className="app__navbar-menu-dark_mode_toggle"
                onClick={() => props.setMode("dark")}
              />
            )}
            <ul>
              {["home", "about", "experience", "skills", "contact"].map(
                (item) => (
                  <li key={`menu-link-${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <Socials socials_class="app__navbar-menu-socials"/>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
