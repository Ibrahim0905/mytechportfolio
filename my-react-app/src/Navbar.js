
import React from 'react';


function Navbar() {
  return (
    <nav>
      <div className="nav__bar">
        <a href="#">
          <span className="logo nav__logo">I</span> Ibrahim
        </a>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-3-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="btn">Contact</a></li>
      </ul>
      <a href="#contact" className="btn btn__large">Contact</a>
    </nav>
  );
}

export default Navbar;
