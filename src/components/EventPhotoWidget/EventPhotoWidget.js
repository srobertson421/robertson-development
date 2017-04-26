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
        <img className="img-responsive" src={this.props.imagePath} alt={`${this.props.currentPage} side pic`} />
      </div>
    );
  }
}

export default EventPhotoWidget;
