import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateRange from './components/DateRange';
import { Button } from 'antd';
require('antd/dist/antd.css');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateRange : {}
    }
  }

  handleSubmit = (e) => {
    console.log(this.state.dateRange);
  }

  onUpdate = (val) => {
    this.setState({dateRange: val});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DateRange onUpdate={this.onUpdate}/>
        <Button onClick={this.handleSubmit}> Submit </Button>
      </div>
    );
  }
}

export default App;
