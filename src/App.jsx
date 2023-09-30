import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/menu/Menu";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Work from "./pages/Work/Work";

function App() {
  const location = useLocation();

  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  }, [location]);

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2, delay: 2 }}
        className="background"
      ></motion.div>
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
