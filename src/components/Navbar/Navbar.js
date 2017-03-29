import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" className="u-full-width">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <button className="menu-toggle">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="nav-links">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/resources">Resources</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
