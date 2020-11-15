// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from "react-dom";
const rootTag = document.getElementById('root');


const name = "Sujan Kumar Mitra";
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();
ReactDOM.render(
	<>
		<h1>My name is {name}</h1>
		<p>Today's date:: {dateString}</p>
		<p>Current Time:: {timeString}</p>
	</>,
	rootTag
);
