import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default @testDecorator class App extends Component {
  timeout () {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  async componentDidMount () {
    await this.timeout();
    const test = {
      a: '123',
      b: '456'
    };
    console.log('support async await.');
    console.log({...test}, 'support ...');
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

function testDecorator(target) {
  target.isfunny = true;
}

