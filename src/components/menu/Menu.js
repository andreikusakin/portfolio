import React from 'react'
import './menu.css'
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const containerMenu = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
    exit: { opacity: 0 }
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
      link: "/contact",
    },
  ];

  const background = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    },
    exit: { opacity: 0, transition:{ duration: 1.5, delay: .5 } }
  }

export default function Menu( { visible }) {

    const location = useLocation();


  return (
    <div>
        <motion.div
        className="blur-background"
        variants={background}
        initial="hidden"
        animate={visible ? "visible" : "exit"}
        
      ></motion.div>
    <motion.nav className="side-menu"
    >
        <motion.ul
          className="nav-list"
        //   style={{
        //     selectedItem
        //   }}
          variants={containerMenu}
          initial="hidden"
          animate={visible ? "visible" : "exit"}
        //   exit={{ opacity: 0 }}
        >
          {menuItem.map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.li
                variants={listItemMenu}
                className="side-menu-item"
                style={{ color: location.pathname === item.link ? "transparent" : "white",
                WebkitTextStroke: location.pathname === item.link ? "1px white" : "0px"  }}
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
      </motion.nav>
      <Outlet />
      </div>
  )
}
