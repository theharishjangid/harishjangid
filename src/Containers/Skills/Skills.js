import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import PythonLogo from "../../Assets/skills/python.png";
import JavascriptLogo from "../../Assets/skills/javascript.png";
import CLogo from "../../Assets/skills/c.png";
import HTMLLogo from "../../Assets/skills/html.png";
import CSSLogo from "../../Assets/skills/css.png";
import ReactLogo from "../../Assets/skills/react.png";
import DjangoLogo from "../../Assets/skills/django.png";
import PostgresLogo from "../../Assets/skills/postgres.png";
import RedisLogo from "../../Assets/skills/redis.png";
import Neo4jLogo from "../../Assets/skills/neo4j.png";
import MongodbLogo from "../../Assets/skills/mongodb.png";
import MysqlLogo from "../../Assets/skills/mysql.png";
import ESLogo from "../../Assets/skills/elastic.png";
import DatadogLogo from "../../Assets/skills/datadog.png";
import GitLogo from "../../Assets/skills/git.png";
import GithubLogo from "../../Assets/skills/github.png";
import AWSLogo from "../../Assets/skills/aws.png";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const skills_list = [
  {
    name: "Python",
    logo: PythonLogo,
    tag: "Programming Languages",
  },
  {
    name: "Javascript",
    logo: JavascriptLogo,
    tag: "Programming Languages",
  },
  {
    name: "C",
    logo: CLogo,
    tag: "Programming Languages",
  },
  {
    name: "HTML",
    logo: HTMLLogo,
    tag: "Programming Languages",
  },
  {
    name: "CSS",
    logo: CSSLogo,
    tag: "Programming Languages",
  },
  {
    name: "Django",
    logo: DjangoLogo,
    tag: "Frameworks",
  },
  {
    name: "React",
    logo: ReactLogo,
    tag: "Frameworks",
  },
  {
    name: "Postgres",
    logo: PostgresLogo,
    tag: "Data Stores",
  },
  {
    name: "Redis",
    logo: RedisLogo,
    tag: "Data Stores",
  },
  {
    name: "Neo4j",
    logo: Neo4jLogo,
    tag: "Data Stores",
  },
  {
    name: "MongoDB",
    logo: MongodbLogo,
    tag: "Data Stores",
  },
  {
    name: "MySQL",
    logo: MysqlLogo,
    tag: "Data Stores",
  },
  {
    name: "Elasticsearch",
    logo: ESLogo,
    tag: "Data Stores",
  },
  {
    name: "Git",
    logo: GitLogo,
    tag: "Others",
  },
  {
    name: "Github",
    logo: GithubLogo,
    tag: "Others",
  },
  {
    name: "Datadog",
    logo: DatadogLogo,
    tag: "Others",
  },
  {
    name: "AWS",
    logo: AWSLogo,
    tag: "Others",
  },
];

const Skills = () => {
  const [skill_data, setSkill_data] = useState(skills_list);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleLeftSlide = () => {
    const skills_slider = document.getElementById("skills-scrollbar");
    const width = skills_slider.clientWidth;
    skills_slider.scrollLeft = skills_slider.scrollLeft - (width - 100);
  };

  const handleRightSlide = () => {
    const skills_slider = document.getElementById("skills-scrollbar");
    const width = skills_slider.clientWidth;
    skills_slider.scrollLeft = skills_slider.scrollLeft + (width - 100);
  };

  const handleSkillFilter = (item) => {
    if (activeFilter !== item) {
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0 }]);

      setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);

        if (item === "All") {
          setSkill_data(skills_list);
        } else {
          setSkill_data(
            skills_list.filter((skill) => skill.tag.includes(item))
          );
        }
      }, 500);
    }
  };

  return (
    <div id="skills" className="app__skills_container">
      <h2>Technical Proficiency</h2>

      <div className="app__skill-filter">
        {[
          "All",
          "Programming Languages",
          "Frameworks",
          "Data Stores",
          "Others",
        ].map((item, index) => (
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
            <div className="app__skill_data-item app__flex" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
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
