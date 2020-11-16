import React, { useState } from 'react';

export default function Form(props) {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  const getMessage = (data) => {
    return `Data:: First Name='${data.firstName}', Last Name='${data.lastName}', 
    Email = '${data.email}', Mobile='${data.mobile}'`;
  }
  const [message, setMessage] = useState(getMessage(formData));

  const submitEvent = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };


  const onChangeEventHandler = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    const data = { [fieldName]: value };
    const newData = { ...formData, ...data };
    setFormData(newData);
    setMessage(getMessage(newData));
  };

  return (
    <>
      <div>
        {message}
      </div>
      <form onSubmit={submitEvent}>
        <input onChange={onChangeEventHandler} type='textbox' placeholder='First Name' name='firstName' /> <br />
        <input onChange={onChangeEventHandler} type='textbox' placeholder='Last Name' name='lastName' /> <br />
        <input onChange={onChangeEventHandler} type='email' placeholder='Email' name='email' /> <br />
        <input onChange={onChangeEventHandler} type='number' placeholder='Mobile' name='mobile' /> <br />
        <input type='submit' />
      </form>
    </>
  );
}
