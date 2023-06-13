import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/createdrink">Create Drink</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
