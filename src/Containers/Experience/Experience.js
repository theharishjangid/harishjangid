import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Experience.scss";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceData, EducationData } from "../../data/experience";
import { ExperienceModal } from "../../Components";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Experience = (props) => {
  const [timelineModal, setTimelineModal] = useState(false);
  return (
    <div className="app__experience_container" id="experience">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__experience_heading"
      >
        <h2>
          <MdWork />
          Professional Journey
        </h2>
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
            onTimelineElementClick={() => setTimelineModal(experience)}
          >
            <div className="app__experience_card_data">
              <h3>
                {<experience.icon />}
                {experience.role}
              </h3>
              <h4>{experience.name}</h4>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__experience_heading"
      >
        <h2>
          <IoSchool />
          Educational Journey
        </h2>
      </motion.div>
      <VerticalTimeline>
        {EducationData.map((education, index) => (
          <VerticalTimelineElement
            layout="1-column-left"
            date={education.date}
            icon={
              <div className="app__experience_card-img">
                <img src={education.logo} alt={education.name} />
              </div>
            }
            key={`education-${index}`}
            onTimelineElementClick={() => setTimelineModal(education)}
          >
            <div className="app__experience_card_data">
              <h3>
                {<education.icon />}
                {education.role}
              </h3>
              <h4>{education.name}</h4>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {timelineModal &&
        createPortal(
          <ExperienceModal
            data={timelineModal}
            closeModal={setTimelineModal}
            mode={props.mode}
          />,
          document.getElementById("modals")
        )}
    </div>
  );
};

export default Experience;
