import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  timeout () {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  async componentDidMount () {
    await this.timeout();
    const test = {
      a: '123',
      b: '456'
    };
    console.log('mounted.');
    console.log({...test});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
