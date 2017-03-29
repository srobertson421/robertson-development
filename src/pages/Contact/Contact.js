import React, { Component } from 'react';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';

class Contact extends Component {
  render() {
    let items = [];
    for(let key in this.props.pageData.mainText) {
      if(key === 'lede' || key === 'type') {
        continue;
      }

      items.push((<p key={key}>{this.props.pageData.mainText[key]}</p>));
    }

    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
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

export default Contact;
