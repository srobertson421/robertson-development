import React, { Component } from 'react';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h1>{this.props.pageData.mainText}</h1>
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
