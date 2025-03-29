import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-left">
        <Link to="/" className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">Lectury</span>
        </Link>
        </div>
        <div className="nav-right">
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </div>
      </nav>
    );
  };
  
export default Navbar;