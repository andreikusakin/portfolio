import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="page-title">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            Contact
          </motion.h2>
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          ></motion.hr>
        </div>

        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
        >
          <h4>Email</h4>
          <motion.div whileHover={{ x: 10 }}>
            <a href="mailto: andrewkusakin@me.com" className="email-link">
              andrewkusakin@me.com
            </a>
          </motion.div>

          <h4>Socials</h4>
          <ul>
            {socials.map((item, i) => (
              <motion.li whileHover={{ x: 10 }}>
                <a href={item.link} key={i}>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
