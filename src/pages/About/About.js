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
  hidden: {  x: 200, opacity: 0 },
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
      <div className="blur-background"></div>
      
      <div className="about-content">
      <div className="about-photo"><img alt="" src="https://i.imgur.com/AnIudvv.jpg"/></div>
        <div className="about-title"><h2>About</h2>
        <hr></hr></div>
        
        <div className="about-text"><p>Hi there! I'm Andrei Kusakin, a full-stack web developer with a degree in Software Engineering. I love crafting websites and applications that are not only easy to use but also look great.</p>
        <p>Beyond coding, I enjoy making music and photography in my free time. It helps me to balance my technical work and keeps me creative.</p></div>
        
        <a href="">resume</a>
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
                transition={{ duration: 0.3 }}>
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
