import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?t=st=1723481163~exp=1723484763~hmac=58a4e4a57458e87544fb87c83c9d7498a3628f1140cae12bb3a065729607fb01&w=1060" width="230px" height="50px"/>

        {/* <span className="navbar-close" onClick={toggleMenu}><AiOutlineMenuUnfold /></span> */}
        <a href="/" className="active" onClick={handleLinkClick}>Home</a>
        
        <div className="navbar-dropdown" onClick={handleLinkClick}>
          <a href="#" className="dropdown-link">Services</a>
          <div className="dropdown-content">
            <a href="#" onClick={handleLinkClick}>Service 1</a>
            <a href="#" onClick={handleLinkClick}>Service 2</a>
            <a href="#" onClick={handleLinkClick}>Service 3</a>
          </div>
        </div>
        
        <a href="/about" onClick={handleLinkClick}>About</a>
        <a href="/contact" onClick={handleLinkClick}>Contact</a>
        <button className="navbar-button" onClick={handleLinkClick}>Sign Up</button>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <AiOutlineMenuUnfold size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
