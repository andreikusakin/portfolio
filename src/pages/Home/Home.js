import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";

const socials = [
  {
    name: "linkedin",
    link: "",
  },
  {
    name: "github",
    link: "",
  },
  {
    name: "twitter",
    link: "",
  },
];

const menuItem = [
  
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

const containerSocials = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2,
    },
  },
}

const listItemSocials = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1}
}

const listItemMenu = {
  hidden: { x: -720, skew: "-30deg", opacity: 0 },
  visible: { x: 0, skew: "0", opacity: 1 } 
};

const listItemText = {
  hidden: { x: 700, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Home() {
  return (
    
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_text">
          <motion.div
            // initial={{ x: 700 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 2, delay: 1 }}
            // exit={{ x: 500 }}
            variants={containerMenu}
            initial="hidden"
            animate="visible"
            
          >
            <motion.h3
              variants={listItemText}
              transition={{ duration: 1.5, type: "tween"}}
              exit={{ x: 780 }}
            >
              Andrei kusakin
            </motion.h3>
            <motion.p
              variants={listItemText}
              transition={{ duration: 1.5, type: "tween" }}
              exit={{ x: 780, opacity: 0 }}
            >
              Web designer & developer
            </motion.p>
          </motion.div>
        </div>
        <motion.span
          key="line"
          initial={{ scale: 0, rotate: 90  }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, scale: 1.3 }}
          className="middle-line"
        ></motion.span>

        <nav className="home-nav">
          <motion.ul
            className="list-none"
            variants={containerMenu}
            initial="hidden"
            animate="visible"
            exit={{ x: -780, opacity: 0, transition: { x: { duration: 1 }, opacity: { duration: 1 } } }}
          >
            {menuItem.map((item, i) => (
              <motion.li
                key={i}
                variants={listItemMenu}
                transition={{ duration: 1.5 }}
                // exit={{ x: -780, opacity: 0 }}
              //  exit={{ x: -780, opacity: 0, transition: { x: { duration: 5 }, opacity: { duration: 5 }} }}
              >
                {/* delay: 1.5 + i * 0.1  */}
                <Link to={item.link}>
                  <motion.div
                    className="home-menu_item"
                    whileHover={{ fontVariationSettings: "'wdth' 800" }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>

      <div className="home-socials">
        <motion.ul
        variants={containerSocials}
        initial="hidden"
        animate="visible">
          {socials.map((item, i) => (
            <motion.li
              className="home-socials_item"
              key={i}
              whileHover={{ x: 5 }}
              
            >
              <a href={item.link}>
                <motion.div
                variants={listItemSocials}
                transition={{ duration: 1 }}
                exit={{ y: 20, opacity: 0 }}
                  // initial={{ y: 50 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 1, delay: 2 + i * 0.3 }}
                  // exit={{ y: 50 }}
                >
                  {item.name}
                </motion.div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
