import React, { useState } from "react";
import "./work.css";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import CallMadeIcon from "@mui/icons-material/CallMade";

const projectsList = [
  {
    name: "Aspen Grove",
    image: "/aspengrove.jpg",
    year: 2022,
    category: "design & development",
    url: "https://www.aspengroveofficial.com/",
    description:
      "Daniel Isaenko, known as Aspen Grove, is a singer-songwriter and producer from Ukraine. He has released two albums, one EP, and several singles. His music is a blend of indie, folk, and electronic.",
  },
  {
    name: "Andrew Kusakin Photography",
    image: "/aspengrove.jpg",
    year: 2022,
    category: "design & development",
    url: "https://www.aspengroveofficial.com/",
    description:
      "Daniel Isaenko, known as Aspen Grove, is a singer-songwriter and producer from Ukraine. He has released two albums, one EP, and several singles. His music is a blend of indie, folk, and electronic.",
  },
];

export default function Work() {
  const [mouseHover, setMouseHover] = useState("");
  console.log(mouseHover);

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
          <ul>
            {projectsList.map((p, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setMouseHover(`${p.name}`);
                }}
                onMouseLeave={() => {
                  setMouseHover("");
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
              </li>
            ))}
          </ul>
        </div>
        <div className="work-right">
          {projectsList.map((p, index) => (
            <motion.div
            key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: p.name === mouseHover ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="project-section"
            >
              <motion.div
                className="project-photo"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
                style={{ backgroundImage: `url(${p.image})` }}
              ></motion.div>

              <motion.div
                className="project-description"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
              >
                <p>{p.description}</p>
              </motion.div>

              <motion.div
                className="project-category"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
              >
                <p>{p.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
