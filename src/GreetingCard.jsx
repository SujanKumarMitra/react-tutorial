/**
 * Hello sir,
 * Good Morning (01:00 to 11 am)
 * Good Afternoon (12:00 to 7 pm)
 * Good Night (7 pm to 00)
 */
import React from "react";
import './index.css';

const message = 'Hello Sir,';
const getGreetings = (hour) => {
  if (hour >= 1 && hour <= 11)
    return 'Good Morning';
  else if (hour >= 12 && hour < 19)
    return 'Good Afternoon';
  else
    return 'Good Night';
}

export default function GreetingCard() {
  const greetings = getGreetings(new Date().getHours());
  return (
    <>
      <div>
        <h1>{message} <span style={{ color: 'green' }}>{greetings}</span></h1>
      </div>
    </>
  );
}