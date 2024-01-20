import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../Assets/logo.svg";
import LightLogo from "../../Assets/light logo.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {props.mode === "light" ? (
          <img src={Logo} alt="logo"></img>
        ) : (
          <img src={LightLogo} alt="logo"></img>
        )}
      </div>
      <ul className="app__navbar-links">
        {["home", "skills", "experience", "about", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
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
              {["home", "skills", "experience", "about", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
