import React from "react";
import "./Experience.scss";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceData from "../../data/experience"

const Experience = () => {
  return (
    <div className="app__experience_container" id="experience">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__experience_heading"
      >
        <h2>Professional Journey</h2>
      </motion.div>
      <VerticalTimeline>
        {ExperienceData.map((experience, index) => (
          <VerticalTimelineElement
            date={experience.date}
            icon={
              <div className="app__experience_card-img">
                <img src={experience.logo} alt={experience.name} />
              </div>
            }
            key={`experience-${index}`}
          >
            <div className="app__experience_card_data">
              <h3>{<experience.icon/ >}{experience.role}</h3>
              <h4>{experience.name}</h4>
              {experience.about && <h5>{experience.about}</h5>}
              <ul>
                {experience.promotions &&
                  experience.promotions.map((promotion_data, index) => (
                    <li key={`promotion-${index}`}>
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
