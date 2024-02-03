import React from "react";
import {
    SiLinkedin,
    SiStackoverflow,
    SiGithub,
    SiTwitter,
  } from "react-icons/si";

const Socials = (pros) => {
  return (
    <div className={pros.socials_class}>
      <a
        href="https://www.linkedin.com/in/theharishjangid"
        aria-label="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
      <a
        href="https://twitter.com/theharishjangid"
        aria-label="Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <SiTwitter />
      </a>
      <a
        href="https://stackoverflow.com/users/18743625/harish-jangid"
        aria-label="Stackoverflow"
        target="_blank"
        rel="noreferrer"
      >
        <SiStackoverflow />
      </a>
      <a
        href="https://github.com/theharishjangid"
        aria-label="Github"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub />
      </a>
    </div>
  );
};

export default Socials;
