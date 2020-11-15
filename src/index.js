// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from "react-dom";

const rootTag = document.getElementById('root');


const firstName = "Sujan";
const lastName = "Mitra";
ReactDOM.render(
	<>
	<h1>{firstName} {lastName}</h1>
	</>,
	rootTag
);
