import React from "react";
import "./ExperienceModal.scss";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const ExperienceModal = (props) => {
  const { data, closeModal, mode } = props;
  return (
    <motion.div
      variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
      initial="hidden"
      animate="visible"
      whileInView={{ scale: 1, opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      className="experience_modal__container" app-theme={mode}
    >
      <div className="experience_modal__data">
        <HiX
          className="experience_modal__data-close"
          onClick={() => closeModal(false)}
        />
        <div className="experience_modal__data-heading">
          <img src={data.logo} alt={data.name} />
          <div>
            <h2>{data.role}</h2>
            <div>
              <a href={data.website} target="_blank" rel="noreferrer">
                {data.name}{" "}
                <FiExternalLink className="experience_modal__data-heading-link" />
              </a>
              <p>{data.date}</p>
            </div>
          </div>
        </div>
        <p>{data.about}</p>
        <div className="experience_modal__data-body">
          {data.experiences.map((experience, index) => (
            <div className="experience_modal__data-experience_item">
              {experience.role && (
                <div className="experience_modal__data-experience_item_heading">
                  <h3>{experience.role}</h3>
                  <p>{experience.duration}</p>
                </div>
              )}
              {experience.desc && <p>{experience.desc}</p>}
              {experience.points && (
                <ul>
                  {experience.points.map((point, index) => (
                    <li key={`${experience.role}-experience-detail-${index}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {experience.skills && (
                <div className="experience_modal__data-experience_item_skills">
                  <h4>{data.education ? "Courses:" : "Technologies:"} </h4>
                  <div>
                    {experience.skills.map((skill, index) => (
                      <span>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceModal;
