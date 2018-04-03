import React, { Component } from 'react';
import './App.css';
import MainDetails from './components/Main-Details';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainDetails/>
      </div>
    );
  }
}

export default App;
