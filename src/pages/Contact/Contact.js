import React, { Component } from 'react';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';
import contactImage from '../../images/mountain.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="page-header">Contact</h3>
            <hr className="pretty"></hr>
            <p>Sharon Robertson</p>
            <p>sharon@robertson-development.com</p>
            <p>(509) 991-0301</p>
            <p>P O Box 30774</p>
            <p>Spokane, WA 99223</p>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} imagePath={contactImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
