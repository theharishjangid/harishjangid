import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { MdSettingsSuggest } from "react-icons/md";
import { SkillCard } from "../../Components";
import { SkillsData, SkillCategories } from "../../data/skills";

const Skills = () => {
  const [skill_data, setSkill_data] = useState(SkillsData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleLeftSlide = () => {
    const skills_slider = document.getElementById("skills-scrollbar");
    const width = skills_slider.clientWidth;
    skills_slider.scrollLeft = skills_slider.scrollLeft - (width - 50);
  };

  const handleRightSlide = () => {
    const skills_slider = document.getElementById("skills-scrollbar");
    const width = skills_slider.clientWidth;
    skills_slider.scrollLeft = skills_slider.scrollLeft + (width - 50);
  };

  const handleSkillFilter = (item) => {
    if (activeFilter !== item) {
      const skills_slider = document.getElementById("skills-scrollbar");
      skills_slider.scrollLeft = 0;
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0 }]);

      setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);

        if (item === "All") {
          setSkill_data(SkillsData);
        } else {
          setSkill_data(
            SkillsData.filter((skill) => skill.category.includes(item))
          );
        }
      }, 500);
    }
  };

  return (
    <div className="app__skills_container" id="skills">
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>
          <MdSettingsSuggest />
          Technical Proficiency
        </h2>
      </motion.div>
      <div className="app__skill-filter">
        {SkillCategories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSkillFilter(item)}
            className={`app__skill-filter-item app__flex ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__skill_data-wrapper">
        <RxDoubleArrowLeft
          onClick={handleLeftSlide}
          className="app__skill_data-scroll"
        />
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__skill_data"
          id="skills-scrollbar"
        >
          {skill_data.map((skill, index) => (
            <SkillCard index={index} skill_data={skill} />
          ))}
        </motion.div>
        <RxDoubleArrowRight
          onClick={handleRightSlide}
          className="app__skill_data-scroll"
        />
      </div>
    </div>
  );
};

export default Skills;
