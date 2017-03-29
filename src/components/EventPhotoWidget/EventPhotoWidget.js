import React, { Component } from 'react';

import './EventPhotoWidget.css';

class EventPhotoWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="widget">
        {this.props.currentPage}
      </div>
    );
  }
}

export default EventPhotoWidget;
