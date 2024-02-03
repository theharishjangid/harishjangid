import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import { BiSolidTagAlt } from "react-icons/bi";

const SkillCard = (props) => {
  const skill_data = props.skill_data;
  return (
    <div id={`skill-${props.index}`} className="skill_card__container">
      <div className="skill_card__head">
        <img src={skill_data.logo} alt={skill_data.name} />
        <h3>{skill_data.name}</h3>
      </div>
      <div className="skill_card__body">
        <h4>
          <BiSolidTagAlt /> {skill_data.category}
        </h4>
        <div className="skill_card__text">
          <p>{skill_data.about}</p>
          <motion.div
            whileInView={{ width: ["0%", "100%"] }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delayChildren: 0.5,
            }}
            className="skill_card__bar"
          >
            <motion.span
              whileInView={{ width: ["0%", `${skill_data.percentage}%`] }}
              transition={{ ease: "easeInOut", duration: 1 }}
            ></motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
