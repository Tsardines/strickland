import React, { Component } from 'react';
import Products from './Products.js';
import Staff from './Staff.js';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="body">

        <div className="banner-img">
          <img src="http://stricklandoil.com/wp-content/uploads/2013/01/3.jpg" alt="banner"></img>
        </div>

        <div className="quote">
          <h1>"We sell propane and propane accessories."</h1>
          <h2>- Hank Hill, Asst. Regional Manager</h2>
        </div>

        <Products />

        <Staff />



      </div>
    );
  }
}

export default Body;
