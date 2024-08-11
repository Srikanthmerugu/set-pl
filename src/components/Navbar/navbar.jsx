import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

        <a href="/" className="active">Home</a> 
        
        <div className="navbar-dropdown">
          <a href="#" className="dropdown-link">Services</a>
          <div className="dropdown-content">
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </div>
        </div>
        
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button className="navbar-button">Sign Up</button>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <AiOutlineMenuUnfold size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
