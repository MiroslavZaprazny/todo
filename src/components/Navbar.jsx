import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
