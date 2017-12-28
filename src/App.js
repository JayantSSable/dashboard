import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateRange from './components/DateRange';
import { Button } from 'antd';
import axios from 'axios';

require('antd/dist/antd.css');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateRange: {},
      items: {}
    }
  }

  handleSubmit = (e) => {
    console.log(this.state.dateRange);
    var instance = axios.create({
      baseURL: 'http://mo-98dfa2032.mo.sap.corp:8080/job',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar',
      'Authorization': ''
      }
    });
    instance.get('/lumira.components--master-Vote_win64/api/json')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    /*fetch('http://mo-98dfa2032.mo.sap.corp:8080/job/lumira.components--master-Vote_win64/api/json', {
      headers: {
        "Authorization": ""
      },  
      mode: 'no-cors'
    })
      .then(result => result.text())
      .then((result) => { debugger; return result.substring(3) })
      .then(items => this.setState({ items }));*/
  }

  onUpdate = (val) => {
    this.setState({ dateRange: val });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DateRange onUpdate={this.onUpdate} />
        <Button onClick={this.handleSubmit}> Submit </Button>
      </div>
    );
  }
}

export default App;
