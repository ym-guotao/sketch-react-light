import React, { Component } from 'react';
import {Link} from 'react-router';

export default class HelloReact extends Component{
  render(){
    return(
      <div>
        <h2>This is hello react page.</h2>
        <Link to={'/'}>back to hello world page.</Link>
      </div>
    );
  }
}