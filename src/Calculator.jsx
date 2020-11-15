import React from "react";
import './index.css';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


export default function Calculator() {

	const num1 = 10;
	const num2 = 3;

	return (
		<>
			<ul>
				<li>Sum of {num1} and {num2} is {add(num1, num2)} </li>
				<li>Sub of {num1} and {num2} is {subtract(num1, num2)} </li>
				<li>Mult of {num1} and {num2} is {multiply(num1, num2)} </li>
				<li>Div of {num1} and {num2} is {divide(num1, num2).toFixed(2)} </li>
			</ul>
		</>
	);
}