import React, { Component } from 'react';
import { handleContent } from '../../services/content-service';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Resources extends Component {
  render() {
    let items = handleContent(this.props.pageData.mainText);

    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3 className="page-header">{this.props.pageData.mainText.lede}</h3>
            {items}
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
