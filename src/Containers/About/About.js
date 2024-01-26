import React from "react";
import "./About.scss";
import aboutImg from "../../Assets/about.webp";
import { motion } from "framer-motion";
import {
  SiLinkedin,
  SiStackoverflow,
  SiGithub,
  SiTwitter,
} from "react-icons/si";

const About = () => {
  return (
    <div className="app__about_container" id="about">
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Coding Adventures In Tech Space</h2>
      </motion.div>
      <div className="app__about__section">
        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="app__about__image"
        >
          <img src={aboutImg} alt="about" />
          <div className="app__about__social">
            <a href="https://www.linkedin.com/in/harish-jangid-bb54aa184/" target="_blank" rel="noreferrer"><SiLinkedin /></a>
            <a href="https://twitter.com/theharishjangid" target="_blank" rel="noreferrer"><SiTwitter /></a>
            <a href="https://stackoverflow.com/users/18743625/harish-jangid" target="_blank" rel="noreferrer"><SiStackoverflow /></a>
            <a href="https://github.com/theharishjangid" target="_blank" rel="noreferrer"><SiGithub /></a>
          </div>
        </motion.div>
        <div className="app__about__info">
          <h4>
            Welcome to my digital hub! I'm <span>Harish Jangid</span>, a
            passionate software developer based in Bangalore, India.
          </h4>
          <p>
            My journey in programming is fueled by a love for problem-solving
            and a relentless pursuit of knowledge. Specializing predominantly in
            robust and scalable backend solutions, I also delve into frontend
            development, infusing creativity into functionality.
          </p>
          <p>
            Beyond coding, my quest for improvement and innovation aligns with
            the ever-evolving landscape of software development. Excited about
            the endless possibilities that technology brings, I'm here to craft
            digital solutions and make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
