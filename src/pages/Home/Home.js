import React from "react";
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
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_text">
          <motion.div
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            
          >
            <h3>Andrei kusakin</h3>
            <p>Web designer & developer</p>
          </motion.div>
        </div>
        <motion.span
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="middle-line"
        ></motion.span>
        <nav className="home-nav">
          <motion.ul className="list-none" transition={{ staggerChildren: 2 }}>
            {menuItem.map((item, i) => (
              <motion.li
                initial={{ x: -720, skew: "-30deg" }}
                animate={{ x: 0, skew: "0" }}
                transition={{ duration: 2, delay: 1.5 + i * 0.1 }}
              >
                <a href={item.link}>
                  <motion.div 
                    className="home-menu_item"
                    whileHover={{ x: 20, fontVariationSettings: "slnt: -10" }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>

      <div className="home-socials">
        <ul>
          {socials.map((item, i) => (
            <motion.li className="home-socials_item"
            whileHover={{ x: 5 }}
                >
              <a
                
              href={item.link}>
                <motion.div
                initial={{ y: 50}}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2 + (i * 0.3) }} >{item.name}</motion.div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
