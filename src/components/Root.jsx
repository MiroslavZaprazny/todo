import React from 'react';
import App from '../App';
import About from './pages/About';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';

const Root = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Root;
