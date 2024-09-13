'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="https://yourjunkremoved.com/" className="navbar-brand">
          <img
            src="https://yourjunkremoved.com/wp-content/uploads/2022/06/Your-Junk-Removed_logo-01-300x78.png"
            alt="logo"
            className="img-fluid mx-3 my-2 img-logo"
            style={{ maxWidth: '200px', height: 'auto' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link px-4" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">Junk Removal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">Dumpster Rental</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">Moving Services</a>
            </li>
          </ul>
        </div>
        <div className="nav-sec">
          <button className="nav-button" type="button">
            REQUEST A FREE ESTIMATE
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
