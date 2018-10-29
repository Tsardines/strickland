import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav/Nav.js';
import Body from './Components/Body/Body.js';
import Footer from './Components/Footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer />

      </div>
    );
  }
}

export default App;
