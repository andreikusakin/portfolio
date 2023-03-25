import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2, delay: 2 }}
        className="background"
      ></motion.div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
