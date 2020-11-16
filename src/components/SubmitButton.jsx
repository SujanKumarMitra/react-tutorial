import React from 'react'

export default function SubmitButton(props) {
    const [, setState] = props.formState;

    const inputEvent = (event) => {
        const text = document.getElementsByTagName('input')[0].value;
        setState(`Hello ${text}`);
    };
    return (
        <button type="submit" onClick={inputEvent} className="btn btn-primary"> {props.text ? props.text : "Submit"} </button>
    );
}
