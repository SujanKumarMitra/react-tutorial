import React, { useState } from 'react'
import SubmitButton from './SubmitButton';
import TextBox from './TextBox';

export default function Form(props) {

  const state = useState('Hello');

  return (
    <div className="container">
      <form action="#">
        <TextBox formState={state} question={state[0]} placeholder="Enter your name" />
        <SubmitButton text={'Enter'} formState={state} />
      </form>
    </div>
  );
}
