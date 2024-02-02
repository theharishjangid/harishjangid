import React from "react";
import "./Awards.scss";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import AwardsData from "../../data/awards";
import Award from "../../Components/Award/Award";

const Awards = () => {
  return (
    <div className="app__awards_container" id="awards">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>
            <FaAward />
            Badge Gallery
        </h2>
      </motion.div>
      <div className="app__awards_container-cards">
        {AwardsData.map((award, index) => (
            <Award award={award} />
        ))}
      </div>
    </div>
  );
};

export default Awards;
