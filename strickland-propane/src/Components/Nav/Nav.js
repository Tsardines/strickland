import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo-cont"><img src="https://ih1.redbubble.net/image.396928472.1969/ap,550x550,16x12,1,transparent,t.u2.png" alt="logo"></img>
        </div>

        <ul className="nav-ul">
          <li>About</li>
          <li>Products</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
