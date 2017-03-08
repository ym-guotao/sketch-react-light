import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from '../logo.svg';
import './hello-world.scss';

function testDecorator(target) {
  target.isfunny = 'Hi, I am very funny.';
  target.tryFunny = function(){return '12345';}
  return target;
}

@testDecorator 
export default class HelloWorld extends Component {
  constructor (props) {
    super();

    this.tryFunny = this.__proto__.constructor.tryFunny.bind(this);
  }
  timeout () {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  async componentDidMount () {
    await this.timeout();
    const test = {
      a: '123',
      b: '456'
    };
    console.log('support sass');
    console.log('support async await.');
    console.log({...test}, 'support ...');
    // console.log(this.__proto__.constructor.isfunny);
    // console.log(HelloWorld.tryFunny());
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

