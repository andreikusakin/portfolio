import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/menu/Menu";
import {
  Routes,
  Route,
  useLocation,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  console.log(location);



  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2, delay: 2 }}
        className="background"
      ></motion.div>
      
        
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              
                <Route index element={<Home />} />
                <Route path="/" element={<Menu />} >
                  <Route path="/about" element={<About />}  />
                  <Route path="/contact" element={<Contact />}  />
                </Route>
              
            </Routes>
          </AnimatePresence>
        
     

    
    </div>
  );
}

export default App;
