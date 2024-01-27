import React from "react";
import "./About.scss";
import aboutImg from "../../Assets/about.webp";
import { motion } from "framer-motion";
import { Socials } from "../../Components"

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
          <Socials socials_class="app__about__social"/>
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
