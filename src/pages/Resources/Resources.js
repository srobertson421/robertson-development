import React, { Component } from 'react';

import resourcesImage from '../../images/flowers.jpg';
import './Resources.css';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Resources extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="page-header">These are people I've worked with and highly recommend</h3>
            <hr className="pretty"></hr>
            <div>
              <h6>Graphic Design - Mandy Frei</h6>
              <a className="button resource-link" target="_blank" href="http://www.mandyfreidesign.com">Website</a>
            </div>
            <div>
              <h6>Web Development - Sean Robertson</h6>
              <a className="button resource-link" target="_blank" href="https://www.linkedin.com/in/sean-robertson-1300725a">Website</a>
            </div>
            <div>
              <h6>Large Event and Conference Planning - Sheri Sinn and Toni Hansen </h6>
              <a className="button resource-link" target="_blank" href="http://www.donedetailz.com">Website</a>
            </div>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} imagePath={resourcesImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
