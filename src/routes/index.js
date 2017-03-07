import React from 'react';
import {Route, Router} from 'react-router';
import HelloWorld from '../containers/hello-world.jsx';
import HelloReact from '../containers/hello-react.jsx';

export default(
  <Router>
    <Route path="/" component={HelloWorld} />
    <Route path="hello-react" component={HelloReact} />
  </Router>
);