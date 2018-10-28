import React, { Component } from 'react';
import './Products.css';


class Products extends Component {
  render() {
    return (
      <div className="body-products-cont">

        <h1 className="h1-products">Products</h1>

        <div className="boxes">

          <div className="box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="btn"><a href="#">Browse Propane</a></div>
          </div>


          <div className="box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="btn"><a href="#">Browse Propane Accessories</a></div>
          </div>

        </div>

      </div>
    );
  }
}

export default Products;
