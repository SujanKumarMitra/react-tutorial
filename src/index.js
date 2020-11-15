import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render('Display What?', 'Display Where?', callbackfn);
ReactDOM.render(
  <span>Hello World!!</span>,
  document.getElementById('root'),
  () => console.log("callbackfn")
);