import React from 'react'
import './about.css'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const listItemMenu = {
  hidden: { x: -720, skew: "-30deg", opacity: 0 },
  show: { x: 0, skew: "0", opacity: 1 },
};

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

export default function About() {
  return (
    <div className='about-page'><nav>
      
      </nav>{menuItem.map((item, i) => (
              <motion.li
                key={i}
                variants={listItemMenu}
                transition={{ duration: 1.5 }}
                exit={{ x: -780, opacity: 0 }}
                // initial={{ x: -720, skew: "-30deg" }}
                // animate={{ x: 0, skew: "0" }}
                // transition={{ duration: 2 }}

                // exitTransition={{ duration: 2, delay: 0  }}
              >
                {/* delay: 1.5 + i * 0.1  */}
                <Link to={item.link}>
                  <motion.div
                    className="home-menu_item"
                    whileHover={{ x: 20, fontVariationSettings: "slnt: -10" }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.li>
            ))}</div>
  )
}
