import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer-id">

        <div className="left">

          <p>135 Los Gatos Rd - Arlen, TX 78700&nbsp;&nbsp;(512) 652-9889</p>
          <span className="hours"><p>Mon-Fri&nbsp;&nbsp;9AM-5PM&nbsp;&nbsp;&nbsp;Sat-Sun&nbsp;&nbsp;Closed</p></span>
          <span className="copy">&copy; 1997-2018 Strickland Propane</span>

        </div>

      </div>
    );
  }
}

export default Footer;
