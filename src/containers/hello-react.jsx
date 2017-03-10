import React, { Component } from 'react';
import {Link} from 'react-router';

import './hello-react.less';

export default class HelloReact extends Component {
  componentDidMount() {
    /* eslint-disable no-console */
    console.log('support less');
  }
  render() {
    return (
      <div className="hello_react">
        <h2>This is hello react page.</h2>
        <Link to={'/'}>back to hello world page.</Link>
      </div>
    );
  }
}
