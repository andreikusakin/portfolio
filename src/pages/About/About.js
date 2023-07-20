import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerMenu = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const listItemMenu = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const menuItem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <motion.div
        className="blur-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, transition:{ duration: 1.5, delay: .5 } }}
      ></motion.div>

      <div className="about-content">
        <motion.div
          className="about-photo"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
        >
          <img alt="" src="https://i.imgur.com/AnIudvv.jpg" />
        </motion.div>
        <div className="about-title">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            About
          </motion.h2>
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          ></motion.hr>
        </div>

        <motion.div className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
        >
          <p>
            Hi there! I'm Andrei Kusakin, a full-stack web developer with a
            degree in Software Engineering. I love crafting websites and
            applications that are not only easy to use but also look great.
          </p>
          <p>
            Beyond coding, I enjoy making music and photography in my free time.
            It helps me to balance my technical work and keeps me creative.
          </p>
        </motion.div>

        <motion.a href=""
          className="resume-link"
          initial={{y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          exit={{ y: 30, opacity: 0, transition: { duration: 1 } }}
        >resume</motion.a>
      </div>
      <nav className="about-nav">
        <motion.ul
          className="nav-list"
          variants={containerMenu}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {menuItem.map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.li
                variants={listItemMenu}
                className="about-menu-item"
                transition={{ duration: 1 }}
              >
                <motion.div
                  whileHover={{ fontVariationSettings: "'wdth' 600" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.div>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}
