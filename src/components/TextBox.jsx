import React from 'react'

export default function TextBox(props) {

    return (
        <div className="form-group">
            <label htmlFor="name">{props.question}</label>
            <input type="text" className="form-control"
                id="name" placeholder={props.placeholder} />
        </div>
    );
}
