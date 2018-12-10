import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
            <h3 className="page-header">Contact</h3>
            <hr id="contact-hr" className="pretty"></hr>
            <p>Sharon Robertson</p>
            <p>sharon@robertson-development.com</p>
            <p>(509) 991-0301</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/robertsonsharon" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/Robertson-Marketing-Development-LLC-632060233663061/" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
