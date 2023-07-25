import React from "react";
import "./menu.css";
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
  exit: { opacity: 0, display: "none" },
};

const containerMenuFullScreen = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0, display: "none" },
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
      duration: 1.5,
    },
  },
  exit: { opacity: 0, transition: { duration: 1.5, delay: 0.5 } },
};



const top = {
  rest: { rotate: 0, y: 0 },
  open: {
    y: 12,
    rotate: 45,
    transition: {
      duration: 0.2
    }
  }
}

const middle = {
  rest: { fillOpacity: 0, x: 0, opacity: 1 },
  open: {
    x: 10,
    opacity: 0,
  },
  hover: {
    fillOpacity: 1,
    x: 5,
    transition: {
      duration: 0.2
    }
  }
}

const bottom = {
  rest: { rotate: 0, y: 0 },
  open: {
    y: -12,
    rotate: -45,
    transition: {
      duration: 0.2
    }
  }
}

export default function Menu({ visible }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const location = useLocation();

  return (
    <div>
      <div className="menu-btn">
        <motion.svg
          initial="rest"
          whileHover="hover"
          onClick={() => setMenuIsOpen(menuIsOpen => !menuIsOpen)}
          animate={menuIsOpen ? "open" : "rest"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          width="52"
          height="52"
          className="svg-btn"
        >
          <title>Menu</title>
          <motion.rect variants={top}  x="4" y="8" width="40px" height="6px" rx="3" ry="3"></motion.rect>
          <motion.rect variants={middle} x="4" y="20" width="40px" height="6px" rx="3" ry="3"></motion.rect>
          <motion.rect variants= {bottom} x="4" y="32" width="40px" height="6px" rx="3" ry="3"></motion.rect>
        </motion.svg>
      </div>
      <motion.div
        className="blur-background"
        variants={background}
        initial="hidden"
        animate={visible ? "visible" : "exit"}
      ></motion.div>
      <motion.nav className="side-menu">
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
                style={{
                  color:
                    location.pathname === item.link ? "transparent" : "white",
                  WebkitTextStroke:
                    location.pathname === item.link ? "1px white" : "0px",
                }}
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

      {menuIsOpen ? (
        <motion.nav
          variants={containerMenuFullScreen}
          initial="hidden"
          animate={visible ? "visible" : "exit"}
          className="menu-fullscreen"
        >
          <ul>
          {menuItem.map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.li
                variants={listItemMenu}
                className="side-menu-item-fullscreen"
                style={{
                  color:
                    location.pathname === item.link ? "transparent" : "white",
                  WebkitTextStroke:
                    location.pathname === item.link ? "1px white" : "0px",
                }}
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
          ))}</ul>
        </motion.nav>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
