import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/service';
import SignUp from './routes/signup';
import Login from './routes/Login';
function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
