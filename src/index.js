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
ReactDOM.render(
	<>
		<h1 className="heading">My name is {name}</h1>
		<img src={imgLink} alt="not found" />
		<a href={anchorLink}>Google</a>
		<p>Today's date:: {dateString}</p>
		<p>Current Time:: {timeString}</p>
	</>,
	rootTag
);
