import './App.css';
import Home from './pages/Home/Home';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 2 }}
      transition={{ duration: 2, delay: 2 }}
      className='background'></motion.div>
      <Home />
    </div>
        
      
    
  );
}

export default App;
