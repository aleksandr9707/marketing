import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#home">Home</a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#services">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#results">Results</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
