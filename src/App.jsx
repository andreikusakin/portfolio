import "./App.css";
import React, { useRef } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/menu/Menu";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Work from "./pages/Work/Work";
import { Scene } from "./components/scene/Scene";


function App() {
  const location = useLocation();

  const [menuVisible, setMenuVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  }, [location]);

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };


  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2, delay: 2 }}
        className="background"
      >
        <Scene mouse={mouse} />
      </motion.div>
      <Menu visible={menuVisible} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
