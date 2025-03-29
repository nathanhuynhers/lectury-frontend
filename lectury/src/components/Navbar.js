import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">Lectury</span>
        </div>
        <div className="nav-right">
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    );
  };
  
export default Navbar;