import React from "react";
import "./home.css";
import { motion } from "framer-motion";

const menuItem = [
    {
        name: "Work",
        link: ""
    },
    {
        name: "About",
        link: ""
    },
    {
        name: "Contact",
        link: ""
    },
]

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_text">
          <h3>Andrei kusakin</h3>
          <p>Web designer & developer</p>
        </div>
        <div className="middle-line">
          <span></span>
        </div>
        <nav>
          <ul className="home-nav">
            {menuItem.map((item) => (
              <li>
                <a href={item.link}>
                  <motion.div
                    whileHover={{ x: 20 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="home-socials">
        <ul>
          <li>
            <a>linkedin</a>
          </li>
          <li>
            <a>github</a>
          </li>
          <li>
            <a>twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
