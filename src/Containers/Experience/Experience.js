import React from "react";
import "./Experience.scss";
import { motion } from "framer-motion";
import draupLogo from "../../Assets/experience/draup.png";
import zinnovLogo from "../../Assets/experience/zinnov.png";
import spyryLogo from "../../Assets/experience/spyry.png";
import pesLogo from "../../Assets/experience/pes.png";
import sjpucLogo from "../../Assets/experience/sjpuc.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    name: "Draup",
    about:
      "Draup is an enterprise decision-making platform for global CXO leaders in sales and talent domains.",
    date: "Jul, 2020 - Present",
    desc: "",
    logo: draupLogo,
    role: "Software Development Engineer II",
    promotions: [
      {
        role: "Software Development Engineer II",
        duration: "Sep, 2022 - Present",
        skills: [
          "Elasticsearch",
          "Django REST Framework",
          "REST APIs",
          "Database Management System (DBMS)",
          "Python (Programming Language)",
          "Django",
          "Programming",
          "SQL",
          "PostgreSQL",
          "Jenkins",
          "Databases",
          "OAuth",
          "Back-End Web Development",
          "Neo4j",
          "Redis",
          "Graph Databases",
          "SAML 2.0",
          "Security Assertion Markup Language (SAML)",
        ],
      },
      {
        role: "Software Development Engineer I",
        duration: "Jul, 2021 - Aug, 2022",
        skills: [
          "Elasticsearch",
          "Django REST Framework",
          "REST APIs",
          "Database Management System (DBMS)",
          "Python (Programming Language)",
          "Django",
          "Programming",
          "SQL",
          "PostgreSQL",
          "Jenkins",
          "Databases",
          "OAuth",
          "Back-End Web Development",
          "Neo4j",
          "Redis",
          "Graph Databases",
          "SAML 2.0",
          "Security Assertion Markup Language (SAML)",
        ],
      },
      {
        role: "Associate Software Engineer",
        duration: "Jul, 2020 - Jun, 2021",
        skills: [
          "Django REST Framework",
          "REST APIs",
          "Database Management System (DBMS)",
          "Python (Programming Language)",
          "Django",
          "Programming",
          "SQL",
          "PostgreSQL",
          "Jenkins",
          "Databases",
          "Back-End Web Development",
          "Neo4j",
          "Redis",
          "Graph Databases",
        ],
      },
    ],
  },
  {
    name: "Zinnov",
    about:
      "Zinnov is a global consulting firm enabling digital innovation and building future-ready engineering for enterprises",
    date: "Jan, 2020 - Jun, 2020",
    desc: "Worked as a back-end software developer with hands-on experience in building restful APIs for web application.",
    logo: zinnovLogo,
    role: "Software Developer Intern",
    skills: [
      "Django REST Framework",
      "REST APIs",
      "Database Management System (DBMS)",
      "Python (Programming Language)",
      "Django",
      "Programming",
      "SQL",
      "PostgreSQL",
      "Jenkins",
      "Databases",
      "Back-End Web Development",
      "Redis",
    ],
  },
  {
    name: "Spyry Technologies",
    about:
      "Spyry Technologies is a leading Information Security Company that specializes in Comprehensive IT Security Solutions, Products and Cyber Security Training.",
    date: "Jun, 2017 - Jul, 2017",
    desc: "",
    logo: spyryLogo,
    role: "Student Intern",
    skills: ["Programming"],
  },
  {
    name: "PES University",
    about: "",
    date: "2016 - 2020",
    desc: "",
    logo: pesLogo,
    role: "Bachelor of Technology - (EEE)",
    skills: [
      "Microsoft Office",
      "Programming",
      "Algorithms",
      "Databases",
      "Database Management System (DBMS)",
      "C (Programming Language)",
      "Data Structures",
      "SQL",
      "Python (Programming Language)",
    ],
  },
  {
    name: "St. Joseph's Pre-University College",
    about: "",
    date: "2014 - 2016",
    desc: "",
    logo: sjpucLogo,
    role: "12th Grade - (PCME)",
    skills: ["Microsoft Office"],
  },
];

const Experience = () => {
  return (
    <div className="app__experience_container" id="experience">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__experience_heading"
      >
        <h2>Professional Journey</h2>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            date={experience.date}
            icon={
              <div id={`experience-${index}`} className="app__experience_card-img">
                <img src={experience.logo} alt={experience.name} />
              </div>
            }
          >
            <div className="app__experience_card_data">
              <h3>{experience.role}</h3>
              <h4>{experience.name}</h4>
              {experience.about && <h5>{experience.about}</h5>}
              <ul>
                {experience.promotions &&
                  experience.promotions.map((promotion_data, index) => (
                    <li id={`promotion-${index}`}>
                      {promotion_data.role} : {promotion_data.duration}
                    </li>
                  ))}
              </ul>
              <p>{experience.desc}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
