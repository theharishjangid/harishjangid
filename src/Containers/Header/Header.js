import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { CTA } from "../../Components";
import Profile from "../../Assets/profile.png";
import ProfileBG from "../../Assets/profile_bg.svg";

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <h3>
          👋🏻 Hello, <span>I'm</span>
        </h3>
        <h1>Harish Jangid</h1>
        <p className="p_header">Crafting innovative solutions through elegant code</p>
        <CTA className="header__cta" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={Profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          src={ProfileBG}
          alt="profile_bg"
          className="overlay_bg"
        />
      </motion.div>
    </div>
  );
};

export default Header;
