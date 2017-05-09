import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
            <h3 className="home-header">Connecting people and organizations to ideas and resources that create opportunities to grow</h3>
            <hr className="pretty"></hr>
            <h3 className="home-header">I can help with</h3>
            <div className="row">
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <p>Grant Writing</p>
                </Link>
              </div>
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <p>Annual Fund Development</p>
                </Link>
              </div>
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                  <p>Funding Stream Coaching</p>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-microphone" aria-hidden="true"></i>
                  <p>Public Speaking</p>
                </Link>
              </div>
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <p>Event Planning</p>
                </Link>
              </div>
              <div className="one-third column service">
                <Link to="/services">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <p>Board Training</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
