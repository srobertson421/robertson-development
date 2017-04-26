import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { storage } from '../../services/firebase-service';
import { getCurrentLocation } from '../../services/helpers-service';
const navbarRef = storage.ref().child('navbar');
const largeLogo = navbarRef.child('large_logo.png');

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerLogo: '',
      menuOpen: false,
      currentPage: getCurrentLocation(true)
    }
  }

  componentDidMount() {
    largeLogo.getDownloadURL().then((url) => {
      this.setState({headerLogo: url});
    });
  }

  render() {
    //let adminLink = null;
    // if(this.props.isLoggedIn) {
    //   adminLink = <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/admin">Admin</NavLink></li>
    // }
    let adminLink = <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/admin">Admin</NavLink></li>
    return (
      <div>
        <img id="header-image" className="img-responsive" src={this.state.headerLogo} alt="Robertson Development Logo"/>
        <nav id="navbar" className="u-full-width">
          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <p className="page-indicator">{this.state.currentPage}</p>
                <button className="menu-toggle" onClick={(e) => {this.toggleMenu(e)}}>
                  <i className="fa fa-bars"></i>
                </button>
                <div className="clearfix"></div>
                <ul id="nav-collapse" className={`nav-links ${this.state.menuOpen ? 'open' : ''}`}>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink exact to="/">Home</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/resources">Resources</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/about">About</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/services">Services</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/blog">Blog</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/testimonials">Testimonials</NavLink></li>
                  <li onClick={(e) => {this.toggleMenu(e)}}><NavLink to="/contact">Contact</NavLink></li>
                  {adminLink}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  toggleMenu(e) {
    let reverseMenu = !this.state.menuOpen;
    this.setState({menuOpen: reverseMenu, currentPage: e.target.innerText});
  }
}

export default Navbar;
