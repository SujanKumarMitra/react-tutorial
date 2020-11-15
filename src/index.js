// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootTag = document.getElementById('root');
/**
 * Hello sir,
 * Good Morning (01:00 to 11 am)
 * Good Afternoon (12:00 to 7 pm)
 * Good Night (7 pm to 00)
 */
const getGreetings = (hour) => {
	if (hour >= 1 && hour <= 11)
		return 'Good Morning';
	else if (hour >= 12 && hour < 19)
		return 'Good Afternoon';
	else
		return 'Good Night';
}
const hours = new Date().getHours();
const message = 'Hello Sir,';
const greetings = getGreetings(hours);

ReactDOM.render(
	<>
		<div>
			<h1>{message} <span style={{ color: 'green' }}>{greetings}</span></h1>
		</div>
	</>,
	rootTag
);


