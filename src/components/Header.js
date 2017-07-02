/**
 * Created by shubham on 2/7/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './style/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WebApp</h2>
        </div>
        <p className="App-intro">
          Here ,we are going to fetch some data from an external api        </p>
      </div>
    );
  }
}

export default App;
