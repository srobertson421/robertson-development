import React, { Component } from 'react';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Services extends Component {
  render() {
    let items = [];
    for(let key in this.props.pageData.mainText.listItems) {
      if(key === 'lede' || key === 'type') {
        continue;
      }

      items.push((<li key={key}>{this.props.pageData.mainText.listItems[key]}</li>));
    }

    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <h3>{this.props.pageData.mainText.lede}</h3>
            <ul>{items}</ul>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
