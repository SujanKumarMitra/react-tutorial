// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from "react-dom";
const rootTag = document.getElementById('root');


const name = "Sujan Kumar Mitra";
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

const imgLink = "https://picsum.photos/200/300";
const anchorLink = "https://www.google.com";
ReactDOM.render(
	<>
		<h1 contentEditable="true">My name is {name}</h1>
		<img src={imgLink} alt="not found" />
		<a href={anchorLink}> hello</a>
		<p>Today's date:: {dateString}</p>
		<p>Current Time:: {timeString}</p>
	</>,
	rootTag
);
