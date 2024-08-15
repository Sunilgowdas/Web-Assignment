// Inventory/Navbar.js

import React from 'react';
import { FaHome, FaBoxOpen, FaLayerGroup, FaBell, FaQuestionCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar px-5">
      <div className="navbar-left">
        <FaHome className="navbar-icon" />
        <span className="navbar-text">Home</span>
        <FaBoxOpen className="navbar-icon" />
        <span className="navbar-text">Inventory</span>
        <FaLayerGroup className="navbar-icon" />
        <span className="navbar-text">Layers</span>
      </div>
      <div className="navbar-center">
        <input 
          type="text" 
          placeholder="Quick action..." 
          className="navbar-search"
        />
      </div>
      <div className="navbar-right gap-3">
        <FaBell className="navbar-icon" />
        <FaQuestionCircle className="navbar-icon" />
        <div className="navbar-user">
          <span>Don Maggio</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
