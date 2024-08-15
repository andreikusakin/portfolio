import React, { useState } from "react";
import "./work.css";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projectsList } from "../../data/projectsList";

const workLeftAnimations = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const leftListItem = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Work() {
  const [mouseHover, setMouseHover] = useState(null);

  return (
    <div className="work-page">
      <div className="page-title">
        <motion.h2
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: 100, opacity: 0 }}
        >
          Work
        </motion.h2>
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        ></motion.hr>
      </div>
      <div className="work-sections">
        <div className="work-left">
          <motion.ul
            variants={workLeftAnimations}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {projectsList.map((p, index) => (
              <motion.li
                variants={leftListItem}
                transition={{ duration: 1 }}
                key={index}
                onMouseEnter={() => {
                  setMouseHover(p);
                }}
              >
                <motion.h3
                  whileHover={{ fontVariationSettings: "'wdth' 600" }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={p.url} target="_blank">
                    {p.name}
                    <FiArrowUpRight />
                  </a>
                </motion.h3>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="project"
          style={{
            opacity: mouseHover ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: mouseHover ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          {mouseHover && (
            <>
              <img src={mouseHover.image} alt={mouseHover.name} />
              <div className="project-info">
                <div className="project-description">
                  {mouseHover.description}
                </div>
                <div>
                  <div className="project-category">{mouseHover.category}</div>
                  <div>
                    {mouseHover.techStack.split(",").map((tech, index) => (
                      <div key={index}>{tech}</div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
