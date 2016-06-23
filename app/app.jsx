var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

// App css
require('style!css!sass!applicationStyles')

var Test = require('Test');
ReactDOM.render(
  <Test/>,
  document.getElementById('app')
);
