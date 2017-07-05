import React, { Component } from 'react';
import Header from './components/Header';
import TimeForm from './components/TimeForm';
import Poem from './components/Poem';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TimeForm/>
        <Poem/>
      </div>
    );
  }
}

export default App;
