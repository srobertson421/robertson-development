import React, { Component } from 'react';

import testimonialsImage from '../../images/pond.jpg';
import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Testimonials extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="page-header">Testimonials</h3>
            <hr className="pretty"></hr>
            <div>
              <i>"I had the privilege of working with Sharon for more than a year. She played a pivotal role in my practice and helping kickstart my career."</i>
              <p>- Brad Messerschmidt, Thrivent Financial</p>
            </div>
            <div>
              <i>"Sharon is one of the best community advocates I have had the pleasure to meet. She truly cares about the groups she partners with and actively seeks to increase their presence in and impact on the community."</i>
              <p>- Heather Beebe-Stevens, Spokane Parks Foundation</p>
            </div>
            <div>
              <i>"...she delivers in the task and customer experience - everytime!"</i>
              <p>- Dave LejaMeyer, Whitworth University</p>
            </div>
            <div>
              <i>"Sharon has significantly increased our donation levels through her creative fundraising events, sponsorships, partnerships, and focus on individual donations."</i>
              <p>- Dave Heyamoto, Spokane Neighborhood Action Partners (SNAP)</p>
            </div>
            <div>
              <i>"Sharon is the type of person you want in the room. She is energetic and always ready to take on a task."</i>
              <p>- Lisa Curtis, United Way of Spokane</p>
            </div>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} imagePath={testimonialsImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
