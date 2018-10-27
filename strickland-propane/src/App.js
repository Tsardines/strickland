import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav/Nav.js';
import Body from './Components/Body/Body.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />

      </div>
    );
  }
}

export default App;
