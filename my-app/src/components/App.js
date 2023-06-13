import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar'; 
import Home from './Home';
import Drinks from './Drinks';
import CreateDrink from './CreateDrink';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/drinks" element={<Drinks />} />
          <Route path='/createdrink' element={<CreateDrink />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
