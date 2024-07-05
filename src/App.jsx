// App.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-vertical-timeline-component/style.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
