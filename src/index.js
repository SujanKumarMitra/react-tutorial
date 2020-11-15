// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from "react-dom";

// ReactDOM.render('Display What?', 'Display Where?', callbackfn);
// ReactDOM.render(
//   <h1>Sujan Kumar Mitra</h1>, // JSX expression BabelJS
//   document.getElementById('root')
// );

const rootTag = document.getElementById("root");
ReactDOM.render(React.createElement("h1",null,"Sujan"), rootTag);

const nameTag = document.createElement("h1");
nameTag.innerHTML="Sujan Mitra";
rootTag.appendChild(nameTag);