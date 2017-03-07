import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from '../logo.svg';
import './hello-world.scss';

function testDecorator(target) {
    console.log(target);
  target.isfunny = true;
}
@testDecorator
export default class HelloWorld extends Component {
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
    console.log(this);
    console.log(this.isfunny, 'support decorator');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to hello world page.</h2>
        </div>
        <p className="App-intro">
          <Link to="hello-react"> go to hello react page. </Link>
        </p>
      </div>
    );
  }
}
