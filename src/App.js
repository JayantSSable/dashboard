import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateRange from './components/DateRange';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DateRange/>
      </div>
    );
  }
}

export default App;
