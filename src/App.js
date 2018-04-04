import React, { Component } from 'react';
import './App.css';
import MainDetails from './components/Main-Details';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
