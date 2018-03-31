import React, { Component } from 'react';
import './App.css';
import Rate from './components/Rate';
import Exchange from './containers/Exchange';

class App extends Component {
  render() {
    return (
      <div>
        <Rate/>
        <Exchange/>
      </div>
    );
  }
}

export default App;
