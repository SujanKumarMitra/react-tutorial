// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

const rootTag = document.getElementById('root');


const name = "Sujan Kumar Mitra";
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

const imgLink = "https://picsum.photos/200/300";
const anchorLink = "https://www.google.com";
const inlineCSS = { 
	color: 'red',
	textTransform: 'capitalize',
	textAlign: 'center',
    fontWeight: 'bold',
	fontFamily: 'Roboto',
	textShadow: '0px 2px 4px'
};
ReactDOM.render(
	<>
		<h1 style={inlineCSS}>My name is {name}</h1>
		<div className="images">
			<img src={imgLink} alt="not found" />
			<img src={imgLink} alt="not found" />
			<img src={imgLink} alt="not found" />
		</div>
		{/* <a href={anchorLink}>Google</a>
		<p>Today's date:: {dateString}</p>
		<p>Current Time:: {timeString}</p> */}
	</>,
	rootTag
);
