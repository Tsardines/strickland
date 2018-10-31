import React, { Component } from 'react';
import './Products.css';


class Products extends Component {
  render() {
    return (
      <div className="products-cont">

        <h1 className="h1-products">Products</h1>

        <div className="boxes">

          <div className="box">
            <img src="https://www.advancedpropaneinc.com/wp-content/themes/advancedpropane/images/advanced-ico-home-tank.png" alt="box-img" className="prod-img"></img>
            <div className="btn"><a href="#">Browse Propane</a></div>
          </div>

          <div className="prod">
            <img src="https://mobileimages.lowes.com/product/converted/089301/089301988026.jpg" alt="box-img" className="prod-img"></img>
            <div className="btn"><a href="#">Browse Propane Accessories</a></div>
          </div>

        </div>

      </div>
    );
  }
}

export default Products;
