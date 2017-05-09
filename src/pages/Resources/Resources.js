import React, { Component } from 'react';
import './Resources.css';

class Resources extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
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
        </div>
      </div>
    );
  }
}

export default Resources;
