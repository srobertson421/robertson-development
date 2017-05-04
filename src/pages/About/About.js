import React, { Component } from 'react';

import './About.css';
import aboutImage from '../../images/opportunity.jpg'

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="page-header">Vibrant non-profits and small businesses are my passion. During my career I have</h3>
            <hr className="pretty"></hr>
            <p><span className="accomp-item">*</span> Raised nearly $1.5 million in grants, private donations and other funding</p>
            <p><span className="accomp-item">*</span> Built fundraising and volunteer programs from the ground up</p>
            <p><span className="accomp-item">*</span> Created and implemented many successful fundraising events</p>
            <p><span className="accomp-item">*</span> Presented trainings to non-profit executives and board members</p>
            <p><span className="accomp-item">*</span> Ranked #5 in 2015 for community engagement leaders with a Fortune 500 company</p>
            <p><span className="accomp-item">*</span> Received the 2014 United Way Campaign Excellence award</p>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} imagePath={aboutImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
