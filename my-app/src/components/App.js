import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar'; 
import Home from './Home';
import Drinks from './Drinks';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
