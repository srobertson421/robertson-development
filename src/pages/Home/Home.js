import React, { Component } from 'react';
import './Home.css';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="home-header page-header">{this.props.pageData.mainText.text}</h3>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
