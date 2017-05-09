import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
            <h3 className="page-header">Services</h3>
            <hr className="pretty"></hr>
            <div className="row">
              <div className="three columns service-item">
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <p>Grant Writing</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <p>Annual Fund Development</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-bullhorn" aria-hidden="true"></i>
                <p>Funding Stream Coaching</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-microphone" aria-hidden="true"></i>
                <p>Public Speaking</p>
              </div>
            </div>
            <div className="row">
              <div className="three columns service-item">
                <i className="fa fa-users" aria-hidden="true"></i>
                <p>Event Planning</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <p>Board Training</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-share-alt" aria-hidden="true"></i>
                <p>Social Media</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <p>Lead Generation</p>
              </div>
            </div>
            <div className="row">
              <div className="three columns service-item">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <p>Volunteer Development</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>Appeal Letters and Newsletters</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-star" aria-hidden="true"></i>
                <p>Donor Appreciation</p>
              </div>
              <div className="three columns service-item">
                <i className="fa fa-gift" aria-hidden="true"></i>
                <p>Planned and Legacy Gifts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
